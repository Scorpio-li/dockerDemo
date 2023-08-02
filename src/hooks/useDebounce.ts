/**
 * 防抖函数封装
 * 常见使用场景：输入框搜索、输入框校验等场景。
*/
import { ref } from 'vue'

export function useDebounce(cb: () => void, delay = 150) {
  const timer = ref(null)

  const handler = () => {
    if (timer.value) {
      clearTimeout(timer.value)
      timer.value = setTimeout(() => {
        cb()
      }, delay)
    } else {
      timer.value = setTimeout(() => {
        cb()
      }, delay)
    }
  }

  return handler
}
