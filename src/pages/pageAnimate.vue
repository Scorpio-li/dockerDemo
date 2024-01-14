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
    // console.log('box', box)
    // let [content, text] = [
    //     document.querySelector('.content'),
    //     document.querySelector('.text')
    // ]
    // let [textWidth, boxWidth] = [
    //     text?.offsetWidth,
    //     box.value.offsetWidth
    // ]
    // function checkScrollLeft(){
    //     // 判断文字长度是否大于盒子长度
    //     console.log('width', textWidth, boxWidth, boxWidth > textWidth)
    //     if(boxWidth > textWidth){ return false}
    //     content.innerHTML += content.innerHTML
    //     document.querySelector('.text').classList.add('padding')
    //     // 更新
    //     textWidth = document.querySelector('.text').offsetWidth
    //     toScrollLeft()
    // }
    // function toScrollLeft(){
    //     //  如果文字长度大于滚动条距离，则递归拖动
    //     console.log('toScrollLeft', textWidth, box.value.scrollLeft, textWidth > box.value.scrollLeft)
    //     if(textWidth > box.value.scrollLeft){
    //         box.value.scrollLeft++
    //         setTimeout(toScrollLeft, 20);
    //     } else {
    //         setTimeout(() => {
    //             box.value.scrollLeft = 0;
    //             toScrollLeft()
    //         },2000);
    //     }
    // }
    // checkScrollLeft()
    
    // 防止按钮重复点击
    (function() {
        var button = document.querySelector('.button');
        var clickCountEle = document.querySelector('.click-count');
        var activeCountEle = document.querySelector('.active-count');
        var clickCount = 0;
        var activeCount = 0;

        button.onclick = actionDelegate(submit);

        function submit (e) {
        // 模拟异步
        var promiseCb = new Promise(function (resolve, reject) {
            setTimeout(function () {
            resolve('提交成功');
            }, 1000);
        })
        
        return promiseCb.then(
            function (res) {
            // 处理回调
            var ele = document.createElement('p');
            ele.innerHTML = res;
            document.querySelector('.result').appendChild(ele);
            }
        )
        }

        // 对原有的action进行封装
        function actionDelegate (action) {
        return function (e) {
            clickCountEle.innerHTML = ++clickCount;
            // 如果按钮上有处理中的状态则跳过后续逻辑
            if (e.target.getAttribute('progress-status') === 'processing') {
            return false;
            }
            
            // 获取函数返回值
            var returnValue = action(e);

            // 判断返回值是 promise
            if (returnValue && returnValue.constructor && 
                returnValue.constructor.name === 'Promise') {
                    // 保护按钮不被狂点			
            var originInnerHTML = e.target.innerHTML;
            
            activeCountEle.innerHTML = ++activeCount;
                    // 关键点：把按钮状态保存在 node 的属性上      
            e.target.setAttribute('progress-status', 'processing')
            e.target.innerHTML = '提交中...';
            //  
            return returnValue.then(
                // promise 结束后重置状态
                function () {
                e.target.setAttribute('progress-status', 'initial');
                e.target.innerHTML = originInnerHTML;
                }
            )
            }
        }
        }
    })()
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
        
        <h2>防止按钮在短时间内重复点击</h2>
        <section>
            <div class="button">
            提交
            </div>
            
            <div class="counts">
            <span>点击次数</span>
            <span class="click-count">0</span>
            <span>执行次数</span>
            <span class="active-count">0</span>
            </div>
            
            <div class="result">
            
            </div>
            
        </section>
    </div>
</template>



<style scoped>
/* 页面动效 */
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

/* 防止按钮重复点击 */
html {
  font-family: "PingFangSC-light", "STHeiti", "Source Han Sans SC", "Noto Sans CJK SC", "Segoe UI", "HelveticaNeue-Light", Arial, "wenquanyi micro hei", sans-serif
}

section {
  text-align: center;
}

.button {
  margin: 40px auto;
  margin-bottom: 10px;
  width: 200px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  color: white;
  -webkit-user-select: none;
  
  background-image: linear-gradient(
                    90deg,
                    #7e40ee 0,
                    #63d9ee 100%
    );
}

.button:active {opacity: 0.9}

.counts,
.result {
  font-size: 12px;
  color: #999;
}

.result {
  margin-top: 20px;
  
}

.result p {
    margin: 0;
}
</style>