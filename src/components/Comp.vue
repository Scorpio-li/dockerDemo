<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-08-16 18:30:12
 * @LastEditTime: 2023-08-16 18:41:03
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<script setup lang="ts">
import { ElButton } from 'element-plus';

import { useCommandComponent } from '../hooks/useCommandComponent';

import MyDialog from './MyDialog.vue';

const myDialog = useCommandComponent(MyDialog);

const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <div>
    <span>{{ props.text }}</span>
    <ElButton @click="myDialog({ title: props.text })">提交（需确认）</ElButton>
  </div>
</template>
