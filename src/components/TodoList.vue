<script setup>
	import { ref, computed } from "vue"
	import { useTodoStore } from "../store/todo"

	import { CheckIcon, PlusIcon, XMarkIcon } from "@heroicons/vue/24/outline"

	const newTask = ref("")
	const todoStore = useTodoStore()

	const addTask = () => {
		if (newTask.value.trim() !== "") {
			todoStore.addTodo(newTask.value)
			newTask.value = ""
		}
	}

	const removeTask = (index) => {
		todoStore.removeTodo(index)
	}

	const toggleTaskStatus = (index) => {
		todoStore.toggleTodoStatus(index)
	}

	const todos = todoStore.todos
</script>

<template>
	<div class="mx-auto sm:w-[500px] py-8">
		<div class="flex items-center rounded bg-rose-400 h-10 overflow-hidden">
			<input v-model="newTask" @keyup.enter="addTask" class="pb-0.5 h-full grow bg-gray-200 text-gray-700 px-2 leading-tight focus:outline-none border border-green-500 focus:border-green-400" placeholder="Add a new task" />

			<button @click="addTask" class="bg-green-500 text-white p-2 flex items-center justify-center">
				<PlusIcon class="h-6 w-6" />
			</button>
		</div>
		<ul class="p-2 divide-y">
			<li v-for="(todo, index) in todos" :key="index" class="py-2 group flex items-center justify-between">
				<div class="flex items-center gap-3">
					<!-- <label @click="toggleTaskStatus(index)" for="status" :class="todo['status'] ? 'text-green-500' : ''" class="h-6 w-6 flex items-center justify-center">
						<CheckIcon class="" />
					</label> -->

					<input type="checkbox" v-model="todo.status" @click="toggleTaskStatus(index)" />
					<h2 class="font-semibold capitalize" :class="todo['status'] ? 'text-gray-600 line-through' : 'text-emerald-600'">{{ todo.item }}</h2>
				</div>
				<button @click="removeTask(index)" class="rounded bg-rose-500 text-white group-hover:visible invisible transition-all duration-300">
					<XMarkIcon class="h-5 w-5" />
				</button>
			</li>
		</ul>
	</div>
</template>
