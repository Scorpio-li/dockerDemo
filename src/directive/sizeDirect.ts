/*
 * @Description: 监听元素尺寸变化
 * @Author: Lizhiliang
 * @Date: 2023-05-29 15:08:58
 * @LastEditTime: 2023-05-29 15:09:22
 * @LastEditors: lizhiliang
 * @Usage: 
 */
const map = new WeakMap(); // 使用map的话如果取消监听忘记移除map中的数据的话，就会导致内存泄漏。所以使用weakMap不会阻止垃圾回收
const ob = new ResizeObserver(entries => {
    for(const entry of entries) {
        const handler = map.get(entry.target); // 获取回调函数对应的值
        if(handler) {
            console.log('entry', entry)
            const box = entry.borderBoxSize[0]
            handler({
                width: box.inlineSize,
                height: box.blockSize
            })
        }
    }
})

export default {
    mounted(el, binding) {
        // 监听尺寸变化
        ob.observe(el);
        map.set(el, binding.value)
    },
    unmounted() {
        // 取消监听
        ob.unobserve(el);
    }
}
