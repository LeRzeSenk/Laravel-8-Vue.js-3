import { createRouter, createWebHistory } from 'vue-router';
import container from "./views/layouts/container";
const routes = [
    {
        path: "/",
        name: container,
        component: container,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router
