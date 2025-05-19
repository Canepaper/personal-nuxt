<template>
	<div>
		<h1>{{ title[language] }}</h1>
		<p v-if="language == 'en'">
			Hi, I'm Jacob, a passionate web developer with 5 years of experience turning ideas into interactive web
			experiences.
			Take a look at my <NuxtLink to="skills">skills</NuxtLink> to see what I work with, explore my <NuxtLink
				to="projects">projects</NuxtLink> to check out what I've built,
			and browse my <NuxtLink to="demos">demonstrations</NuxtLink> for recent code snippets and experiments.
		</p>
		<p v-else>
			Hallo, ik ben Jacob, een gepassioneerde web developer met 5 jaar ervaring in het bouwen van interactieve
			webervaringen.
			Bekijk mijn <NuxtLink to="skills">vaardigheden</NuxtLink> om te zien waar ik mee werk, neem een kijkje bij
			mijn <NuxtLink to="projects">projecten</NuxtLink> om te zien wat ik heb gebouwd,
			en blader door mijn <NuxtLink to="demos">demonstraties</NuxtLink> voor recente code snippets en
			experimenten.
		</p>
		<p v-if="language == 'en'">
			Want to know more? <strong>Contact me</strong> for a copy of my resume.
		</p>
		<p v-else>
			Meer weten? <strong>Neem contact op</strong> voor een kopie van mijn CV.
		</p>

		<h2>Contact</h2>
		<p>
			{{ contactDescription[language] }}
		</p>
		<h3>{{ telephone[language] }}</h3>
		<ContactItem :label="phoneNumber[language]" :link="phoneNumber[language]" />
		<h3>WhatsApp</h3>
		<ContactItem :label="phoneNumber[language]" :link="phoneNumber[language]" />

		<h3>Email</h3>
		<ContactItem :label="email" :link="email" />
		<h3>LinkedIn</h3>
		<a href="https://www.linkedin.com/in/jacob-sijsma-877765183/"
			target="_blank">https://www.linkedin.com/in/jacob-sijsma-877765183/</a>
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

	name: "About",

	data() {
		return {
			title: {
				nl: "Over mij",
				en: "About me",
			},

			contactDescription: {
				nl: "Neem contact (mijn voorkeur voor werkgevers is LinkedIn of email.)",
				en: "Contact me (my preference for employers is LinkedIn or email.)",
			},

			telephone: {
				nl: "Telefonisch",
				en: "Telephone",
			},

			phoneNumber: {
				nl: "0644147960",
				en: "+31644147960",
			},

			email: "JacobSijsma@gmail.com",
		};
	},

	computed: {
		language() {
			return this.store.language;
		},
	},

	methods: {
		copyToClipboard(text) {
			navigator.clipboard.writeText(text);
		},
	},
};
</script>

<style lang="scss" scoped></style>
