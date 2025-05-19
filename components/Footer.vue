<template>
	<div class="footer" :class="{ 'footer-dark': dark }">
		<div class="footer-text">
			<span>Jacob Sijsma ©2023</span>
		</div>
		<div class="socials">
			<a :href="social.name" target="_blank" v-for="social in socials">
				<img :src="`/images/${social.image}`" :alt="social.name" />
			</a>
		</div>
	</div>
</template>

<script>
export default {

	props: ["dark"],

	data() {
		return {
			socials: [
				{
					name: "LinkedIn",
					image: "linkedin.svg",
					tooltip: "Visit",
					href: "https://www.linkedin.com/in/jacob-sijsma-1b1b3b1b2/",
				},
				{
					name: "Github",
					image: "github.svg",
					tooltip: "Visit",
					href: "https://github.com/JSijsma",
				},
				{
					name: "Mail",
					image: "mail.svg",
					tooltip: "Copy",
					href: "mailto:JSijsma@protonmail.com",
				},
				{
					name: "Phone",
					image: "phone.svg",
					tooltip: "Copy",
					href: "tel:+31-644147960",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.footer {
	background-color: #eee;
	height: 60px;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	@include card;

	.footer-text {
		visibility: hidden;
		font-size: 1.2rem;
	}
}

.footer-dark {
	background-color: $bg-dark;
	color: #eee;
}

@media screen and (max-width: 1200px) {
	.footer {
		.footer-text {
			visibility: visible;
		}
	}
}
</style>
