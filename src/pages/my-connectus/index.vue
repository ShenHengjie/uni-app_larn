<template>
  <div class="box">
    <button @click="call()">
        拨打电话
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const call = () => {
    let phone = '19819649938'
        uni.makePhoneCall({
        phoneNumber:phone,
        success:function(){
            console.log('拨打电话成功');
        },
        fail() {
            console.log('打电话失败了');
        }
    })
}
</script>

<style lang="scss" scoped>
.box {
    button {
        margin-top: 100rpx;
    }
}
</style>