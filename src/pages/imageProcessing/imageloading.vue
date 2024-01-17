<!--
 * @Description: 图片加载
 * @Author: Lizhiliang
 * @Date: 2024-01-17 15:31:50
 * @LastEditTime: 2024-01-17 15:39:16
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<script setup lang="ts">
import { ref } from "vue";
import { useInView } from "../../hooks/useInView";

const imgRef = ref(null);

useInView(imgRef);

</script>

<template>
  <h4>公众号：萌萌哒草头将军</h4>
  <div
    v-for="(_, idx) in new Array(200).fill(11)"
    style="width: 200px height: 200px;"
  >
    <img
      ref="imgRef"
      style="height: 100%"
      src="https://via.placeholder.com/200"
      :data-src="`https://picsum.photos/200/${180 + idx}`"
      alt="b"
    />
  </div>
</template>

<style scoped>
/* 定义淡入动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 应用淡入动画到元素 */
.fade-in {
  animation: fadeIn 0.6s ease-in;
}
</style>
