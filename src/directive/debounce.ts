/*
 * @Description: 防抖指令
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:28:19
 * @LastEditTime: 2024-01-17 17:11:42
 * @LastEditors: lizhiliang
 * @Usage: 在开发中，有时遇到要给input或者滚动条添加监听事件，需要做防抖处理。
 */
/**
    定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
    将事件绑定在传入的方法上。
*/

const debounce = {
    inserted: function (el, {value:{fn, event, time}}) {
      //没绑定函数直接返回
      if (typeof fn !== 'function') return
      el._timer = null
      //监听点击事件，限定事件内如果再次点击则清空定时器并重新定时
      el.addEventListener(event, () => {
        if (el._timer !== null) {
          clearTimeout(el._timer)
          el._timer = null
        }
        el._timer = setTimeout(() => {
          fn()
        }, time)
      })
    },
  }
  
  export default debounce
  
// 防抖策略（debounce）是当事件被触发后，延迟n秒后再执行回调，如果在这n秒内事件又被触发，则重新计时。
/**
 * time：时间间隔（毫秒）, 数字， 1000
 * func: 延迟执行的方法，Function
*/
// // 节流
// // 防止按钮多次点击，多次请求
// import { DirectiveBinding } from 'vue'

// export default {
//   mounted(el: HTMLElement, binding: DirectiveBinding) {
//     const time = binding.value?.time || 1000
//     const func = binding.value?.func || null
//     el.timer = null

//     el.addEventListener('click', () => {
//       if (el.timer !== null) {
//         clearTimeout(el.timer)
//         el.timer = null
//       }
//       el.timer = setTimeout(() => {
//         func && func()
//       }, time)
//     })
//   }
// }

