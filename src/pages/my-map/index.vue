<!--
 * @Author: hayyot
 * @Date: 2023-05-22 09:18:22
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my-map\index.vue
-->
<template>
    <view class="page-body">
        <text>介个就是地图</text>
        <view class="page-section">
            <map style="position: absolute; width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" :markers="covers">
            </map>
        </view>
        <!-- <input
            v-model="latitude"
            placeholder="请输入纬度"
            placeholder-class="input-placeholder"
            @input=""
        />
        <input
            v-model="longitude"
            placeholder="请输入经度"
            placeholder-class="input-placeholder"
        /> -->
        {{ latitude }}
    </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
const latitude = ref('36.239546');
const longitude = ref('120.020606');
const covers = ref('11312321');

</script>
<style scoped lang="scss">
.page-body {
    // position: absolute;  
    // height: 80%;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    text-align: center;
    text {
        margin-bottom: 20rpx;
        font-size: 20px;
        font-weight: bold;
    }
    input {
        border: 1rpx solid #9b9a9a;
        height: 60rpx;
    }
}
</style>