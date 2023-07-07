<!--
 * @Author: Derick.lizhiliang
 * @Date: 2023-06-24 12:46:01
 * @email: lzl102872@163.com
 * @LastEditors: Derick.lizhiliang
 * @LastEditTime: 2023-06-24 12:49:07
 * @motto: Still water run deep
 * @Description: Modify here please
 * @FilePath: /dockerDemo/src/pages/home.vue
-->
<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { useRouter } from "vue-router";

const btns = [{
    name: '加载异常',
    url: '/errorException'
}, {
  name: '数据处理',
  url: '/dataProcessing'
}, {
  name: '文件处理',
  url: '/fileOperate'
}, {
  name: '自定义指令',
  url: '/directive'
}, {
  name: 'WebRTC测试',
  url: '/webRtc'
}, {
  name: 'Excel数据处理',
  url: '/excelProcess'
}, {
  name: '3D可视化',
  url: '/webGL'
}, {
  name: '页面动效',
  url: '/pageAnimate'
}]
const router = useRouter()

const routerPush = (url: string) => {
    router.push(url)
}
</script>

<template>
  <!-- Transition中的组件不能呈现动画的非元素根节点。 也就是说，Transition包裹的必须是一个单根的组件。 -->
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <!-- 路由跳转按钮 -->
    <div class="router-btns">
      <button v-for="item in btns" :key="item.url" @click="routerPush(item.url)">
          {{ item.name }}
      </button>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.router-btns button {
  margin-right: 8px;
  background-color: #ecf5ff;
}
.router-btns button {
    margin-bottom: 15px;
  }
</style>
