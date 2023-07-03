<template>
	<div>
		<div class="header">
			<div class="title">Picture Gallery</div>
			<div class="info">
				showing {{ imagesVisible.length }} /
				{{ mockImages.length }} pictures. Scroll location:
				{{ scroll.height }} {{ scroll.top }} {{ scroll.clientHeight }}
			</div>
			<div class="goback">
				<NuxtLink to="/demos">Go back to demos</NuxtLink>
			</div>
		</div>

		<div class="lightbox" v-if="imageVisible">
			<NuxtLink to="/examples/gallery">
				<div class="backdrop"></div>
			</NuxtLink>

			<div class="image">
				<div class="loadingio-spinner-eclipse-rsjeh5mxg" v-if="loading">
					<div class="ldio-h160avbdkv6">
						<div></div>
					</div>
				</div>

				<img
                    v-show="!loading"
					@load="loading = false"
					:src="currentImage.full"
					alt="image"
				/>
			</div>

			<div class="lightbox-controls">
				<div class="lightbox-navigation" @click="previous(index)">
					<div class="material-symbols-outlined">arrow_back_ios</div>
				</div>

				<div class="center-navigation" @click="imageVisible = false">
					showing {{ currentIndex + 1 }} / {{ mockImages.length }}
				</div>

				<div class="lightbox-navigation" @click="next(index)">
					<div class="material-symbols-outlined">
						arrow_forward_ios
					</div>
				</div>
			</div>
		</div>

		<div class="gallery-container">
			<p>
				This is a CSS grid picture gallery with lazy loading made in
				Vue.js. Scroll down to see it in action. {{ $route.query.img }}
			</p>

			<div class="gallery">
				<div
					class="gridpic"
					v-for="(image, index) in imagesVisible"
					:key="image"
				>
					<img
						loading="lazy"
						:src="image.thumb"
						alt="image"
						@click="showImage(image, index)"
					/>
					<div
						class="download material-symbols-outlined"
						title="Download this picture"
						@click="downloadImage(image)"
					>
						download
					</div>
				</div>
			</div>
			<!-- <div class="testpic" v-for="pic in 9">
            {{ pic }}
        </div> -->
		</div>
	</div>
</template>

<script>
import { routerKey } from "vue-router";

definePageMeta({
	layout: "example",
});

// router

