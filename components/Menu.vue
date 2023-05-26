<template>
	<div class="topbar">
		<div class="topnav" :class="{ 'topbar-invisible': menuVisible }">
			<div class="topnav-button">
				<span
					class="material-symbols-outlined"
					@click="menuVisible = true"
					>menu</span
				>
			</div>

			<div class="topnav-title"></div>

			<div class="socials">
				<a
					:href="social.name"
					target="_blank"
					v-for="social in socials"
				>
					<img :src="`/images/${social.image}`" :alt="social.name" />
					<span class="tooltip"> {{ social.tooltip }}</span>
				</a>
			</div>
			<!-- spacer -->
		</div>
	</div>

	<div
		class="menu"
		:class="{ collapsed: collapsed, menuFullScreen: fullscreen }"
	>
		<div class="avatar-card">
			<div class="avatar-image">
				<NuxtLink href="/"
					><img src="/images/avatar.jpg" alt="avatar"
				/></NuxtLink>
			</div>
			<div class="avatar-title">
				<span>Jacob Sijsma</span>
			</div>

			<div class="avatar-subtitle">{{ avatarSubtitle[language] }}</div>

			<div class="socials">
				<a :href="social.href" v-for="social in socials">
					<img :src="`/images/${social.image}`" :alt="social.name" />
					<span class="tooltip"> {{ social.tooltip }}</span>
				</a>
			</div>

			<div class="language">
				<div
					class="button"
					:class="{ languageSelected: language == 'nl' }"
					@click="setLanguage('nl')"
				>
					NL
				</div>
				<div
					class="button"
					:class="{ languageSelected: language == 'en' }"
					@click="setLanguage('en')"
				>
					EN
				</div>
			</div>
		</div>

		<nav>
			<ul>
				<li v-for="link in menu">
					<NuxtLink
						:to="link.path"
						@click="this.menuVisible = false"
						>{{ link.name[language] }}</NuxtLink
					>
				</li>
			</ul>
		</nav>

		<div class="menu-footer">
			<div class="menu-footer-text">
				<span class="design-by"> {{ designBy[language] }}</span>
				<span class="footer-text-name">Jacob Sijsma ©2023</span>
			</div>
		</div>

		<div class="menu-button">
			<span
				v-if="!menuVisible"
				class="material-symbols-outlined"
				@click="menuVisible = true"
				>chevron_right</span
			>
			<span
				v-else
				class="material-symbols-outlined"
				@click="menuVisible = false"
				>chevron_left</span
			>
		</div>
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

	name: "Menu",

	props: ["fullscreen"],

	data() {
		return {
			innerWidth: 0,
			menuVisible: false,

			avatarSubtitle: {
				nl: "Frontend Ontwikkelaar",
				en: "Frontend Developer",
			},

			designBy: {
				nl: "Ontwerp door: ",
				en: "Design by: ",
			},

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

			menu: [
				{
					name: {
						nl: "Over mij",
						en: "About me",
					},
					path: "/",
				},
				{
					name: {
						nl: "Projecten",
						en: "Projects",
					},
					path: "/projects",
				},
				{
					name: {
						nl: "Vaardigheden",
						en: "Skills",
					},
					path: "/skills",
				},

				{
					name: {
						nl: "Demonstraties",
						en: "Demonstrations",
					},
					path: "/demos",
				},
			],
		};
	},

	watch: {},

	computed: {
		language() {
			return this.store.language;
		},

		menuBreakpoint() {
			return this.innerWidth < 1200;
		},

		collapsed() {
			return this.menuBreakpoint && !this.menuVisible;
		},
	},

	methods: {
		setLanguage(language) {
			this.store.setLanguage(language);
		},

		setWindowWidth() {
			this.innerWidth = window.innerWidth;
		},

		handleResize() {
			if (window.innerWidth < 1024) {
				this.menuVisible = false;
			} else {
				this.menuVisible = true;
			}
		},
	},

	created() {
		this.routeName = this.$route.name;

		if (window.innerWidth < 768) {
			this.menuVisible = false;
		}
	},

	mounted() {
		this.setWindowWidth();

		window.addEventListener("resize", this.setWindowWidth);

		setInterval(() => {
			this.setWindowWidth();
		}, 1000);
	},
};
</script>

