<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-08-28 17:33:35
 * @LastEditTime: 2023-08-28 18:05:59
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<template>
    <div>
        <h2>世界地图</h2>
        <div class="echarts">
            <!-- <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div> -->
            <!-- <Title :title="title"></Title>
            <Search :placeholder="placeholder" :find="find" @listenSearch="searchItem" @listenAdd="addNew" @listenLeadIng="leadingItem"></Search> -->
            <!-- <div id="provinceChart" class="charts" ref="myEchart1" style="height:400px;"></div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
// import { Component, Vue } from 'vue-property-decorator';
import * as echarts from 'echarts';
import '../../node_modules/echarts/map/js/world.js'
// import '../../node_modules/echarts/map/js/china.js' // 引入中国地图数据


</script>

<style lang="" scoped>

</style>