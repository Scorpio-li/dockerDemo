<template>
    <div>
        <input v-model="inputValue" type="text">
        <button @click="storeValue">存值</button>
        <button @click="getValue">取值</button>
        <button @click="deleteValue">删除某项</button>
        <button @click="resetValue">重置数据库</button>
    </div>
</template>

<script setup lang="ts">
import localforage from 'localforage'
import { ref } from 'vue';

const inputValue: any = ref('')

// 1. 创建一个 indexedDB
const myIndexedDB = localforage.createInstance({
  name: 'myIndexedDB',
})

// 存值
const storeValue = () => {
    myIndexedDB.setItem('key', inputValue.value)
}
// 取值
const getValue = () => {
    // 由于indexedDB的存取都是异步的，建议使用 promise.then() 或 async/await 去读值
    myIndexedDB.getItem('key')
        .then(function (value) {
            // we got our value
            inputValue.value = value
        }).catch(function (err) {
            // we got an error
            console.log('value', err)
        });
    // try {
    //     const value = await myIndexedDB.getItem('somekey');
    //     // This code runs once the value has been loaded
    //     // from the offline store.
    //     console.log(value);
    // } catch (err) {
    //     // This code runs if there were any errors.
    //     console.log(err);
    // }

}
// 删除某项
const deleteValue = () => {
    myIndexedDB.removeItem('key')
}
// 重置数据库
const resetValue = () => {
    myIndexedDB.clear()
}

//  VUE 推荐使用 Pinia 管理 localForage 
/**
 * 
 * 
 * // store/indexedDB.ts
import { defineStore } from 'pinia'
import localforage from 'localforage'

export const useIndexedDBStore = defineStore('indexedDB', {
  state: () => ({
    filesDB: localforage.createInstance({
      name: 'filesDB',
    }),
    usersDB: localforage.createInstance({
      name: 'usersDB',
    }),
    responseDB: localforage.createInstance({
      name: 'responseDB',
    }),
  }),
  actions: {
    async setfilesDB(key: string, value: any) {
      this.filesDB.setItem(key, value)
    },
  }
})

//我们使用的时候，就直接调用 store 中的方法
import { useIndexedDBStore } from '@/store/indexedDB'
const indexedDBStore = useIndexedDBStore()
const file1 = {a: 'hello'}
indexedDBStore.setfilesDB('file1', file1)

*/
</script>

<style scoped>
div {
    display: flex;
    flex-direction: column;
}
button {
    background-color: #dedede;
    margin: 10px;
}
</style>
