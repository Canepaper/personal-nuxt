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
    align-items: center;
	color: $page;
	width: 100%;
	font-family: "Roboto", sans-serif;
	@include card;
}

.title {
    font-size: 3rem;
    text-shadow: 3px 3px 3px rgba(0,0,0,0.6);
}

.page-content {
    padding: 50px 50px;
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

@media (max-width: 768px) {
	.page-content {
		padding: 0px 5px;
	}
}
</style>
