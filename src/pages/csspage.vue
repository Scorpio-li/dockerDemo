<template>
    <!-- 最外层容器 -->
    <div class="outer-box" ref="fullPage">
      <!-- 内层容器 -->
      <div
        ref="element"
        :class="{ activeTranstion: isCloseTranstion }"
        class="inner-box"
        @mousewheel="mousewheel"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @touchmove="handleTouchMove"
      >
        <!-- 滚动显示的元素 -->
        <div
          v-for="item in ysImage"
          :style="{ backgroundImage: `url(${item.backgroundImage})`, height: windowHeight + 'px' }"
          class="scroll-element"
        ></div>
      </div>
      <!-- 指示器 -->
      <ul class="aside">
        <li v-for="(item, index) in asideData" @click="changeBac(index)">
          <span :class="{ active: index === $index }"></span>
          <div v-show="index === $index" class="show-dec">{{ item.title }}</div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'
  import { ref, computed, watchEffect } from 'vue'
  
  // IMAGE DATA
  const ysImage = ref([
    {
      backgroundImage: 'https://ys.mihoyo.com/main/_nuxt/img/5c125a1.png',
    },
    {
      backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921550320292.jpg',
    },
    {
      backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20200319/2020031921552395638.jpg',
    },
    {
      backgroundImage: 'https://uploadstatic.mihoyo.com/contentweb/20210719/2021071918001232800.jpg',
    },
    {
      backgroundImage:
        'https://webstatic.mihoyo.com/upload/contentweb/2022/08/15/8969f683b92839ac427c875d0d742be2_4825576482548821743.jpg',
    },
    {
      backgroundImage:
        'https://act-webstatic.mihoyo.com/upload/contentweb/hk4e/721a74c43614d7aeb25b046cabfb57be_2012964858524199390.jpg',
    },
  ])
  
  const asideData = ref([
    {
      title: '首页',
    },
    {
      title: '蒙德',
    },
    {
      title: '璃月',
    },
    {
      title: '稻妻',
    },
    {
      title: '须弥',
    },
    {
      title: '枫丹',
    },
  ])
  // ELEMENT
  const element = ref('element')
  watchEffect(() => {
    if (element.value.style) {
      // element.value.style.transform = transformScroll.value
      element.value.style.top = transformScroll.value
    }
  })
  
  //HEIGHT
  const { height } = useWindowSize()
  const windowHeight = computed(() => {
    // 高度变化时需要关闭动画
    isCloseTranstion.value = true
    return height.value
  })
  const transformScroll = computed(() => {
    // return `translateY(-${$index.value * windowHeight.value}px)`
    return `-${$index.value * windowHeight.value}px`
  })
  
  const isCloseTranstion = ref(false) //控制是否显示动画效果
  const canRun = ref(true) //节流控制器
  
  function mousewheel(e) {
    isCloseTranstion.value = false
    if (canRun.value) {
      canRun.value = false
      goScroll(e)
      setTimeout(() => {
        canRun.value = true
      }, 1100)
    }
  }
  
  //#region 移动端
  const startY = ref(0) //记录开始位置
  const endY = ref(0) //记录结束位置
  const moveDistance = ref(0) //滑动距离
  
  // 触摸开始
  function handleTouchStart(e) {
    startY.value = e.touches[0].pageY || e.changedTouches[0].pageY
  }
  
  // 触摸抬起
  function handleTouchEnd(e) {
    e.preventDefault()
    // 抬起时开启动画
    isCloseTranstion.value = false
    // 计算结束距离
    endY.value = e.changedTouches[0].pageY || e.touches[0].pageY
    // 计算移动距离，判断应该上一页还是下一页，直接更改index即可在原先基础上整页移动
    moveDistance.value = endY.value - startY.value
    // 这里我做了一个最小值 大于50才翻页
    if (Math.abs(moveDistance.value) >= 60) {
      if ($index.value < ysImage.value.length - 1 && moveDistance.value < 0) {
        $index.value++
      }
      if ($index.value > 0 && moveDistance.value > 0) {
        $index.value--
      }
    } else {
      // 当临界值小于60意味着不需要翻页 就恢复原来的位置即可
      // element.value.style.transform = `translateY(-${$index.value * windowHeight.value}px)`
      element.value.style.top = `-${$index.value * windowHeight.value}px`
    }
  }
  
  // 触摸移动
  function handleTouchMove(e) {
    isCloseTranstion.value = true // 开始移动 关闭动画
    // e.stopPropagation()
    e.preventDefault()
    // if (isIOS()) {
    //   return
    // }
    moveDistance.value = (e.changedTouches[0].pageY || e.touches[0].pageY) - startY.value // 计算移动距离\
    //判断临界点
    const isCriticalPoint =
      ($index.value === ysImage.value.length - 1 && moveDistance.value < 0) ||
      ($index.value === 0 && moveDistance.value > 0)
    // 如果是临界点就直接返回
    if (isCriticalPoint) {
      return
    }
    // 否则直接对内层容器应用 随之移动
    // element.value.style.transform = `translateY(-${$index.value * windowHeight.value + moveDistance.value * -1}px)`
    element.value.style.top = `-${$index.value * windowHeight.value + moveDistance.value * -1}px`
  }
  //#endregion
  
  //ANOTHER writting about full-page
  // const { y } = useScroll(document)
  // watchThrottled(
  //   y,
  //   (newValue, oldValue) => {
  //     if (newValue > oldValue && newValue > 120) {
  //       next()
  //     } else {
  //       last()
  //     }
  //   },
  //   { throttle: 300 },
  // )
  
  function goScroll(e) {
    //e.wheelDelta 用来判断上一个下一个 <0 下一个 >0上一个
    if (e.wheelDelta < 0) {
      next()
    } else {
      last()
    }
  }
  
  //$INDEX
  const $index = ref(0) //索引控制第几个显示
  // 下一个
  function next() {
    if ($index.value < ysImage.value.length - 1) {
      $index.value++
    }
  }
  // 上一个
  function last() {
    if ($index.value > 1 || $index.value === 1) {
      $index.value--
    }
  }
  
  // 点击切换
  function changeBac(index) {
    // 点击切换时需要开启动画
    isCloseTranstion.value = false
    $index.value = index
  }
  </script>
  
  <style lang="scss" scoped>
  .activeTranstion {
    transition: all 0ms ease 0s !important;
  }
  .active {
    display: inline-block;
    width: 12px !important;
    height: 12px !important;
  }
  .outer-box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  
    .inner-box {
      position: absolute;
      width: 100%;
      transition: all ease-in-out 0.5s;
      .scroll-element {
        // height: 100%;
        background-size: cover !important;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  
    .aside {
      list-style: none;
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      li {
        height: 14px;
        width: 14px;
        margin: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .show-dec {
          text-align: right;
          position: absolute;
          width: 70px;
          right: 20px;
          padding: 1px;
          // opacity: 0;
          color: #000;
          transition: all linear 0.1s;
          font-size: 12px;
          background-color: #fff;
        }
        span {
          border-radius: 100%;
          border: #fff solid 1px;
          width: 4px;
          height: 4px;
          display: inline-block;
          background-color: #fff;
          transition: all ease-in-out 0.2s;
        }
        &:hover span {
          width: 10px;
          height: 10px;
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  </style>
  