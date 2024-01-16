<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:42:08
 * @LastEditTime: 2024-01-12 15:57:45
 * @LastEditors: lizhiliang
 * @Usage: 
-->
# dockerDemo

测试Docker部署等功能
测试Vue项目中可能用到的功能

## deploy配置文件

[deploy-Npm](https://www.npmjs.com/package/deploy-cli-service?activeTab=readme)

```js
module.exports = {
  projectName: 'vue_samples', // 项目名称
  privateKey: '/Users/fuchengwei/.ssh/id_rsa',
  passphrase: '',
  dev: {
    // 环境对象
    name: '开发环境', // 环境名称
    script: 'npm run build', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  },
  test: {
    // 环境对象
    name: '测试环境', // 环境名称
    script: 'npm run build:test', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  },
  prod: {
    // 环境对象
    name: '生产环境', // 环境名称
    script: 'npm run build:prod', // 打包命令
    host: '192.168.0.1', // 服务器地址
    port: 22, // 服务器端口号
    username: 'root', // 服务器登录用户名
    password: '123456', // 服务器登录密码
    distPath: 'dist', // 本地打包生成目录
    webDir: '/usr/local/nginx/html', // 服务器部署路径（不可为空或'/'）
    isRemoveRemoteFile: true // 是否删除远程文件（默认true）
  }
}
```

## 开发问题：

1. 运行npm run build报错：error TS6504:Root file specified for compilation

这个package.json的build是执行vue-tsc --noEmit && vite build，我们改成vite build

## 引入框架或库

1. [Cesium](https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/)

Cesium是一个跨平台，跨浏览器的展示三维地球和地图的JavaScript库。Cesium使用WebGL来进行硬件加速图形，使用时不需要任何插件的支持，但需要浏览器支持WebGL。它提供了依据Javascript的开发包，方便我们高效快速的搭建一个3D项目。

2. [超图](http://support.supermap.com.cn/)

3. [抠图插件](imgly/background-removal)

4. [WangEditor](https://www.wangeditor.com/)

5. [localForage](https://localforage.docschina.org/)

localForage 是一个 JavaScript 库，通过简单类似 localStorage API 的异步存储来改进你的 Web 应用程序的离线体验。它能存储多种类型的数据，而不仅仅是字符串。

6. arco-design: 注意不能按需引入 arco-design、直接在 main.ts 中使用全局引入的方式，打包后会自动按照 cdn 引入

7. [rollup](https://www.rollupjs.com/): Rollup 是一个用于 JavaScript 的模块打包工具，它将小的代码片段编译成更大、更复杂的代码，例如库或应用程序。

8. [tailwindcss](https://tailwindcss.com/docs/configuration#content): 

## 功能模块

1. 加载异常（errorException）

2. 数据处理（dataProcessing）

3. 文件处理（fileOperate）

4. 自定义指令（directive）

5. WebRTC测试（webRtc）

6. Excel数据处理（excelProcess）

7. 3D可视化（webGL）

8. 页面动效（pageAnimate）

9. 图片处理（imageProcess）

10. Hooks处理验证（hooksCheck）

11. 富文本编辑器（vueEditor）

12. 离线存储（localForage）

13. 烟花效果（firework）

## 注意事项

1. 使用 CDN 未必会加快速度，只能减小打包体积，因为对应 js 和 css 需要从远程地址读取

## 项目优化

1. 拆分包
```
rollupOptions: {
  output: {
    manualChunks(id) {
      if (id.includes("node_modules")) {
        // 让每个插件都打包成独立的文件
        return id .toString() .split("node_modules/")[1] .split("/")[0] .toString(); 
      }
    }
  }
}
```

## 项目目录

1. strore: 放置关于pinia的数据状态
2. directive: 放置我们的自定义指令，如：v-auth
3. utils: 项目中的公共方法或常量
4. styles: 管理公共css样式文件
5. api:处理接口请求axios的封装和调用
6. router: 管理vue-router的路由模块
7. pages: 管理业务代码


```
"*.{js,ts,vue}": [
  "npm run eslint",
  "prettier --parser=typescript --write"
]
```