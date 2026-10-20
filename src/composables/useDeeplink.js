/**
 * The tracked "open the app" link for a landing page.
 *
 * The deeplink service records a click server-side at /c/{token} and only then
 * redirects to the right store (or opens the app), so:
 *
 * 1. Use it as a plain <a :href> — a real navigation. Never fetch() it or
 *    preventDefault: that records a click without moving the visitor.
 * 2. Whatever the ad platform put on THIS page's URL must travel with it; those
 *    parameters exist for one request, and a click without them cannot be tied
 *    back to a campaign.
 *
 * Both store badges point at the same link: the service picks the store from the
 * user agent, so which badge was tapped is a signal of intent, not routing. Give a page its own token so its
 * clicks and installs report separately.
 */

// What the deeplink service captures on a click. Sending a key it ignores costs
// nothing; dropping one loses that dimension for good.
const CAMPAIGN_KEYS = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id',
    'campaign_name', 'adset_name', 'ad_name',
    'fbclid', 'gclid', 'gbraid', 'wbraid', 'ttclid', 'msclkid', 'twclid', 'li_fat_id',
]

// Session (not local) storage: one visit from one ad is one attribution.
const STORAGE_KEY = 'etp_deeplink_attr'
const MAX_VALUE_LENGTH = 512
const TOKEN_RE = /^[A-Za-z0-9._-]{1,64}$/

// Storage throws in some privacy modes; a blocked visitor still gets a working,
// just untagged, link.
const readStored = () => {
    try {
        const raw = window.sessionStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : {}
    } catch {
        return {}
    }
}

const persist = (params) => {
    try {
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params))
    } catch {
        // Parameters still reach the link on this page view.
    }
}

// The address bar wins over storage: a second ad click in the same session is
// credited to the second campaign.
const collect = () => {
    const incoming = new URLSearchParams(window.location.search)
    const fresh = {}
    for (const key of CAMPAIGN_KEYS) {
        const value = incoming.get(key)?.trim()
        if (value) fresh[key] = value.slice(0, MAX_VALUE_LENGTH)
    }
    if (Object.keys(fresh).length) {
        persist(fresh)
        return fresh
    }
    return readStored()
}

// Screen signals the service folds into its iOS fingerprint; only the browser
// can supply them.
const deviceSignals = () => {
    try {
        return {
            sw: String(window.screen.width),
            sh: String(window.screen.height),
            dpr: String(window.devicePixelRatio || 1)
        }
    } catch {
        return {}
    }
}

// The configured link with its token swapped for a page's own, so that page
// reports its clicks and installs apart. No/invalid token = the configured link.
const linkFor = (base, token) => {
    if (!TOKEN_RE.test(String(token || ''))) return base
    try {
        return new URL(`/c/${encodeURIComponent(token)}`, base).toString()
    } catch {
        return base
    }
}

// Whether this browser is a phone or tablet, the visitors who can install the
// app. Client-only (reads navigator): call after mount or in an event handler.
export const isMobileDevice = () => {
    if (typeof navigator === 'undefined') return false
    if (navigator.userAgentData?.mobile) return true
    if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) return true
    // iPadOS 13+ reports itself as a Mac; a touch screen gives it away.
    return /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1
}

export const trackAppDownload = (placement, store = 'any') => {
    if (!isMobileDevice()) return
    try {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({event: 'app_download_click', store, placement})
    } catch {
        // Analytics must never stand between a visitor and the download.
    }
}

// Phones get the deeplink, which opens the app or sends them to the right
// store. Desktops have no app to install, so every download button opens the
// website instead. Decided after mount: server-rendered/no-JS HTML always
// carries the deeplink, so a phone whose JavaScript fails still reaches the
// store.
export const useDeeplink = (token) => {
    const {deeplinkUrl, deeplinkDesktopUrl} = useRuntimeConfig().public
    const base = linkFor(deeplinkUrl, token)

    const href = ref(base)

    onMounted(() => {
        if (!isMobileDevice()) {
            href.value = deeplinkDesktopUrl
            return
        }
        try {
            const url = new URL(base)
            for (const [key, value] of Object.entries({...collect(), ...deviceSignals()})) {
                url.searchParams.set(key, value)
            }
            href.value = url.toString()
        } catch {
            // Keep the bare link; a bad query string must not cost the download.
        }
    })

    return {href}
}