<style lang="scss" scoped>
.menu {
	background-color: $page;
	background-color: #eee;

	min-width: 300px;

	@include card;

	display: flex;
	flex-direction: column;

	nav ul li a {
		font-family: "Kalam", cursive;
	}

	.menu-button {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 32px;
		margin: 20px;
		display: none;
		cursor: pointer;

		span {
			font-size: 2rem;
		}
	}

	.menu-footer {
		position: relative;
		padding: 20px;
		bottom: 0;

		.menu-footer-text {
			font-size: 1.2rem;
			font-weight: 400;
			text-align: center;

			.design-by {
				font-weight: 700;
				text-transform: uppercase;
				font-size: 0.8rem;
			}

			.footer-text-name {
				font-weight: 400;

				font-size: 0.9rem;
			}
		}
	}
}

.avatar-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;

	img {
		width: 170px;
		height: 170px;
		border-radius: 50%;
	}

	.avatar-title {
		font-size: 1.8rem;
		font-weight: 700;

		span {
			line-height: 5px;
		}
	}

	.avatar-image {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.avatar-subtitle {
		font-size: 1.2rem;
		font-weight: 400;
		margin-top: -5px;
	}
}

.socials {
	display: flex;
	margin: 5px 0px;

	img {
		width: 25px;
		height: 25px;
		margin: 0px 10px;
		filter: invert(30%) sepia(5%) saturate(17%) hue-rotate(314deg)
			brightness(101%) contrast(88%);
	}

	a {
		position: relative;
	}

	.tooltip {
		visibility: hidden;
		width: 80px;
		background-color: $text-color;
		color: #fff;
		text-align: center;
		padding: 5px 0;
		border-radius: 6px;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		/* Position the tooltip text - see examples below! */

		z-index: 1;
	}

	.tooltip:after {
		content: "";
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent $text-color transparent;
	}
}

// .socials a:hover .tooltip {
// 	visibility: visible;
// }

nav {
	flex: 1 1 auto;

	ul {
		list-style: none;
	}

	a {
		transition: all 0.2s ease-in-out;
		padding: 15px;
		text-decoration: none;
		color: $text-color;
		height: 100%;
		display: block;
		font-weight: 400;
		font-size: 1.5rem;
	}

	a:hover {
		color: $active-color;
		margin-left: 5px;
	}
}

.collapsed {
	transform: translateX(-300px);
}

.topbar {
	position: absolute;
	display: none;

	width: 100%;
	height: 60px;
	top: 0;
	left: 0;
	padding: 0px 20px;
	background-color: $page;
	@include darkMode;
}

.language {
	display: flex;
	justify-content: center;
}

.languageSelected {
	background-color: $text-color !important;
	color: $page !important;
}

.topnav {
	width: calc(100% - 40px);
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $page;
	@include darkMode;
	// display: none;

	.topnav-button {
		cursor: pointer;
		height: 32px;

		span {
			font-size: 2rem;
		}
	}
	.topnav-title {
		font-size: 1.2rem;
		font-weight: 700;
	}

	.topnav-socials {
		display: flex;
		margin-top: 5px;
		filter: brightness(150) invert(1);

		a img {
			filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
				brightness(100%) contrast(100%);
		}
	}
}

.menuFullScreen {
	top: 0;
	left: 0;
	z-index: 999;
	height: auto;
	min-height: 0;
	@include darkMode;

	nav ul li a {
		color: #fff;
	}

	.avatar-card {
		.socials {
			img {
				filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
					brightness(100%) contrast(100%);
			}
		}
		.avatar-image {
			width: 60%;
			img {
				width: 120px;
				height: 120px;
			}
		}
	}
}

@media screen and (max-width: 1200px) {
	.topbar {
		display: flex;
	}
	.menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		height: 100vh;
		min-height: 0;
		@include darkMode;

		nav ul li a {
			color: #fff;
		}

		.avatar-card {
			.socials {
				img {
					filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
						brightness(100%) contrast(100%);
				}
			}
			.avatar-image {
				width: 60%;
				img {
					width: 120px;
					height: 120px;
				}
			}
		}

		.menu-button {
			display: block;
			color: #fff;
		}
	}
}

.topbar-invisible {
	display: none;
}
</style>
