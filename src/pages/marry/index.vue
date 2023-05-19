<!--
 * @Author: hayyot
 * @Date: 2023-05-09 10:32:49
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\marry\index.vue
-->
<template>
    <view class="content">
        <view class="page1">
            <view class="body1">
                <switch
                    :checked="condition"
                    @change="switch_change" />是否涉及财产分割
                <view v-if="condition">
                    <text>\n财产标的金额(单位元):</text>
                    <view class="input1">
                    <input name="input1" placeholder="标的金额" type="number" v-model="input1" />
                    </view>
                    <text>\n</text>
                    <view>
                        <button @click="formSubmit1">计算</button>
                    <text>\n</text>
                        <button @click="formReset1">重置</button>
                    </view>
                    <text>\n诉讼费为{{fei3}}元,减半收取为{{fei4}}元</text>
                </view>
                <view v-else>
                    <text>不涉及财产分割的诉讼费为300元，减半收取为150元 </text>
                </view>
            </view>

            <view class="foot1">
            <text>{{condition}}</text>
            </view>
            </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const condition = ref(false);
const fei3 = ref('');
const fei4 = ref('');
const input1 = ref('');
const switch_change = () => {
    condition.value = !condition.value;
    console.log(condition);
}
const formSubmit1 = () => {
    var f = Number(input1.value)//标的,强转为数值
    var g = 0//诉讼费
    var h = 0 //减半
    if (f <= 200000) { g = 300; }
    else if (f > 200000) { g = 0.005 * f; }
    h = 0.5 * g
    fei3.value = g.toFixed(2)//保留两位小数
    fei4.value = h.toFixed(2)
}
const formReset1 = () => {
      condition.value = false
      fei3.value = '300'
      fei4.value = '150'
      input1.value = ''
}
</script>

<style scoped lang="scss">
    .content {
        // display: flex;
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
