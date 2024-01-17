/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2024-01-17 16:47:32
 * @LastEditTime: 2024-01-17 16:47:52
 * @LastEditors: lizhiliang
 * @Usage: 
 */
// 限制输入数字
import { DirectiveBinding } from 'vue'

interface ExHTMLElement extends HTMLElement {
  inputListener: EventListener
}

export default {
  mounted(el: ExHTMLElement, binding: DirectiveBinding) {
    // decimal: 小数位数, Number, 默认值：2
    const decimal = binding.value?.decimal || 2
    const elInput = el.getElementsByTagName('input')[0]

    let regDecimal: RegExp
    if (decimal > 0) regDecimal = new RegExp(`^\\d*(.?\\d{0,${decimal}})`, 'g')
    else regDecimal = new RegExp(`^\\d*`, 'g')

    el.inputListener = () => {
      let val: any = elInput.value

      elInput.value =
        val
          .replace(/[^\d^\.]+/g, '')
          .replace(/^0+(\d)/, '$1')
          .replace(/^\./, '0.')
          .match(regDecimal)[0] || ''
    }
    elInput.addEventListener('input', el.inputListener)
  },

  unmounted(el: ExHTMLElement) {
    el.getElementsByTagName('input')[0].removeEventListener('input', el.inputListener)
  }
}

