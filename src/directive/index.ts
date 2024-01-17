/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:28:02
 * @LastEditTime: 2024-01-17 16:46:16
 * @LastEditors: lizhiliang
 * @Usage: 
 */
// import debounce from './debounce' // 函数防抖指令 
// import longpress from './longpress' // 长按指令 
// import throttle from './throttle' // 函数节流指令 
// import clickOut from './clickOut' // 点击元素外部指令 
// // import sensor from './sensor' // 神策埋点指令 
// import sizeOb from './sizeDirect' //元素尺寸监听

// const directives = {
//     debounce,
//     longpress,
//     throttle,
//     clickOut,
//     sizeOb
// }

// // 批量注册
// export default {
//     install(Vue: any) {
//         Object.keys(directives).forEach((key: string) => {
//             Vue.directive(key, directives[key])
//         })
//     }
// }


// 自动引入自定义指令文件
import { App } from 'vue'

const modules: any = import.meta.glob('../directive/**/*.ts', {
  eager: true
})

let mapDirective = new Map()

Object.keys(modules).forEach((key) => {
  if (modules[key] && modules[key].default) {
    const newKey = key.replace(/^\.\/|\.ts|\.js/g, '')
    mapDirective.set(newKey, modules[key].default)
  }
})
console.log('mapDirective', mapDirective)
export default (app: App) => {
  mapDirective.forEach((value, key) => {
    app.directive(key, value)
  })
}