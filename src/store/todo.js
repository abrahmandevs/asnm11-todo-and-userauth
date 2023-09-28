import { defineStore } from 'pinia';
import { ref, reactive } from 'vue'

const useTodoStore = defineStore('todo', () => {

    const todos = ref([])

    const addTodo = (text) => {
        todos.value.push({ item: text, status: false });
        // todos.value.push({ text, done: false });
    }
    const removeTodo = (index) => {
        todos.value.splice(index, 1);
    }
    const toggleTodoStatus = (index) => {
        todos[index]['status'] != todos[index]['status'];
    }

    return { todos, addTodo, removeTodo, toggleTodoStatus }
});

export { useTodoStore }