<!--
 * @Description: 
 * @Author: Lizhiliang
 * @Date: 2023-05-31 11:31:20
 * @LastEditTime: 2023-05-31 15:49:40
 * @LastEditors: lizhiliang
 * @Usage: 
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import '../utils/cesium'
import * as Cesium from 'cesium';

onMounted(() => {
    window.CESIUM_BASE_URL = '/static/Cesium/';
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMDU0YzU3Zi0yMWYxLTRkYTEtODAxNC03ODFiMjU0MDczODYiLCJpZCI6MTQzMDAzLCJpYXQiOjE2ODU1MDUzNDZ9.26P8CjHbPoJUWAofCGB0P_nCf0JsgpOLgI4mlEJx7J4';
    // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: Cesium.createWorldTerrain()
    });
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
        orientation : {
            heading : Cesium.Math.toRadians(0.0),
            pitch : Cesium.Math.toRadians(-15.0),
        }
    });
})

</script>

<template>
    <div>
        <h1>3D可视化</h1>
        <!-- 智慧城市 -->
        <section class="cesium">
            <div id="cesiumContainer"></div>
        </section>
    </div>
</template>



<style scoped>
 #cesiumContainer {
    width: 80vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
