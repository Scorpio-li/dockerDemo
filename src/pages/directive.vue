<script setup lang="ts">
import { ref } from 'vue'

const longpress = () => {
    console.log('长按指令生效')
}
const debounce = () => {
    console.log('debounce 防抖')
}
const throttle = () => {
    console.log('throttle 节流 只触发一次')
}
const isImgShow = ref(false)
const clickImgOut = () => {
    isImgShow.value = false
    console.log('点击弹窗外部')
}


</script>

<template>
  <div>
    <!-- 长按指令  -->
    <button v-longpress="{fn: longpress,time:2000}">长按</button>
    <!-- 防抖 -->
    <input v-debounce="{fn: debounce, event: 'input', time: 5000}" />
    <div v-debounce="{fn: debounce, event: 'scroll', time: 5000}">
        <p>文字文字文字文字...</p>
    </div>
    <!-- 节流 -->
    <button v-throttle="{fn: throttle,time:3000}">throttle节流</button>
    <!-- 点击元素外部指令 -->
    <div>
 		<button @click="isImgShow = true">展示弹窗</button>
        <div v-click-out="clickImgOut" v-if="isImgShow" class="pop">
            <img src="https://xxx.jpg" alt="">
            <p>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>
