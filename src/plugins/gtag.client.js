export default defineNuxtPlugin((nuxtApp) => {
    // Initialize dataLayer if not already done
    window.dataLayer = window.dataLayer || [];

    // GTM helper function for pushing events
    const pushEvent = (eventName, eventData = {}) => {
        window.dataLayer.push({
            event: eventName,
            ...eventData
        });
    };

    // GA4 gtag helper function
    function gtag() {
        window.dataLayer.push(arguments);
    }

    // Provide helpers globally
    nuxtApp.provide('gtm', {
        push: pushEvent,
        dataLayer: window.dataLayer
    });

    nuxtApp.provide('gtag', gtag);
});
