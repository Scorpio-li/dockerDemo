<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-19 18:02:10
 * @LastEditTime: 2023-08-07 21:59:07
 * @LastEditors: Derick.lizhiliang
 * @Usage: 
-->
<template>
  <!--  -->
  <!-- 导出当前系统路由 -->
  <button 
      v-if="visible"
      type="primary"
      @click="exportRouters"
  >导出路由</button>
</template>
  
<script>
  import dynamicRouters from '../router/index'
  import FileSaver from 'file-saver'
  
  export default {
    name: 'FileOperate',
  
    computed: {
      visible() {
        // console.log('process', process)
        // return process.env.NODE_ENV === 'development'
        return true
      }
    },
  
    methods: {
      exportRouters() {
        const jsonStr = JSON.stringify(dynamicRouters)
        const blob = new Blob([jsonStr], { type: "text/json" })
        FileSaver.saveAs(blob, '系统路由表.json')
      }
    }
  }
  </script>
  
  <style scoped>
    button {
      background: #FFFFFF;
    }
  </style>