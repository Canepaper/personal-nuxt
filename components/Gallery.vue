<template>
    <div>

        <div class="header">
            <div class="title">Picture Gallery</div>
            <div class="info">
                {{ images.length }} / {{ images.length }} pictures loaded
            </div>
            <div class="goback">
                <NuxtLink to="/demos">Go back to demos</NuxtLink>
            </div>
        </div>

        <div class="lightbox" v-if="imageVisible">

            <!-- close button -->
            <div class="close" @click="imageVisible = false">
                <span class="material-symbols-outlined">close</span>
            </div>

            <NuxtLink to="/examples/gallery">
                <div class="backdrop" @click="imageVisible = false">

                </div>
            </NuxtLink>

            <div class="image">
                <img :src="$route.query.img" alt="image" />
            </div>
        </div>
    
    <div class="gallery-container">

        <p>This is a CSS grid picture gallery with lazy loading made in Vue.js. Scroll down to see it in action. {{ $route.query.img }}</p>

        <div class="gallery">
            <div class="gridpic" v-for="(image, index) in images" :key="image">
                <!-- TODO: make lightbox functional -->
                <img :src="image" alt="image" @click="showImage(image)"/>
                <div class="download material-symbols-outlined" title="Download this picture">
                        <!-- TODO: make download button functional -->
                        
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

definePageMeta({
  layout: "example",
});

export default {

    methods: {
        showImage(image){
            this.imageVisible = true;
        }
    },

    data () {
        return { // TODO: add lazy loading for images
            imageVisible: false,
            images: [
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677631/cld-sample-5.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677630/cld-sample-4.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677630/cld-sample-3.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677630/cld-sample-2.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677629/cld-sample.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677619/samples/landscapes/nature-mountains.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677619/samples/cloudinary-group.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677618/samples/food/spices.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677618/samples/imagecon-group.jpg', 
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677617/samples/ecommerce/accessories-bag.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677617/samples/ecommerce/leather-bag-gray.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677616/samples/ecommerce/car-interior-design.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677616/samples/landscapes/beach-boat.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677615/samples/people/bicycle.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677615/samples/landscapes/architecture-signs.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677614/samples/animals/three-dogs.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677614/samples/people/jazz.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677613/samples/people/boy-snow-hoodie.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677613/samples/bike.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677612/samples/landscapes/girl-urban-view.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677611/samples/people/smiling-man.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677611/samples/sheep.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677611/samples/food/pot-mussels.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677610/samples/food/fish-vegetables.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677610/samples/animals/reindeer.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677609/samples/people/kitchen-bar.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677609/samples/food/dessert.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677608/samples/animals/cat.jpg',
                'https://res.cloudinary.com/dc3c8nrut/image/upload/v1684677608/samples/ecommerce/analog-classic.jpg',                
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

// gallery grid

$text: #ccc;

.lightbox {
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
        background: rgba(0, 0, 0, 0.6);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.4s ease-in-out;
    }
}
.header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    height: 30px;
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
}

.gallery {
    
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 30px;
    max-width: 1920px;
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

    .download{
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
   margin: 40px;
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

    .header {
            

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