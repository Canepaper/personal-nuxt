<template>
	<div class="page">
        <div class="page-content">
		    <NuxtPage />
        </div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.page {
	min-height: calc(100vh - 80px);
	padding: 40px 80px;
	background: $page;
	width: 100%;


	@include card;
}

.page-content {
    animation: 0.5s ease-out 0s 1 appear;
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
        position: fixed;
		min-height: calc(100vh - 60px);
        padding: 40px 20px;
        margin:0;
        margin-top: 60px;
	}
}
</style>
