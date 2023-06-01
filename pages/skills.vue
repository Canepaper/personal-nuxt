<template>


		<h1> {{ heading[language] }}</h1>

		<p> {{ description[language] }}</p>
		<div class="skills">
			<Skill v-for="skill in skills" :data="skill"></Skill>
		</div>


</template>

<script>
import { useLanguageStore } from "~/store/language.js";

definePageMeta({
	title: 'Vaardigheden',
	description: 'Over mij'
})
//data

// data
export default {

	setup() {
		const languageStore = useLanguageStore();
		return {
			languageStore
		}
	},

	computed: {
		language() {
			return this.languageStore.language
		}
	},
	
	data: function () {
		return {
			heading: {
				en: 'Skills',
				nl: 'Vaardigheden'
			},

			secondHeading: {
				en: 'No experience',
				nl: 'Geen ervaring'
			},

			secondDescription: {
				en: 'Please take note of the experiences I don\'t have.',
				nl: 'Neem aub kennis van de vaardigheden die ik niet heb.'
			},

			description: {
				en: 'A list of skills I have acquired over the years, the experience is rated from 1 to 5 stars.',
				nl: 'Een lijst van ervaringen die ik heb opgedaan in de loop der jaren, de ervaring is beoordeeld van 1 tot 5 sterren.'
			},

			noSkills: [
				{
					name: 'PHP',
					stars: 0
				},
				{
					name: 'Laravel',
					stars: 0
				},
				{
					name: 'MySQL',
					stars: 0
				},
				{
					name: 'Angular',
					stars: 0
				},
				{
					name: 'React',
					stars: 0
				},
				{
					name: 'Java',
					stars: 0
				},
				{
					name: 'Tailwind CSS',
					stars: 0
				},
				{
					name: 'Bootstrap',
					stars: 0
				},
				{
					name: 'Docker',
					stars: 0
				}
			],

			skills: [
				{
					name: 'JavaScript',
                    svg: 'javascript',
					stars: 4
				},
				{
					name: 'HTML',
                    svg: 'html',
					stars: 4
				},
				{
					name: 'CSS',
                    svg: 'css',
					stars: 3
				},
                {
					name: 'Node.JS',
                    svg: 'nodejs',
					stars: 3
				},
				{
					name: 'Vue',
                    svg: 'vue',
					stars: 3
				},
				{
					name: 'Nuxt',
                    svg: 'nuxt',
					stars: 3
				},
				{
					name: 'Vuetify',
                    svg: 'vuetify',
					stars: 3
				},
				{
					name: 'Vuex/Pinia',
                    svg: 'pinia',
					stars: 2
				},
                {
					name: 'Sass',
                    svg: 'sass',
					stars: 2
				},
				{
					name: 'MongoDB',
                    svg: 'mongodb',
					stars: 2
				},
				{
					name: 'Express',
                    svg: 'express',
					stars: 2
				},
				{
					name: 'Git',
                    svg: 'git',
					stars: 2
				},
				{
					name: 'TypeScript',
                    svg: 'typescript',
					stars: 1
				},


			]
		}
	}
}

</script>

<style lang="scss" scoped>
.skills {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
}
</style>