export default {
	created() {
		// window.onscroll = this.handleScroll();
		window.addEventListener("scroll", this.handleScroll);
		this.handleScroll();
	},

	mounted() {},

	// beforeDestroy() {
	// 	window.removeEventListener("scroll", this.updateScrollparams());
	// },

	mounted() {
		// this.handleScroll();
	},

	methods: {
		async sleep(time) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve();
				}, time);
			});
		},

		next() {
			if (this.currentIndex === this.mockImages.length - 1) return;

			console.log(this.mockImages[this.currentIndex + 1]);

			this.loading = true;
			this.currentImage = this.mockImages[this.currentIndex + 1];
			this.currentIndex++;
		},

		previous() {
			if (this.currentIndex === 0) return;

			console.log(this.mockImages[this.currentIndex - 1]);

			this.loading = true;
			this.currentImage = this.mockImages[this.currentIndex - 1];
			this.currentIndex--;
		},

		async renderPictures() {
			console.log("rendering pictures");
			this.imagesVisible = this.mockImages.slice(
				0,
				this.imagesVisible.length + 5
			);
			await this.sleep(100);
			this.handleScroll();
		},

		handleScroll(event) {
			// scroll Y
			console.log("scrollY", window.scrollY);
			// window innerheight
			console.log("innerHeight", window.innerHeight);
			// document body height
			console.log("body clientHeight", document.body.clientHeight);

			const { scrollY, innerHeight } = window;
			const { clientHeight } = document.body;
			const pad = 200;

			if (scrollY + innerHeight + pad >= clientHeight) {
				console.log("bottom reached");
				this.renderPictures();
			}
		},

		downloadImage(image) {
			const link = document.createElement("a");
			link.href = image.full;
			link.download = "";
			link.target = "_blank";
			link.click();
		},

		showImage(image, index) {
			this.currentImage = image;
			this.currentIndex = index;
			this.imageVisible = true;
		},
	},

	computed: {
		scrollLocation() {
			return window.scrollY;
		},

		mockImages() {
			return [
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
				...this.images,
			];
		},
	},

	data() {
		return {
			// TODO: add lazy loading for images
			scroll: {},
			imagesVisible: [],
			currentImage: null,
			imageVisible: false,
			loading: true,
			images: [
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984803/cloud/three-dogs_t9gr5o.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/three-dogs-crop_ukazas.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/spices_vb99jx.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/spices-crop_gqlt76.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/smiling-man_jzlc05.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/smiling-man-crop_is9kkw.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/shoes_decmy3.png",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/shoes-crop_jfov5n.png",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984812/cloud/sheep_tnywta.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984811/cloud/sheep-crop_dp7by3.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984811/cloud/reindeer_xh5sy1.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/reindeer-crop_hf3mw6.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/pot-mussels_bsiylz.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/pot-mussels-crop_jw13fa.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/nature-mountains_pqmryk.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/nature-mountains-crop_pbqauc.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/leather-bag-gray_sepulv.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984809/cloud/leather-bag-gray-crop_uzwelz.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/kitchen-bar_upzma5.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984809/cloud/kitchen-bar-crop_wp9jeg.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/jazz_usabyr.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984808/cloud/jazz-crop_bln7ki.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984810/cloud/imagecon-group_szwfiy.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984808/cloud/imagecon-group-crop_a9jo8j.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984811/cloud/girl-urban-view_we3uqd.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984808/cloud/girl-urban-view-crop_bpaod6.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/fish-vegetables_mfhd5y.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984808/cloud/fish-vegetables-crop_ffkuhq.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/dessert_h643wd.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984809/cloud/dessert-crop_qyqmoi.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/cloudinary-group_xq9ckf.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cloudinary-group-crop_tupfay.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cld-sample_zqoyvv.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cld-sample-crop_l8ism8.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cld-sample-5_lx9vsw.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cld-sample-5-crop_viditr.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cld-sample-4_rgxxns.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984807/cloud/cld-sample-4-crop_ooekps.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cld-sample-3_hhuxyk.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cld-sample-3-crop_k0ahed.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cld-sample-2_oslchb.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cld-sample-2-crop_ihrbxx.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/cat_jhgheg.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984806/cloud/cat-crop_api63l.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/car-interior-design_hpzum3.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/car-interior-design-crop_ztqagf.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/boy-snow-hoodie_akim56.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/boy-snow-hoodie-crop_jfktwg.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/bike_akuogf.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/bike-crop_a0lm89.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984804/cloud/bicycle_b41gg8.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984803/cloud/bicycle-crop_yw1yiy.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984805/cloud/beach-boat_cmfuht.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984803/cloud/beach-boat-crop_o1suud.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/architecture-signs_u81r79.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/architecture-signs-crop_gryrdr.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984801/cloud/analog-classic_mnpekg.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984803/cloud/analog-classic-crop_oghh86.jpg",
				},
				{
					full: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984802/cloud/accessories-bag_fvxrbc.jpg",
					thumb: "https://res.cloudinary.com/dc3c8nrut/image/upload/v1685984801/cloud/accessories-bag-crop_tlbxvx.jpg",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
// gallery grid

$text: #ccc;

.lightbox {
	top: 0;
	position: fixed;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		// z-index: 100;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: fadeIn 0.4s ease-in-out;
	}

	.lightbox-controls {
		font-size: 8rem;
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100vh;
		width: 100vw;
		color: #c2c2c2;

		.center-navigation {
			height: 100vh;
			flex: 1 1 auto;
			display: flex;
			justify-content: center;
			align-items: end;
			font-size: 2rem;
			font-family: "Roboto", sans-serif;
			padding: 20px;
		}

		.lightbox-navigation {
			height: 100%;
			width: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			user-select: none;
			cursor: pointer;
			transition: all 0.2s ease-in-out;
			z-index: 200;

			&:hover {
				color: #fff;
				transform: scale(1.2);
				background: rgba(0, 0, 0, 0.2);
			}

			div {
				font-size: 3rem;
			}
		}
	}

	.image {
		z-index: 200;
		img {
			max-width: 80vw;
			max-height: 80vh;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
            animation: fadeIn 0.4s ease-in-out;
		}
	}
}
.header {
	position: sticky;
	top: 0;
	z-index: 100;
	background: rgba(0, 0, 0, 0.8);
	height: 60px;
	padding: 0 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 2rem;
		text-shadow: 3px 3px 3px rgba(119, 119, 119, 0.6);
		font-family: "Roboto", sans-serif;
		color: $text;
	}

	.info {
		color: #aaa;
		font-family: "Roboto", sans-serif;
		font-size: 1.5rem;
	}
}

.goback {
	top: 0;
	right: 0;
	border: 0;
	background: rgba(0, 0, 0, 0);

	z-index: 100;

	text-decoration: none;
	font-family: "Roboto", sans-serif;

	&:hover {
		color: #000;
		background: #fff;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		color: $text;
		font-size: 1.4rem;
		font-weight: 500;
		height: 100%;
		width: 100%;

		padding: 10px 20px;

		&:hover {
			color: #000;
			background: #fff;
		}
	}

	span {
		display: block;
		font-size: 1.8rem;
	}
}

p {
	font-size: 1.4rem;
	text-shadow: 3px 3px 3px rgba(119, 119, 119, 0.6);
	font-family: "Roboto", sans-serif;
	color: $text;
}
.gallery-container {
	margin: 0px 80px;
	display: flex;
	flex-direction: column;

	align-items: center;
}
.gallery {
	max-width: 1920px;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-gap: 20px;

	height: 100%;
}

.testpic {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	color: #fff;
	background: green;
	aspect-ratio: 1/1;

	&:nth-child(3) {
		grid-column: span 2;
		grid-row: span 2;
	}

	&:nth-child(6) {
		grid-column: span 2;
		grid-row: span 2;
	}

	&:nth-child(7) {
		grid-column: span 2;
		grid-row: span 2;
	}
}

@keyframes ldio-h160avbdkv6 {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.ldio-h160avbdkv6 div {
	position: absolute;
	animation: ldio-h160avbdkv6 1s linear infinite;
	width: 160px;
	height: 160px;
	top: 20px;
	left: 20px;
	border-radius: 50%;
	box-shadow: 0 4.2px 0 0 rgb(255, 255, 255);
    opacity: 0.5;
	transform-origin: 80px 82.1px;
}
.loadingio-spinner-eclipse-rsjeh5mxg {
	width: 200px;
	height: 200px;
	display: inline-block;
	overflow: hidden;
	background: none;
}
.ldio-h160avbdkv6 {
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0; /* see note above */
}
.ldio-h160avbdkv6 div {
	box-sizing: content-box;
}
/* generated by https://loading.io/ */

.gridpic {
	animation: scaleAndFade 0.5s ease-in-out;
	color: #fff;

	width: 100%;
	height: auto;

	position: relative;

	&:hover {
		.download {
			opacity: 1;
		}
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		aspect-ratio: 1/1;
		cursor: pointer;
		z-index: 2;

		&:hover {
			opacity: 0.8;
		}
	}

	.download {
		transition: all 0.3s ease-in-out;
		opacity: 0;
		margin: 5px;
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
		z-index: 3;
		color: rgb(255, 255, 255);
		height: 50px;
		width: 50px;
		bottom: 0;
		right: 0;
		text-align: center;
		line-height: 45px;
		font-size: 2.2rem;
		cursor: pointer;
		user-select: none;

		&:hover {
			background: rgba(0, 0, 0, 0.8);
		}
	}
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes scaleAndFade {
	0% {
		opacity: 0;
		transform: scale(0.5);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}

@media screen and (max-width: 768px) {
	.gallery-container {
		margin: 20px;
	}

	.lightbox {
		.image {
			z-index: 200;
			img {
				max-width: 100vw;
				max-height: 100vh;
				box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
			}
		}
	}

	.header {
		padding: 0 20px;
		.title {
			font-size: 1.5rem;
		}

		.info {
			display: none;
		}

		.goback {
			a {
				font-size: 1rem;
			}
		}
	}
	.gallery {
		grid-template-columns: repeat(2, 1fr);
	}
	.gridpic {
		&:nth-child(3n + 3) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}
}

@media (min-width: 769px) and (max-width: 1400px) {
	.gallery-container {
		margin: 0 40px;
	}

	.header {
		padding: 0 40px;

		.title {
			font-size: 1.5rem;
		}

		.info {
			font-size: 1rem;
		}

		.goback {
			a {
				font-size: 1rem;
			}
		}
	}

	.gallery {
		grid-template-columns: repeat(4, 1fr);
	}

	.gridpic {
		&:nth-child(6n + 3) {
			grid-column: span 2;
			grid-row: span 2;
		}

		&:nth-child(6n + 4) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}
}

@media screen and (min-width: 1401px) {
	.gridpic {
		&:nth-child(9n + 3) {
			grid-column: span 2;
			grid-row: span 2;
		}

		&:nth-child(9n + 6) {
			grid-column: span 2;
			grid-row: span 2;
		}

		&:nth-child(9n + 7) {
			grid-column: span 2;
			grid-row: span 2;
		}
	}
}
</style>
