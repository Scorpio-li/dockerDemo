/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2024-01-17 16:54:19
 * @LastEditTime: 2024-01-17 17:00:07
 * @LastEditors: lizhiliang
 * @Usage: 在元素上使用该指令，元素左边/右边会自动加上问号图标，图标附带tooltip。因为使用el-tooltip来开发的这个指令，所以可选指令可以根据el-tooltip的属性继续扩展。
 */
/**
 * message: 提示文字内容，为空不会显示tooltip图标, string
 * position: 提示图标位置, enum：left\right, left
 * effect: tooltip主题, enum：light\dark, light
 * placement: tooptip出现的位置, enum：top\top-start\top-end\bottom\bottom-start\bottom-end\left\left-start\left-end\right\right-start\right-end, top
*/

import { DirectiveBinding, h, render } from 'vue'
import { ElTooltip, ElTag } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const message = binding.value.message
    const placement = binding.value.placement || 'top'
    const effect = binding.value.effect || 'light'
    const position = binding.value.position || 'left'
    if (binding.value.message) {
      const vnode = h(
        ElTooltip,
        { content: message, placement, effect },
        h(QuestionFilled, { style: { width: '16px' } })
      )

      const dom = document.createElement('span')
      if (position === 'left') el.prepend(dom)
      else el.append(dom)

      render(vnode, dom)
    }
  }
}

