/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:43:20
 * @LastEditTime: 2024-01-11 15:14:27
 * @LastEditors: lizhiliang
 * @Usage: 
 */
import { createApp } from 'vue'
import './style.css'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Directives from './directive/index'
import ArcoVue from '@arco-design/web-vue'
import pinia from '@/store'
import "cesium/Build/Cesium/Widgets/widgets.css"
// import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

// app.use(ElementPlus)
app.use(router)
app.use(Directives)
app.use(ArcoVue)
app.use(pinia)
app.mount('#app')
