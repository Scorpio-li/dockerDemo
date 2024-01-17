<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-26 17:39:28
 * @LastEditTime: 2024-01-17 16:51:35
 * @LastEditors: lizhiliang
 * @Usage: 
-->
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

const handleResize = (data: any) => {
    console.log('监听尺寸', data)
}

const inputValue1 = ref();
const inputValue2 = ref();

</script>

<template>
  <div>
    <!-- 长按指令  -->
    <button v-longpress="{fn: longpress,time:2000}">长按</button>
    
    <!-- 防抖 -->
    <div class="debounce">
        <input v-debounce="{fn: debounce, event: 'input', time: 5000}" />
        <div v-debounce="{fn: debounce, event: 'scroll', time: 5000}">
            <p>文字文字文字文字...</p>
        </div>
    </div>
    
    <!-- 节流 -->
    <!-- <div class="throttle">
        <el-button type="primary" v-throttle @click="testThrottle(100)">
            点击我（间隔1秒）！
        </el-button>
            <el-button type="primary" v-throttle="{ time: 3000 }" click="testThrottle(200)">点击我(间隔3秒)！
        </el-button >
    </div> -->
    <button v-throttle="{fn: throttle,time:3000}">throttle节流</button>
    
    <!-- 点击元素外部指令 -->
    <div>
 		<button @click="isImgShow = true">展示弹窗</button>
        <div v-click-out="clickImgOut" v-if="isImgShow" class="pop">
            <img src="https://xxx.jpg" alt="">
            <p>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</p>
        </div>
    </div>

    <!-- 监听元素尺寸变化 -->
    <div class="resize-fa">
        <div class="resize" v-size-ob="handleResize">监听尺寸</div>
    </div>

    <!-- 此指令限制用户只能输入数字，可以设置小数位数限制 -->
    <div class="inpur-number">
        <el-input v-model="inputValue1" v-inputNumber />
        <el-input v-model="inputValue2" v-inputNumber="{ decimal: 3 }" />
    </div>

    <!-- tooltip -->
    <div class="tool-tip">
        <div v-tooptip="{ message: '我是一个说明', effect: 'dark' }">我有一个说明文字</div>
        <div v-tooptip="{ message: '我是一个说明', position: 'right' }">我有一个说明文字在右边</div>
    </div>

    <!-- copy -->
    <div class="copy">
        <div v-copy>222</div>
        <div><el-tag v-copy="{ position: 'out' }">343434</el-tag></div>
    </div>
  </div>
</template>



<style scoped>
/* .resize-fa {
    width: 100%;
    height: 100%;
} */
.resize {
    border: 1px solid #ccc;
    background: rgb(204, 204, 204);
    border-radius: 12px;
    width: 33vw;
    height: 55vh;
}
</style>
