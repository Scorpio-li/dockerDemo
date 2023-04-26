/*
 * @Description: 防抖指令
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:28:19
 * @LastEditTime: 2023-04-26 17:43:10
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
  
  