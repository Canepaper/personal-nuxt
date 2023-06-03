<template>

		<h1 class="title">{{ title[language] }}</h1>
		<p>{{ description[language] }}</p>

		<h2>{{ header2[language] }}:</h2>

		<div class="categories">
			<template v-for="category in categories" :key="category">
				<div
					class="pen-button"
					:class="{ 'pen-button-selected': category.selected }"
					@click="toggleCategory(category)"
				>
					{{ category.name }}
				</div>
			</template>
		</div>

		<div class="pens">
			<template v-for="pen in pens" :key="pen">
				<Pen
					:slug="pen.slug"
					:tags="pen.tags"
					:title="pen.title"
					v-show="categoryIsSelected(pen.tags)"
				></Pen>
			</template>
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

	name: "codepen",

	methods: {
		toggleCategory(category) {
			category.selected = !category.selected;
			console.log(category);
		},

		categoryIsSelected(tags) {
			for (let tag of tags) {
				if (this.selectedCategories.includes(tag)) {
					return true;
				}
			}
		},
	},

	computed: {
		selectedCategories() {
			return this.categories.filter((x) => x.selected).map((x) => x.name);
		},

		language() {
			return this.store.language;
		},
	},

	data: function () {
		return {
			lazy: 4,

			title: {
				en: "Demonstrations",
				nl: "Demonstraties",
			},

			header2: {
				en: "Categories",
				nl: "Categorieën",
			},

			categories: [
				{ name: "Vue", selected: true },
				{ name: "JavaScript", selected: true },
				{ name: "CSS", selected: true },
				{ name: "SCSS", selected: true },
				{ name: "Vuetify", selected: true },
			],

			description: {
				en: "A collection of pens I made for Codepen.io.",
				nl: "Een verzameling pennen die ik heb gemaakt voor Codepen.io.",
			},

			pens: [
                {
					slug: "wrKdwR",
					title: {
						en: "Bouncy Input Range Sliders with Vue",
						nl: "Bouncy Input Range Sliders met Vue",
					},
					tags: ["Vue", "JavaScript"],
				},
                {
                    slug: "MWPZQwy",
                    title: {
                        en: "Vue Comment Form with Warning Field",
                        nl: "Vue Commentaar Formulier met Waarschuwingsveld",
                    },
                    tags: ["Vue", "JavaScript", "SCSS"]
                }
                {
                    slug: "RweOdYO",
                    title: {
                        en: "Vue SignIn/Register Form with Validation",
                        nl: "Vue SignIn/Register Formulier met Validatie",
                    },
                    tags: ["Vue", "JavaScript", "SCSS"]
                },
                {
					slug: "vYVQeZw",
					title: {
						en: "Vue 3 Expansion Panels",
						nl: "Vue 3 Expansion Panels",
					},
					tags: ["Vue", "JavaScript", "SCSS"],
				},
                {
                    slug: "GRYwwNj",
                    title: {
                        en: "Vue 3 Tabs",
                        nl: "Vue 3 Tabs",
                    },
                    tags: ["Vue", "JavaScript", "SCSS"],
                },
                {
                    slug: "ExpoXoV",
                    title: {
                        en: "Brand Carousel with Vue and CSS",
                        nl: "Merk Carrousel met Vue en CSS",
                    },
                    tags: ["Vue", "JavaScript", "CSS"],
                },
                {
                    slug: "poxqaJj",
                    title: {
                        en: "Animated Sidebar Vue3 (Web Tutorial Mockup)",
                        nl: "Geanimeerde Sidebar Vue3 (Web Tutorial Mockup)"
                    },
                    tags: ["Vue", "SCSS", "JavaScript"]
                },
				{
					slug: "OJbypGw",
					title: {
						en: "Vue.js Table performance test, 1000 rows with sorting and filtering",
						nl: "Vue.js Tabel prestatie test, 1000 rijen met sortering en filteren",
					},
					tags: ["Vue", "JavaScript", "SCSS"],
				},
				{
					slug: "OgQMOW",
					title: {
						en: "Javascript Object to Table with sorting",
						nl: "Javascript Object naar Tabel met sortering",
					},
					tags: ["JavaScript", "JQuery", "Less"],
				},
                {
                    slug: "NNVmvg",
                    title: {
                        en: "Animated Horizontal Dropdown Menu in CSS",
                        nl: "Geanimeerde Horizontale Dropdown Menu in CSS",
                    },
                    tags: ["CSS"]
                },
                {
                    slug: "bpyjZe",
                    title: {
                        en: "Animated Vertical Dropdown Menu in CSS",
                        nl: "Geanimeerde Verticale Dropdown Menu in CSS",
                    },
                    tags: ["CSS"]
                },
				{
					slug: "qBaZjRZ",
					title: {
						en: "Vue Progress Bar",
						nl: "Vue Voortgangsbalk",
					},
					tags: ["Vue", "JavaScript", "CSS"],
				},
				{
					slug: "BaLQvGO",
					title: {
						en: "Vuetify Timer - Circular Progress",
						nl: "Vuetify Timer - Cirkel Voortgang",
					},
					tags: ["Vue", "JavaScript", "Vuetify"],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>

.title {
    font-size: 3rem;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.6);
}
.pens {
	display: flex;
	flex-wrap: wrap;
}

.selected {
	background-color: #5e52ff !important;
	color: black !important;
}

.categories {
	display: flex;
	flex-wrap: wrap;
    margin-bottom: 10px;
}

.pen-button {
    background: rgba(0,0,0,0.2);
    border: 2px solid  rgba(255,255,255,0.5);
 
    color: $page;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 20px;
    margin: 0 0.15rem;
    transition: all 0.2s ease-in-out;
    user-select: none;

    &:hover {
        background-color: $active-color !important;
        color: $page !important;
    }
}

.pen-button-selected {
    border: 2px solid $active-color;
    background-color: green;
    color: $page !important;
}

</style>
