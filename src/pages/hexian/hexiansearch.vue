<!--
 * @Author: hayyot
 * @Date: 2023-05-19 10:59:40
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\hexian\hexiansearch.vue
-->
<template>
    <view class="body" >
        <view class="flex-row" >
            <view @click="c" :class="{btnc}">C</view>
            <view @click="d" :class="{btnd}">D</view>
            <view @click="e" :class="{btne}">E</view>
            <view @click="f" :class="{btnf}">F</view>
            <view @click="g" :class="{btng}">G</view>
            <view @click="a" :class="{btna}">A</view>
            <view @click="b" :class="{btnb}">B</view>
        </view>
        <view class="imgview">
            <image mode="scaleToFill" :src="src"></image>    
        </view>   
    </view> 
</template>
<script setup lang="ts">
import { ref } from 'vue';

const src = ref('../../static/hexian/a.png');
const btna = ref('active');
const btnb = ref('inactive');
const btnc = ref('inactive');
const btnd = ref('inactive');
const btne = ref('inactive');
const btnf = ref('inactive');
const btng = ref('inactive');
const isActive = ref(true);
const a = () => {
    src.value = '../../static/hexian/a.png';
    btna.value = 'active';
    btnb.value = 'inactive';
    btnc.value = 'inactive';
    btnd.value = 'inactive';
    btne.value = 'inactive';
    btnf.value = 'inactive';
    btng.value = 'inactive';
    console.log(btna.value);
    
}
const b = () => {
    src.value = '../../static/hexian/b.png';
    btna.value = 'inactive';
    btnb.value = 'active';
    btnc.value = 'inactive';
    btnd.value = 'inactive';
    btne.value = 'inactive';
    btnf.value = 'inactive';
    btng.value = 'inactive';
}
const c = () => {
    src.value = '../../static/hexian/c.png';
    btna.value = 'inactive';
    btnb.value = 'inactive';
    btnc.value = 'active';
    btnd.value = 'inactive';
    btne.value = 'inactive';
    btnf.value = 'inactive';
    btng.value = 'inactive';
}
const d = () => {
    src.value = '../../static/hexian/d.png';
    btna.value = 'inactive';
    btnb.value = 'inactive';
    btnc.value = 'inactive';
    btnd.value = 'active';
    btne.value = 'inactive';
    btnf.value = 'inactive';
    btng.value = 'inactive';
}
const e = () => {
    src.value = '../../static/hexian/e.png';
    btna.value = 'inactive';
    btnb.value = 'inactive';
    btnc.value = 'inactive';
    btnd.value = 'inactive';
    btne.value = 'active';
    btnf.value = 'inactive';
    btng.value = 'inactive';
}
const f = () => {
    src.value = '../../static/hexian/f.png';
    btna.value = 'inactive';
    btnb.value = 'inactive';
    btnc.value = 'inactive';
    btnd.value = 'inactive';
    btne.value = 'inactive';
    btnf.value = 'active';
    btng.value = 'inactive';
}
const g = () => {
    src.value = '../../static/hexian/g.png';
    btna.value = 'inactive';
    btnb.value = 'inactive';
    btnc.value = 'inactive';
    btnd.value = 'inactive';
    btne.value = 'inactive';
    btnf.value = 'inactive';
    btng.value = 'active';
}
</script>
<style lang="scss" scoped>
/* 主体页面布局，两边留白*/

.body {
  margin: 0rpx 10rpx 25rpx 25rpx;
}

/*flew水平布局 */

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  view {
    margin: 10rpx;
    width: 60rpx;
    background-color: #acacac;
  }
}

/*未激活按钮*/

.inactive {
  display: inline-block;
  padding: 9.6rpx 16rpx;
  background-image: linear-gradient(#ddd, #bbb);/*背景渐变色*/
  border: 2rpx solid rgba(0, 0, 0, 0.2);
  border-radius: 9.6rpx;
  text-align: center;
  color: white;
  font-weight: bold;
  width: 100rpx;
}

/*激活按钮*/

.active {
  display: inline-block;
  padding: 9.6rpx 16rpx;
  background-image: linear-gradient(#ddd, #bbb);
  border: 2rpx solid rgba(0, 0, 0, 0.2);
  border-radius: 9.6rpx;
  text-align: center;
  color: white;
  font-weight: bold;
  width: 100rpx;
  background: #FFBF00;/*改变选中背景颜色*/
}
.imgview {
    text-align: center;
}
</style>