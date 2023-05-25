<!--
 * @Author: hayyot
 * @Date: 2023-05-23 10:54:17
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my-JDlogin\JDregister.vue
-->
<template>
  <div class="box">
    <div style="height: 100rpx;">

    </div>
    <form action="">
      <input class="uni-input" type="text" placeholder="请设置4-20位用户名" />
      <input class="uni-input" type="text" password placeholder="请设置6-20位密码" />
      <input class="uni-input" type="text" placeholder="请填写工商局注册的全程" />
      <input class="uni-input" type="text" placeholder="联系人姓名" />
      <input class="uni-input" type="text" placeholder="请输入手机号" />
      <button class="uni-input">发送验证码</button>
      <input class="uni-input" type="text" placeholder="短信验证码" />
      <button class="register">注册</button>
      
    </form>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(228, 228, 228);
  .uni-input {
    border: 1rpx solid #999999;
    border-radius: 10rpx;
    margin: 20rpx;
    // margin-top: 20rpx;
    height: 90rpx;
    // width: 100%;
    background-color: #fff;
  }
  .register {
    width: 60%;
    margin-top: 60rpx;
  }
}
</style>