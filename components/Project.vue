<template>
	<div class="pen-wrapper">
		<div class="pen">
			<h2 class="pen-title">title</h2>
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
