<script setup>
	import { ref } from "vue"
	import axios from "axios"
	// import { authStore } from "../store/store"
	// import { authStore } from "../store/piniaStore"
	const auth = false

	import { Menu, MenuButton, MenuItems, MenuItem, Dialog, DialogPanel, DialogTitle, TransitionRoot, TransitionChild } from "@headlessui/vue"
	import { UserIcon, UserCircleIcon, ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

	const mobileMenuOpen = ref(false)
	const isOpen = ref(false)
	function closeModal() {
		isOpen.value = false
	}
	function openModal() {
		isOpen.value = true
	}
</script>

<template>
	<header class="bg-white border-b mx-auto px-3 sm:px-8 md:px-12">
		<nav class="mx-auto flex max-w-7xl items-center justify-between py-2" aria-label="Global">
			<div class="grow flex items-center justify-between">
				<router-link to="/" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">LoGo</router-link>

				<div class="hidden lg:flex items-center gap-x-3">
					<router-link to="/" class="px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">Home</router-link>
					<router-link to="/todo" class="px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">Todo List</router-link>
				</div>
				<!-- user auth -->
				<Menu v-if="true" as="div" class="hidden lg:block relative text-left">
					<MenuButton class="rounded-full p-1.5 h-9 w-9 hover:bg-gray-200 flex items-center transition-all duration-300">
						<UserIcon class="rounded-full block" aria-hidden="true" />
					</MenuButton>
					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform translate-x-0 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-in"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems class="max-h-[300px] overflow-y-auto scroll absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded bg-white text-left shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div class="text-sm p-1 font-semibold divide-y divide-gray-500">
								<div v-if="!auth">
									<MenuItem as="div">
										<router-link to="/signIn" class="px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">Sign in</router-link>
									</MenuItem>
									<MenuItem as="div">
										<button class="px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">Sign up</button>
									</MenuItem>
								</div>

								<MenuItem v-if="auth" as="div">
									<button @click="auth" class="px-3 py-2 font-semibold text-black hover:text-gray-500 transition-all duration-300">Logout</button>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>

				<!-- mobileMenuOpen mobile sidebar -->
				<div class="flex lg:hidden">
					<button type="button" class="inline-flex items-center justify-center rounded-lgm-0.5 text-gray-700 focus:outline-none border-0 p-1.5" @click="mobileMenuOpen = true">
						<Bars3Icon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</div>
		</nav>
	</header>
	<!-- mobile menue -->
	<TransitionRoot as="template" :show="mobileMenuOpen">
		<Dialog as="div" class="relative z-40 lg:hidden bg-blue-500" @close="mobileMenuOpen = false">
			<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="bg-green-40 fixed inset-0 z-40 flex justify-end">
				<TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
					<DialogPanel class="w-full sm:w-3/6 relative overflow-y-auto bg-white p-8 shadow-xl">
						<div class="flex items-center justify-between">
							<a href="#" class="-m-1.5 p-1.5 text-xl font-semibold text-black hover:text-black mr-4">LoGo </a>
							<button type="button" class="-m-2.5 rounded-lgp-2.5 text-gray-700" @click="mobileMenuOpen = false">
								<XMarkIcon class="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div class="mb-3 space-y-1 mt-6">
							<router-link to="/" class="block text-sm text-gray-600 py-2 hover:text-black transition-all duration-300">Home</router-link>
							<router-link to="/todo" class="block text-sm text-gray-600 py-2 hover:text-black transition-all duration-300">Todo List</router-link>
						</div>
					</DialogPanel>
				</TransitionChild>
			</div>
		</Dialog>
	</TransitionRoot>
	<!-- modal -->
	<TransitionRoot appear :show="isOpen" as="div">
		<Dialog as="div" @close="closeModal" class="relative z-10">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 backdrop-blur-[2px] bg-black/10" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="relative flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
						<DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<button type="button" class="h-6 w-6 absolute inset-y-2 left-auto right-2 hover:text-rose-600 hover:rotate-180 transition-all duration-500" @click="closeModal">
								<XMarkIcon class="w-full h-full" />
							</button>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900"> Sign in </DialogTitle>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
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

