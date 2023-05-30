<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-05-30 14:48:38
 * @LastEditTime: 2023-05-30 17:37:23
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { read, utils } from 'xlsx';
import { ElMessage } from 'element-plus'

const JsonFiles: any = reactive({})
const upload = (file: any, fileList: any) => {
    console.log('upload', file, fileList);
    Object.assign(JsonFiles, { 0: file })
    // let files = { 0: file };
    // readExcel1(files);
}

const GenerateInterJson = (files: any) => {
    const data: any = readExcel1(files);
    console.log('国际化数据', data);
}

const readExcel1 = (files: any) => {
    // 如果没有文件名
    if (files.length <= 0) {
    	return;
    }
    if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        ElMessage.error('上传格式不正确，请上传xls或者xlsx格式');
        return;
    }
    const fileReader = new FileReader();
    fileReader.onload = ev => {
        try {
            const data = ev.target?.result;
            const workbook = read(data, {
                type: 'binary',
            });
            // 取第一张表
            const wsname = workbook.SheetNames[0];
            // 生成json表格内容
            const ws = utils.sheet_to_json(workbook.Sheets[wsname]);
            console.log(ws);
            // 后续数据的处理
            return ws;
        } catch (e) {
            return false;
        }
    };
	fileReader.readAsBinaryString(files[0]);
}

</script>

<template>
    <div>
        <h1>Excel数据处理</h1>
        <el-upload
            :before-upload="upload"
            class="upload-demo"
            accept=".xlsx,.xls"
            :show-file-list="false"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
        </el-upload>
        <el-button type="primary" icon="el-icon-upload2" @click="GenerateInterJson(JsonFiles)">生成对应国际化JSON数据</el-button>
    </div>
</template>



<style scoped>

</style>
