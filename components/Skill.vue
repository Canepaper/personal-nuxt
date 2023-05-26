<template>
	<div class="skill-wrapper">
		<div class="skill">
			<!-- <span> {{ data.name }}</span> -->
			<h2>{{ data.name }}</h2>
			<i
				v-for="star in data.stars"
				class="icon green material-icons"
				>star</i
			>
			<i v-for="star in 5 - data.stars" class="icon material-icons"
				>star_outlined</i
			>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
};
</script>

<style scoped>
.skill {
	margin: 30px;
}

.green {
    color: green;
}

.icon {
    width: 32px;
    font-size: 32px;
    margin: 0px;
    padding: 0px;
}

.skill-wrapper {
	display: flex;
	justify-content: center;
}


</style>
