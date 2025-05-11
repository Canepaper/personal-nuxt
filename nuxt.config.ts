// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
        '@pinia/nuxt'
        // 'nuxt-material-design-icons-iconfont'

    ],

    // no robots, no indexing

    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
            ],
            title: "Jacob's Portfolio",

            meta: [
                { name: 'robots', content: 'noindex, nofollow' },
            ]
        },
    },

	vite: {
	   	css: {
            
		  	preprocessorOptions: {
                
				scss: {
					additionalData: `
                    @import "@/assets/css/variables.scss";
                    @import "@/assets/css/mixins.scss";
                    @import "@/assets/css/main.scss";
                    `,

				},
			},
		},
	},
});
