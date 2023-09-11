<template>
	<div>
		<h1>{{ title[language] }}</h1>
		<p v-if="language == 'en'">
			My name is Jacob, I'm a web developer with 3 years experience. Have
			a look at my <NuxtLink to="skills">skills</NuxtLink> to find out
			what I can do. Check out my
			<NuxtLink to="projects">Projects</NuxtLink> to see what I made in
			the past. Hop over to my <NuxtLink to="demos">Demonstrations</NuxtLink> page to see some of my recent code snippets.
		</p>
		<p v-else>
			Mijn naam is Jacob, ik ben een web developer met 3 jaar ervaring.
			Bekijk mijn <NuxtLink to="skills">vaardigheden</NuxtLink> om te zien
			wat ik kan. Bekijk mijn
			<NuxtLink to="projects">projecten</NuxtLink> om te zien wat ik in
			het verleden heb gemaakt. Ga naar mijn <NuxtLink to="demos">demonstraties</NuxtLink> pagina om enkele van mijn recente code snippets te zien.
		</p>
		<p v-if="language == 'en'">
			Contact me for a copy of my Resume.
		</p>
		<p v-else>
			Neem contact voor een kopie van mijn CV.
		</p>
		<h2>Contact</h2>
		<p>
			{{ contactDescription[language] }}
		</p>
		<h3>{{ telephone[language] }}</h3>
		<a href="tel:+31-644147960">{{ phoneNumber[language] }}</a>
		<h3>WhatsApp</h3>
		<a href="tel:+31-644147960">{{ phoneNumber[language] }}</a>
		<h3>Email</h3>
		<a href="mailto:jacobsijsma@protonmail.com">jacobsijsma@protonmail.com</a>
		<h3>LinkedIn</h3>
		<a
			href="https://www.linkedin.com/in/jacob-sijsma-877765183/"
			target="_blank"
			>https://www.linkedin.com/in/jacob-sijsma-877765183/</a
		>
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
				en: "(+31)644147960",
			},
		};
	},

	computed: {
		language() {
			return this.store.language;
		},
	},
};
</script>

<style></style>
