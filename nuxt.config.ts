// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    srcDir: 'src/',
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'E-test Paper',
        }
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
            apiBase: process.env.API_BASE_URL
        }
    }
})