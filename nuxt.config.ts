// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'E-test Paper',
            script: [ { src: 'https://www.googletagmanager.com/gtag/js?id=G-3XRSF2EG1W', async: true },
                {
                    innerHTML: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3XRSF2EG1W');`,
                    type: 'text/javascript',
                    charset: 'utf-8'
                },
                {
                    innerHTML: `
                        (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "mzkt44eclg");`,
                    type: 'text/javascript',
                    charset: 'utf-8'
                },
                { src: "https://www.facebook.com/tr?id=1527387001207075&ev=PageView&noscript=1", async: true },

            ]
        },
    },
    imports: {
        dirs: ['stores'],
    },
    css: ['~/assets/css/tailwind.css', '~/assets/scss/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins: [
        { src: "~/plugins/gtag.client", mode: "client", ssr: false },
        { src: "~/plugins/facebook-pixel.client", mode: "client", ssr: false },
    ],
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', "nuxt-icon", "@nuxt/image"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    },
    runtimeConfig: {
        public: {
            siteName: "e-test paper",
            gtagId: 'GTM-TSW73ZQ2',
            apiBase: process.env.API_BASE_URL
        }
    }
})