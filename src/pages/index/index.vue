<!--
 * @Author: hayyot
 * @Date: 2023-05-09 10:32:49
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\index\index.vue
-->
<template>
  <view class="content">
    <!-- <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view> -->
    <switch
      :checked="switch_show"
      @change="switch_change"
    />
    <view v-if="!switch_show">
      <view class='body'>
        <text>财产标的金额（单位元）：</text>
        <form bindsubmit='fromSubmit' bindreset='formReset'>
          <view class='input'>
            <input name='input' placeholder='标的金额' type='number' v-model="fei1"/>
          </view>
          <text>\n</text>
          <view>
            <button @click='submit'>计算</button>
            <text>\n</text>
            <button @click='reset'>重置</button>
          </view>
          <view class='body'>
            <text>\n诉讼费为{{fei2}}元，减半收取为{{fei3}}元</text>
          </view>
        </form>
      </view>
    </view>
    <view v-else>
      222
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
let switch_show = ref(false)
const switch_change = () => {
  switch_show.value = !switch_show.value;
  console.log(switch_show);
}
const fei1 = ref(0);
const fei2 = ref('0');
const fei3 = ref('0');
const submit = () => {
    var a = fei1.value //强转换为数值
    var b = 0 //诉讼费
    var c = 0 //减半
    if (a <= 10000) { b = 50; }
    else if (a <= 100000 && a > 10000) { b = (0.025 * a - 200); }
    else if (a <= 200000 && a > 100000) { b = 0.02 * a + 300; }
    else if (a <= 500000 && a > 200000) { b = 0.015 * a + 1300; }
    else if (a <= 1000000 && a > 500000) { b = 0.01 * a + 3800; }
    else if (a <= 2000000 && a > 1000000) { b = 0.009 * a + 4800; }
    else if (a <= 5000000 && a > 2000000) { b = 0.008 * a + 6800; }
    else if (a <= 10000000 && a > 5000000) { b = 0.007 * a + 11800; }
    else if (a <= 20000000 && a > 10000000) { b = 0.006 * a + 21800; }
    else if (a > 20000000) { b = 0.005 * a + 41800; }
    //减半诉讼费
    c = 0.5 * b
    //显示计算结果
    console.log(b.toFixed(2));
    
    fei2.value = b.toFixed(2)//两位小数
    fei3.value = c.toFixed(2)
}
const reset = () => {
  fei2.value = '0'
  fei3.value = '0'
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
