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
    },
    {
        path: '/fileOperate',
        name: 'FileOperate',
        component: () => import('../pages/fileOperate.vue')
    },
    {
        path: '/directive',
        name: 'Directive',
        component: () => import('../pages/directive.vue')
    },
    {
        path: '/webRtc',
        name: 'WebRTC',
        component: () => import('../pages/webRtc.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;