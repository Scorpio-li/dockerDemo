/**
 * 计时器Hook
 * 常见使用场景：验证码发送完之后的读秒
*/
import { ref } from 'vue'

export function useCountDown() {
  const countNum = ref(0)
  const countInterval = ref(null)

  const startCountDown = (num: any) => {
    countNum.value = Number(num)
    clearCountDown()
    countInterval.value = setInterval(() => {
      if (countNum.value === 0) {
        clearInterval(countInterval.value)
        countInterval.value = null
        return
      }
      countNum.value--
    }, 1000)
  }

  const clearCountDown = () => {
    if (countInterval.value) {
      clearInterval(countInterval.value)
      countInterval.value = 0
    }
  }

  return { countNum, startCountDown, clearCountDown }
}
