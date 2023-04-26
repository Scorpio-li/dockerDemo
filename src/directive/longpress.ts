/*
 * @Description: 长按指令 
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:36:05
 * @LastEditTime: 2023-04-26 17:36:05
 * @LastEditors: lizhiliang
 * @Usage: 当用户按下鼠标左键或移动端单指触碰，并按住按钮几秒钟时，视为一次长按，触发对应的函数
 */

/**
 *  定义一个计时器， n 秒后执行函数，n作为参数。
    当用户按下按钮时触发 mousedown 或touchstart 事件，启动计时器。
    如果 click 、 mouseup 、touchend 或 touchcancel 事件在 n 秒内被触发，则清除计时器，视为普通点击事件。
    如果计时器没有在 n秒内清除，则视为一次长按，触发对应的函数。
*/
const longpress = {
    bind: function (el, {value:{fn, time}}) {
      //没绑定函数直接返回
      if (typeof fn !== 'function') return
      // 定义定时器变量
      el._timer = null
      // 创建计时器（ n秒后执行函数 ）
      el._start = (e) => {
        //e.type表示触发的事件类型如mousedown,touchstart等
        //pc端: e.button表示是哪个键按下0为鼠标左键，1为中键，2为右键
        //移动端: e.touches表示同时按下的键为个数
        if (  (e.type === 'mousedown' && e.button && e.button !== 0) || 
              (e.type === 'touchstart' && e.touches && e.touches.length > 1)
        ) return;
        //定时长按n秒后执行事件
        if (el._timer === null) {
          el._timer = setTimeout(() => {
            fn()
          }, time)
          //取消浏览器默认事件，如右键弹窗
          el.addEventListener('contextmenu', function(e) {
            e.preventDefault();
          })
        }
      }
      // 如果两秒内松手，则取消计时器
      el._cancel = (e) => {
        if (el._timer !== null) {
          clearTimeout(el._timer)
          el._timer = null
        }
      }
      // 添加计时监听
      el.addEventListener('mousedown', el._start)
      el.addEventListener('touchstart', el._start)
      // 添加取消监听
      el.addEventListener('click', el._cancel)
      el.addEventListener('mouseout', el._cancel)
      el.addEventListener('touchend', el._cancel)
      el.addEventListener('touchcancel', el._cancel)
    },
    // 指令与元素解绑时，移除事件绑定
    unbind(el) {
      // 移除计时监听
      el.removeEventListener('mousedown', el._start)
      el.removeEventListener('touchstart', el._start)
      // 移除取消监听
      el.removeEventListener('click', el._cancel)
      el.removeEventListener('mouseout', el._cancel)
      el.removeEventListener('touchend', el._cancel)
      el.removeEventListener('touchcancel', el._cancel)
    },
  }
  
  export default longpress
  