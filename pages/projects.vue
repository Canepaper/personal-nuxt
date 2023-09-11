<template>
    <h1 class="title">{{ title[language] }}</h1>
    <p v-if="language == 'en'">Personal projects I've worked on and work I've done for clients.</p>
    <p v-if="language == 'nl'">Persoonlijke projecten waar ik aan heb gewerkt en werk dat ik heb gedaan voor klanten.</p>


    <div class="demos" v-for="project in projects">
        <Demo :data="project"></Demo>
    </div>

</template>

<script>

import { useLanguageStore } from "~/store/language.js";


definePageMeta({
  layout: "fullscreen",
});



export default {

    setup() {
        return {
            store: useLanguageStore(),
        };
    },

    computed: {
        language() {
            return this.store.language;
        },
    },

    layout: "fullscreen",

    data() {
        return {
            title: {
                en: "Projects",
                nl: "Projecten",
            },

            projects: [
                {
                    title: {
                        en: "Coinsymbol",
                        nl: "Coinsymbol",
                    },

                    description: {
                        en: "Cryptocurrency screener with a focus on technical analysis. Built with Vue.js and uses the CoinGecko API to fetch data. I used component framework Vuetify to build the UI.",
                        nl: "Cryptocurrency screener met een focus op technische analyse. Gebouwd met Vue.js en gebruikt de CoinGecko API om data op te halen. Ik heb component framework Vuetify gebruikt om de UI te bouwen.",
                    },

                    link: 'https://coinsymbol.com/',

                    image: 'coinsymbol.jpg',
                },
                {
                    title: {
                        en: "Stripe Donation Interface",
                        nl: "Stripe Donatie Interface"
                    },

                    description: {
                        en: "This was a task for a client twitch streamer to integrate Credit Card donations and have them shown live on stream, it uses webhooks for the backend and Vue.js for the frontend.",
                        nl: "Dit was een taak voor een twitch-streamer om creditcarddonaties te integreren en deze live op stream te laten zien. Het gebruikt webhooks voor de backend en Vue.js voor de frontend."
                    },

                    link: "",

                    image: "stripe.jpg"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 3rem;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.6);
}


</style>