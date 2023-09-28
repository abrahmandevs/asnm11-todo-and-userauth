
import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue'
import TodoList from '../components/TodoList.vue'

import Todo from '../pages/Todo.vue'
import Login from '../pages/Login.vue'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/todo', component: TodoList, name: 'todo' },
    { path: '/login', component: Login, name: 'login' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router