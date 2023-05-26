<template>
	<ClientOnly>
		<div class="main-wrapper">
			<Menu fullscreen="true" />
			<FullscreenPage />
		</div>
	</ClientOnly>
</template>

<script>
export default {
	layout: "fullscreen",
};
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.background {
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	position: fixed;
	// background-image: $background;
	background: $background-color;
}

.main-wrapper {
	margin: 0 auto;
	max-width: 100vw;
	min-height: 100vh;
	display: flex;
}

@media screen and (max-width: 1200px) {
	.main-wrapper {
		padding: 0px;
	}
}
</style>
