<script setup lang="ts">
import { ref } from 'vue'
import { useCountDown, useDebounce } from '../hooks'

// useCountDown：计时器Hook
const { countNum, startCountDown, clearCountDown } = useCountDown()
const countNumber = ref(countNum)
// useDebounce：防抖函数封装
const input = ref('')

</script>

<template>
    <!-- useCountDown：计时器Hook -->
    <div class="count-down">
        <p>{{ countNumber }}</p>
        <button @click="startCountDown(50)">开始倒计时</button>
        <button @click="clearCountDown">结束倒计时</button>
    </div>
    <!-- useDebounce：防抖函数封装 -->
    <el-input v-model="input" placeholder="Please input" />
</template>



<style scoped>
</style>