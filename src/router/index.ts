/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-17 17:09:36
 * @LastEditTime: 2024-01-09 18:27:33
 * @LastEditors: lizhiliang
 * @Usage: 
 */
/*
 * @Author: Derick.lizhiliang
 * @Date: 2023-06-24 12:46:01
 * @email: lzl102872@163.com
 * @LastEditors: lizhiliang
 * @LastEditTime: 2024-01-09 18:22:22
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /dockerDemo/src/router/index.ts
 */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/errorException', // 异常加载
        name: 'ErrorException',
        component: () => import('../pages/errorException.vue')
    },
    {
        path: '/dataProcessing', // 数据处理
        name: 'DataProcessing',
        component: () => import('../pages/dataProcessing.vue')
    },
    {
        path: '/fileOperate', // 文件操作
        name: 'FileOperate',
        component: () => import('../pages/fileOperate.vue')
    },
    {
        path: '/directive', // 自定义指令
        name: 'Directive',
        component: () => import('../pages/directive.vue')
    },
    {
        path: '/webRtc', // webRtc
        name: 'WebRTC',
        component: () => import('../pages/webRtc.vue')
    },
    {
        path: '/excelProcess', // Excel数据处理
        name: 'ExcelProcess',
        component: () => import('../pages/excelProcess.vue')
    },
    {
        path: '/webGL', // 3D可视化
        name: 'WebGL',
        component: () => import('../pages/webGL.vue')
    },
    {
        path: '/pageAnimate', // 页面动画
        name: 'PageAnimate',
        component: () => import('../pages/pageAnimate.vue')
    },
    {
        path: '/imageProcess', // 图片处理
        name: 'ImageProcess',
        component: () => import('../pages/imageProcess.vue')
    }, 
    {
        path: '/hooksCheck', // hooks验证
        name: 'HooksCheck',
        component: () => import('../pages/hooksCheck.vue')
    },
    {
        path: '/vueEditor', // 富文本编辑器
        name: 'VueEditor',
        component: () => import('../pages/vueEditor.vue')
    },
    {
        path: '/dialog', // 自定义弹窗
        name: 'Dialog',
        component: () => import('../pages/dialog.vue')
    },
    {
        path: '/echartsDemo', // Echarts示例
        name: 'EchartsDemo',
        component: () => import('../pages/echartsDemo.vue')
    },
    {
        path: '/localforage', // localforage离线存储示例
        name: 'Localforage',
        component: () => import('../pages/localforage.vue')
    },
    {
        path: '/csspage', // 全屏滚动效果
        name: 'Csspage',
        component: () => import('../pages/csspage.vue')
    },
    {
        path: '/firework', // 烟花效果
        name: 'Firework',
        component: () => import('../pages/firework/index.vue')
    },
    {
        path: '/arcoDesign', // 测试CDN引入
        name: 'ArcoDesign',
        component: () => import('../pages/arcoDesign.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;