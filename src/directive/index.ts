/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:28:02
 * @LastEditTime: 2023-04-26 18:30:10
 * @LastEditors: lizhiliang
 * @Usage: 
 */
import debounce from './debounce' // 函数防抖指令 
import longpress from './longpress' // 长按指令 
import throttle from './throttle' // 函数节流指令 
import clickOut from './clickOut' // 点击元素外部指令 
// import sensor from './sensor' // 神策埋点指令 

const directives = {
    debounce,
    longpress,
    throttle,
    clickOut
}

// 批量注册
export default {
    install(Vue: any) {
        Object.keys(directives).forEach((key: string) => {
            Vue.directive(key, directives[key])
        })
    }
}