<template>
	<div class="page">
		<div class="page-content">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page {
	background: $page;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: calc(100vh - 60px);
	width: 100%;
	@include card;
}

.page-content {
	animation: 0.5s ease-out 0s 1 appear;
	padding: 40px 80px;
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
	.page {
        margin-top: 60px;
	}

	.page-content {

		padding: 40px 20px;
	}
}
</style>
