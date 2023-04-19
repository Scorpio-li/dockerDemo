<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:43:20
 * @LastEditTime: 2023-04-19 17:33:04
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<script setup lang="ts">

// const transtionMode = {
//   1: 
// }
</script>

<template>
  <!-- <router-view></router-view> -->
  <!-- 路由过渡动效 -->
  <router-view v-slot="{ Component, route }">
    <!-- 1 – 渐变过渡 -->
    <transition name="fade">
      <component :is="Component" :key="route.fullPath" />
    </transition>
    <!-- 2 – 幻灯片过渡 -->
    <!-- <transition name="slide">
      <component :is="Component" />
    </transition> -->
    <!-- 3 – 缩放过渡 -->
    <!-- <transition name="scale">
      <component :is="Component" />
    </transition> -->
    <!-- 4 – 组合过渡 -->
    <!-- <transition name="scale-slide">
      <component :is="Component" />
    </transition> -->
  </router-view>
</template>

<style scoped>
/* 1 – 渐变过渡 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
/* 2 – 幻灯片过渡 */
.wrapper {
  width: 100%;
  min-height: 100vh;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
/* 3 – 缩放过渡 */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
/* 4 – 组合过渡 */
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
