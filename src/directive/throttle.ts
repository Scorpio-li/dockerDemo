/*
 * @Description: 函数节流指令
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:52:37
 * @LastEditTime: 2023-04-26 17:53:18
 * @LastEditors: lizhiliang
 * @Usage: 
 */
const throttle = {
    bind:function (el,{value:{fn,time}}) {
        if (typeof fn !== 'function') return
        el._flag = true;//开关默认为开
        el._timer = null
        el.handler = function () {
            if (!el._flag) return;
            //执行之后开关关闭
            el._flag && fn()
            el._flag = false
            if (el._timer !== null) {
                clearTimeout(el._timer)
                el._timer = null
            }
            el._timer = setTimeout(() => {
                el._flag = true;//三秒后开关开启
            }, time);
        }
        el.addEventListener('click',el.handler)
    },
    unbind:function (el,binding) {
        el.removeEventListener('click',el.handler)
    }
}

export default throttle

// time: 时间间隔，Number, 1000

// // 节流
// // 防止按钮多次点击，多次请求
// import { DirectiveBinding } from 'vue'

// export default {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     const time = binding.value?.time || 1000
//     el.timer = null

//     el.addEventListener('click', () => {
//       el.disabled = true

//       if (el.timer !== null) {
//         clearTimeout(el.timer)
//         el.timer = null
//         el.disabled = true
//       }
//       el.timer = setTimeout(() => {
//         el.disabled = false
//       }, time)
//     })
//   }
// }

