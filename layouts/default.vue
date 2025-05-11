<template>
	<ClientOnly>
		<ThPaceBG />
	  <div class="main-wrapper">
		<Menu />
		<Page />
	  </div>
	</ClientOnly>
  </template>
  

<script setup>
import ThPaceBG from '~/components/ThPaceBG.vue'
</script>

<style lang="scss" scoped>
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.bottom-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 160px; /* Adjust as needed */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  z-index: 0;
}

.main-wrapper {
	z-index: 10;
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
