/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:43:20
 * @LastEditTime: 2023-04-26 18:28:27
 * @LastEditors: lizhiliang
 * @Usage: 
 */
import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Directives from './directive/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(Directives)
app.mount('#app')
