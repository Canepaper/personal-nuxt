<template>
	<div class="demo">
		<div
			class="demo-picture"
			:style="{ background: 'url(images/' + data.image + ')'}"
            style="background-size: cover;"
			:class="pictureBackground"
		>
			<div class="demo-overlay">
				<div class="demo-actions">
					<div class="demo-title">
						{{ data.title[language] }}
					</div>
					<nuxt-link
						:to="data.link"
						target="_blank"
						class="demo-button"
						v-if="language == 'en'"
						>Visit</nuxt-link
					>
					<nuxt-link
						:to="data.link"
						target="_blank"
						class="demo-button"
						v-if="language == 'nl'"
						>Bekijk</nuxt-link
					>

				</div>

				<div class="demo-description">
					<!-- info icon -->

					<span class="material-symbols-outlined info"> info </span>

					<p v-if="language == 'en'">
                        {{ data.description[language] }}
					</p>
					<p v-if="language == 'nl'">
                        {{ data.description[language] }}
					</p>
				</div>
			</div>
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

	computed: {
		language() {
			return this.store.language;
		},

		pictureBackground() {
			return "url(/images/" + this.data.image + ")";
		},
	},

	name: "Demo",
	props: ["data"],
};
</script>

<style lang="scss" scoped>
.demo {
	padding: 20px;
	width: 100%;
	background: $dark;
	@include card;

	.demo-picture {
		// background: url("/images/gallery.png");
		background-size: cover;
        
		transition: all 0.3s ease-in-out;
		position: relative;
        overflow: hidden;
		.demo-actions {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.demo-overlay {
			aspect-ratio: 16/9;
			z-index: 9;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: rgba(0, 0, 0, 0.8);
			transition: all 0.3s ease-in-out;
		}

		&:hover {
			.demo-overlay {
				background: rgba(0, 0, 0, 0.4);
			}

            .demo-description {
                right: 0;
                opacity: 1;
            }
		}

		.demo-title {
			font-size: 3rem;
			text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
			margin-bottom: 1.2rem;
		}

		.demo-description {
            opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: rgba(0, 0, 0, 0.6);
			width: 25%;
			height: 100%;
			font-size: 1.2rem;
			text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
			padding: 0 20px;
			text-align: center;
			position: absolute;
			right: -25%;
            transition: all 0.3s ease-in-out;

            span {
                font-size: 2.2rem;
                
            }
		}

		.demo-button {
			background: rgba(0, 0, 0, 0.2);
			border: 2px solid rgba(255, 255, 255, 1);
			display: block;
			color: $page;
			font-weight: bold;
			cursor: pointer;
			font-size: 1.2rem;
			padding: 15px 40px;
			margin-bottom: 1rem;
			transition: all 0.2s ease-in-out;
			user-select: none;

			&:hover {
				background: rgba(0, 0, 0, 0.5);
				border: 2px solid rgba(255, 255, 255, 0.8);
			}
		}
	}
}
</style>
