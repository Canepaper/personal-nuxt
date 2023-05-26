<template>
	<div class="pen-wrapper">
		<div class="pen">
			<h2 class="pen-title">{{ title[language] }}</h2>

			<iframe
				class="pen-iframe"
				height="600"
				style="width: 100%"
				scrolling="no"
				title="Bouncy Input Range Sliders with Vue"
				:src="`https://codepen.io/Canesugar/embed/${slug}?default-tab=result&theme-id=dark&editable=true`"
				frameborder="no"
				loading="lazy"
				allowtransparency="true"
				allowfullscreen="true"
			>
				See the Pen
				<a :href="`https://codepen.io/Canesugar/pen/${slug}`">
					Bouncy Input Range Sliders with Vue</a
				>
				by Canesugar (<a href="https://codepen.io/Canesugar"
					>@Canesugar</a
				>) on <a href="https://codepen.io">CodePen</a>.
			</iframe>

			<b>Tags: </b
			><span class="tag box-shadow" v-for="tag in tags">{{ tag }}</span>
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

	// head

	head() {
		return {
			script: [
				{
					src: "https://static.codepen.io/assets/embed/ei.js",
					async: true,
				},
			],
		};
	},

	props: ["slug", "title", "tags"],

	data: function () {
		return {};
	},

	computed: {
		darkModeClass() {
			return this.darkMode ? "dark-mode" : "light-mode";
		},

		language() {
			return this.store.language;
		},
	},
};
</script>

<style lang="scss" scoped>

.pen-wrapper {
    padding: 5px;
    width: 100%;
}

.pen {
	padding: 20px;
	width: 100%;
	background: $dark;
	@include card;
}

.tag {
	margin: 0px 5px;
	padding: 0px 10px;
	border-radius: 5px;
	@include card;
}

.pen-iframe {
	margin-bottom: 10px;
}

.pen-title {
	margin-bottom: 25px;
}

@media (min-width: 1700px) {
	.pen-wrapper {
		width: 50%;
	}
}
</style>
