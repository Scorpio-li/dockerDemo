<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-04-13 15:42:08
 * @LastEditTime: 2023-08-04 15:22:47
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