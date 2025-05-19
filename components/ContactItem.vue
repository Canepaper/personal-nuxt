<template>
	<div class="contact-item">
		<a :href="link">{{ label }}</a>
		<span @click="copyToClipboard(link)">
			<div class="copy-button copy-button-icon material-symbols-outlined" v-if="!success">content_copy</div>
			<div class="copy-button-success" v-if="success">
				<span class="material-symbols-outlined">check_circle</span>
				<span v-if="language == 'en'">Copied</span>
				<span v-else>Gekopieerd</span>
			</div>
		</span>
	</div>
</template>

<script setup>
import { useLanguageStore } from "~/store/language.js";

const store = useLanguageStore();

const language = computed(() => store.language);

const props = defineProps({
	label: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

const success = ref(false);

const copyToClipboard = (text) => {
	navigator.clipboard.writeText(text);
	success.value = true;

	setTimeout(() => {
		success.value = false;
	}, 1000);
};
</script>

<style lang="scss" scoped>
.contact-item {
	display: flex;
	align-items: center;
	gap: 10px;
	font-family: "Roboto", sans-serif;

	&:hover {
		.copy-button {
			opacity: 1;
		}
	}

	.copy-button-success {
		z-index: 100;
		color: $highlight;
		display: flex;
		align-items: center;
		gap: 5px;

	}

	.copy-button {
		cursor: pointer;
		opacity: 0;
		transition: all 0.3s ease-in-out;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.copy-button:hover {
		color: $highlight;
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>