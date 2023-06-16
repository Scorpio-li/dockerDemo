<script setup lang="ts">
import { ref, onMounted } from 'vue'

const box = ref(0);

// 开始文字滚动
const txtStart = () => {
    // checkScrollLeft()
}

// 暂停文字滚动
const txtPause = () => {

}
onMounted(() => {
    console.log('box', box)
    let [content, text] = [
        document.querySelector('.content'),
        document.querySelector('.text')
    ]
    let [textWidth, boxWidth] = [
        text.offsetWidth,
        box.value.offsetWidth
    ]
    function checkScrollLeft(){
        // 判断文字长度是否大于盒子长度
        console.log('width', textWidth, boxWidth, boxWidth > textWidth)
        if(boxWidth > textWidth){ return false}
        content.innerHTML += content.innerHTML
        document.querySelector('.text').classList.add('padding')
        // 更新
        textWidth = document.querySelector('.text').offsetWidth
        toScrollLeft()
    }
    function toScrollLeft(){
        //  如果文字长度大于滚动条距离，则递归拖动
        console.log('toScrollLeft', textWidth, box.value.scrollLeft, textWidth > box.value.scrollLeft)
        if(textWidth > box.value.scrollLeft){
            box.value.scrollLeft++
            setTimeout(toScrollLeft, 20);
        } else {
            setTimeout(() => {
                box.value.scrollLeft = 0;
                toScrollLeft()
            },2000);
        }
    }
    checkScrollLeft()
})

// return {box}

</script>

<template>
    <div>
        <h1>页面动效</h1>
        <!-- 智慧城市 -->
        <section class="text-annimate">
            <header class="title">文字滚动</header>
            <div class="box" ref="box">
                <div class="content">
                    <p class="text">1.文字如果超出了宽度自动向左滚动文字如果超出了宽度自动向左滚动。</p>
                </div>
            </div>
            <el-button type="primary" @click="txtStart">Start</el-button>
            <el-button type="warning" @click="txtPause">Pause</el-button>
        </section>
    </div>
</template>



<style scoped>
 section {
    width: 80vw;
    padding: 24px;
    border-radius: 12px;
    background: #ecf5ff;
    color: #303133;
 }
 
 .title {
    font-size: 24px;
    font-weight: bold;
 }
 /* 文字滚动 */
 .box{
  margin-left: 200px;
  /* margin-top: 100px; */
  color: #FFF;
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  background: #000;
}
.content p{
  display:inline-block;
}
.content p.padding{
  padding-right: 300px;
}
</style>