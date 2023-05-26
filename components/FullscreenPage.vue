<template>
	<div class="fullscreen-page">
		<div class="page-content">
			<NuxtPage />
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fullscreen-page {
	min-height: calc(100vh - 80px);
	padding: 0px 20px;
	// background: $page;
    display: flex;
    justify-content: center;
	color: $page;
	width: 100%;
	font-family: "Roboto", sans-serif;
	@include card;
}

.page-content {
	animation: 0.5s ease-out 0s 1 appear;
    max-width: 2000px;
    width: 100%;
}

@keyframes appear {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@media (max-width: 1200px) {
	.fullscreen-page {
		min-height: calc(100vh - 60px);
		padding: 0px 20px;
		margin: 0;
		margin-top: 60px;
	}
}
</style>
