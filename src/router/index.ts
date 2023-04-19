import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/errorException',
        name: 'ErrorException',
        component: () => import('../pages/errorException.vue')
    },
    {
        path: '/dataProcessing',
        name: 'DataProcessing',
        component: () => import('../pages/dataProcessing.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;