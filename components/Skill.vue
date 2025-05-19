<template>
	<div class="skill-wrapper">
		<div class="skill">
			<img :src="`/skills/${data.svg}.svg`" />
			<span class="skill-title">{{ data.name }}</span>
			<div class="skill-stars">
				<i v-for="star in data.stars" class="icon green material-icons">star</i>
				<i v-for="star in 5 - data.stars" class="icon material-icons">star_outlined</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["data"],
};
</script>

<style scoped lang="scss">
.skill {


	display: flex;
	flex-direction: column;

	.skill-title {
		font-size: 1.5rem;
		font-weight: 500;
		margin-top: 10px;
	}

	align-items: center;

	img {
		width: 100px;
		height: 100px;
	}
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
	padding: 30px;
	padding-bottom: 0px;
	margin-bottom: 30px;
	display: flex;
	justify-content: center;
}
</style>
