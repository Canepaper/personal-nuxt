<template>
	<ClientOnly>
		<div class="main-wrapper">
			<Menu />
			<Page />
		</div>
	</ClientOnly>
</template>

<script>
export default {
	layout: "default",
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
	padding: 40px;
	max-width: 1500px;
	min-height: 819px;
	display: flex;
}

@media screen and (max-width: 1200px) {
	.main-wrapper {
		padding: 0px;
	}
}
</style>
