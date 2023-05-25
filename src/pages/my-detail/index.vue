<!--
 * @Author: hayyot
 * @Date: 2023-05-22 10:11:42
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my-detail\index.vue
-->
<template>
  <div class="box">
    <!-- <web-view :src="url"></web-view> -->
    <div class="box_top">
      <image src="@/static/logo.png" alt="" />
    </div>
    <div class="box_middle">
      <div class="name">申恒杰</div>
      <div>年龄：21岁</div>
      <div>青岛工学院 在读</div>
      <div style="text-align: left; font-size: 40rpx; font-weight: bold;">主修课程:</div>
      <div style="text-align: left;"> 软件工程导论，计算机组成原理，计算机网络，数据结构，高级算法设计与分析，Web前端框架应用，Android移动开发，JavaEE开发与应用等</div>
      <div style="text-align: left; font-size: 40rpx; font-weight: bold;">专业技能：</div>
      <ul style="text-align: left;">
        <li>熟悉HTML、CSS,了解Less、Sass预处理语言</li>
        <li>具有熟练的JS基础，熟悉ES6+新特性</li>
        <li>熟悉Vue2、Vue3全家桶开发</li>
        <li>熟悉浏览器原理，计算机网络基础知识</li>
        <li>熟悉Nodejs、.Express开发框架</li>
        <li>了解webpack构建工具、了解基本配置，构建速度优化</li>
        <li>了解数据结构与算法，熟练使用c/c++,java和js写算法，熟悉常见的设计模式</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { onLoad } from "@dcloudio/uni-app"
// const url = ref('')
// const viewerUrl = ref('../../static/hybrid/html/web/viewer.html')
// const fileUrl = ref('../../static/shen.pdf');
// onLoad((options) => {
//   url.value = viewerUrl.value + '?file='+fileUrl.value;
//   console.log(url.value);
// })
</script>

<style lang="scss" scoped>
.box {
  .box_top {
    display: flex;
    justify-content: center;
    image {
      margin-top: 100rpx;
      height: 300rpx;
      width: 300rpx;
      border-radius: 50%;
    }
  }
  .box_middle {
    margin-top: 50rpx;
    text-align: center;
    .name {
      font-size: 60rpx;
      font-weight: bold;
    }
    view {
      margin-top: 20rpx;
    }
  }
}
</style>