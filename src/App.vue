<script setup>
	import Header from "./components/Header.vue"
</script>

<template>
	<section class="">
		<Header />
	</section>
	<section class="mx-auto px-3 sm:px-8 md:px-12">
		<router-view />
	</section>
</template>
<style>
	::-webkit-scrollbar {
		width: 8px; /* Adjust the width as needed */
	}

	::-webkit-scrollbar-thumb {
		background-color: #7d817e; /* Adjust the color as needed */
		border-radius: 3.375rem /* 6px */;
	}

	::-webkit-scrollbar-track {
		background-color: #5b5b5c00; /* Adjust the color as needed */
	}
</style>

