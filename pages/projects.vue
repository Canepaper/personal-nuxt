<template>
    <div>
        <h1> {{ title[language] }}</h1>
    </div>
</template>

<script>

import { useLanguageStore } from "~/store/language.js";


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
                en: "Under Construction",
                nl: "In aanbouw",
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>