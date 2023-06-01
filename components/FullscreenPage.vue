<template>
	<div class="fullscreen-page">
		<div class="page-content">
			<NuxtPage />
		</div>
        <Footer dark="true" />
	</div>
    

</template>

<script setup></script>

<style lang="scss" scoped>
.fullscreen-page {
	min-height: 100vh;
	
	// background: $page;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
	color: $page;
	width: 100%;
	font-family: "Roboto", sans-serif;
	@include card;
}

.page-content {
    padding: 0px 20px;
	animation: 0.5s ease-out 0s 1 appear;
    flex: 1 1 auto;
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
		
		margin: 0;
		margin-top: 60px;
	}

    .page-content {
        padding: 0px 20px;
    }
}
</style>
