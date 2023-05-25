<!--
 * @Author: hayyot
 * @Date: 2023-05-22 10:12:51
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my-JDlogin\index.vue
-->

<template>
  <div class="box">
    <div class="jddl">京东登录</div>
    <div class="login-input">
      <div class="data">账号：</div>
      <input class="uni-input" focus placeholder="请输入用户名/邮箱/手机号" />
    </div>
    <div class="login-input">
      <div class="data">密码：</div>
      <input class="uni-input" password placeholder="请输入密码" />
    </div>
    <button class="input_btn">登录</button>
    <div class="sjzc">
      <div><navigator
        url="/pages/my-JDlogin/phoneLogin"
        hover-class="navigator-hover"
    >手机快速注册</navigator></div>
      <div><navigator
        url="/pages/my-JDlogin/JDregister"
        hover-class="navigator-hover"
    >找回密码</navigator></div>
    </div>
    <div class="sjzc1">
      <div>微信登录</div>
      <div>QQ登录</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(228, 228, 228);
  .jddl {
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30%;
    width: 100%;
    font-size: 80rpx;
    font-weight: bold;
    color: #636262;
    text-align: center;
  }
  .login-input {
    padding: 10rpx;
    display: flex;
    margin-top: 40rpx;
    .data {
      display: inline-block;
      font-size: 40rpx;
      height: 80rpx;
      line-height: 80rpx;
      vertical-align: middle;
    }
    .uni-input {
      border-radius: 10rpx;
      display: inline-block;
      background-color: #fff;
      // text-align: center;
      width: 600rpx;
      height: 80rpx;
    }
  }
  .input_btn {
    text-align: center;
    margin-top: 100rpx;
    width: 400rpx;
  }
  .sjzc {
    margin-top: 50rpx;
    padding: 20rpx;
    display: flex;
    justify-content: space-between;
  }
  .sjzc1 {
    margin-top: 50rpx;
    padding: 100rpx;
    display: flex;
    justify-content: space-between;
  }
}

</style>