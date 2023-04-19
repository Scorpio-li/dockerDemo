<script setup lang="ts">
import {showMsg} from '@derick1028/data-processing'
const text = showMsg()
</script>

<template>
  <h1>npm: 数据处理</h1>
  <p>测试数据：{{ text }}</p>
</template>

<style scoped>

</style>