/*
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:43:20
 * @LastEditTime: 2024-01-11 14:51:05
 * @LastEditors: lizhiliang
 * @Usage: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 使用 rollup-plugin-visualizer: 打包分析
import { visualizer } from 'rollup-plugin-visualizer'
// 文档的用法会报错, 要这样引入才可以
// import { Plugin as importToCDN, autoComplete  } from 'vite-plugin-cdn-import'

import externalGlobals from 'rollup-plugin-external-globals'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({ open: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }), // 设置自动导入
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // importToCDN({
    //   modules: [
    //     // 在 element-plus 这个源码中使用了 vue 依赖包里的 ref 变量
    //     autoComplete('vue'), // vue2 使用 autoComplete('vue2')
    //     {
    //       // 引入时的包名
    //       name: '@arco-design/web-vue',
    //       // app.use(), 全局注册时分配给模块的变量
    //       var: 'ArcoVue',
    //       // 根据自己的版本号找到对应的CDN网址： 输入对应名称，会自动跳转到对应的 js 文件，复制粘贴，需要修改版本，和自己项目的 package.json 版本一致
    //       path: 'https://unpkg.com/@arco-design/web-vue@2.54.1/dist/arco-vue.min.js',
    //       // 根据自己的版本号找到对应的CDN网址
    //       css: 'https://unpkg.com/@arco-design/web-vue@2.54.1/dist/arco.css',
    //     },
    //   ],
    // })
  ],
  // 配置别名
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  },
  // 设置代理
  server: {
    proxy: {
      "/api": {
        target: "http url",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    rollupOptions: {
      // external 该选项用于匹配需要保留在 bundle 外部的模块
      external: ['vue', '@arco-design/web-vue'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          '@arco-design/web-vue': 'ArcoVue',
        }) as any,
      ],
      output: {
        chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
        entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
        assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      },
      manualChunks(id) {
        if (id.includes("node_modules")) {
          // 让每个插件都打包成独立的文件
          return id .toString() .split("node_modules/")[1] .split("/")[0] .toString(); 
        }
      }
    },
  },
})
