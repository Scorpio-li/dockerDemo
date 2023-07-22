<template>
    <div>
        <section>
            <h1>
                <a href="https://blog.csdn.net/imsopoor/article/details/131577423" target="_blank" rel="noopener noreferrer">本地抠图工具</a>
            </h1>
            <h2>选择图片：</h2>
            <el-upload
                action="#"
                :auto-upload="false"
                :on-change="uploadImg"
                list-type="picture-card"
                accept=".png,.jpg"
            >
            <el-icon><Plus /></el-icon>
            </el-upload>
            <el-row :gutter="20">
                <el-col :span="12" v-if="orginImg">
                <h2>原图：</h2>
                <el-image :src="orginImg" fit="contain" />
                </el-col>
                <el-col :span="12" v-loading="loading">
                <h2>抠图结果：</h2>
                <el-image v-if="feedBackImg"  :src="feedBackImg" fit="contain" />
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { UploadFile } from "element-plus";
import { Plus } from '@element-plus/icons-vue'
import imglyRemoveBackground, { Config } from "@imgly/background-removal";
/**
 *  publicPath: //找本地模型文件所处位置，配置了可以直接从项目本地跑模型，省去了下载模型的时间;
 *      在控制台运行这俩命令即可获取到模型文件
 *      cp node_modules/@imgly/background-removal/dist/*.wasm $PUBLIC_PATH
        cp node_modules/@imgly/background-removal/dist/*.onnx $PUBLIC_PATH
    fetchArgs: boolean;//如果您遇到CORS问题，您可能希望通过fetch函数传递额外的参数。
    progress: //进度回调函数，第一个参数是当前在处理什么，第二个是当前处理到多少，第三个是总大小;
    debug: boolean; // 启用或禁用有用的控制输出。
    proxyToWorker: boolean; // 是否将计算代理给Web Worker进行处理。（默认为true）
    model: 'small' | 'medium'; // 使用的模型。（默认为“medium” 80m大小） small 40m大小
*/
type image_src = ImageData | ArrayBuffer | Uint8Array | Blob | URL | string;

// 选择图片
const orginImg = ref<Blob | string>("");
const uploadImg = (file: UploadFile) => {
  // 拿到本地图片地址
  orginImg.value = file.url;
  removeBackgorund(file.url);
};

const loading = ref<boolean>(false)
// 抠图配置
let config: Config = {
  publicPath: "/src/assets/",//将模型文件存入本地，直接从项目本地跑模型，省去了下载模型的时间
  fetchArgs: {
    mode: "no-cors",//跨域问题
  },
  progress: (key:string, current:number, total:any) => {//进度回调，目前只会返回加载模型的进度，处理图片的进度不会返回
    console.log(`Downloading ${key}: ${current} of ${total}`)
    loading.value = !(key==='compute:inference' && current === 1)
  },
};
// 抠图方法

const feedBackImg = ref<Blob | string>("");
const removeBackgorund = async (temUrl: image_src) => {
    console.log('temUrl', temUrl, config)
    // 核心代码
  const blob: Blob = await imglyRemoveBackground(temUrl, config);
  console.log('blob', blob)
  const url = URL.createObjectURL(blob);
  console.log('url', url);
  feedBackImg.value = url;
};
</script>