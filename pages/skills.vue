<template>


		<h1> {{ heading[language] }}</h1>

		<p> {{ description[language] }}</p>
		<div class="skills">
			<Skill v-for="skill in skills" :data="skill"></Skill>
		</div>

		<h2> {{ secondHeading[language] }}</h2>
		<p> {{ secondDescription[language] }}</p>

		<div class="skills">
			<Skill v-for="skill in noSkills" :data="skill"></Skill>
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
				en: 'I decided to compile a list of skills I have acquired over the years, the experience is rated from 1 to 5 stars.',
				nl: 'Ik heb besloten om een lijst te maken van vaardigheden die ik heb opgedaan in de loop der jaren, de ervaring is beoordeeld van 1 tot 5 sterren.'
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
					stars: 4
				},
				{
					name: 'HTML',
					stars: 4
				},
				{
					name: 'CSS',
					stars: 3
				},
				{
					name: 'Vue',
					stars: 3
				},
				{
					name: 'Node.JS',
					stars: 3
				},
				{
					name: 'Nuxt',
					stars: 3
				},
				{
					name: 'Vuetify',
					stars: 3
				},
				{
					name: 'Vuex/Pinia',
					stars: 2
				},
                {
					name: 'Sass',
					stars: 2
				},
				{
					name: 'MongoDB',
					stars: 2
				},
				{
					name: 'Express',
					stars: 2
				},
				{
					name: 'Git',
					stars: 2
				},
				{
					name: 'TypeScript',
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
	margin-bottom: 2rem;
}
</style>