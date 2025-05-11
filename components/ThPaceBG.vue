<template>
	<canvas ref="canvasRef" class="thpace-bg"></canvas>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue'
  
  const canvasRef = ref(null)
  
  onMounted(() => {
	const checkThpace = () => {
	  if (window.ThpaceGL && canvasRef.value) {
		window.ThpaceGL.create(canvasRef.value, {
		  colors: ['#1a1e34', '#5692b3', '#0c236e'],
		  triangleSize: 100
		})
	  } else {
		// Retry after a short delay if Thpace isn't loaded yet
		setTimeout(checkThpace, 50)
	  }
	}
  
	checkThpace()
  })
  
  onBeforeUnmount(() => {
	// Optional: clear canvas or clean up
  })
  </script>
  
  <style scoped>
  .thpace-bg {
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	display: block;
  }
  </style>
  