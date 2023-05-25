<!--
 * @Author: hayyot
 * @Date: 2023-05-23 10:35:11
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my-JDlogin\phoneLogin.vue
-->
<template>
  <div class="box">
    <div class="input">
      <picker class="picker" @change="bindPickerChange" :value="index" :range="array">
        <view>{{array[index]}}👇</view>
      </picker>
      <input class="uni-input" focus placeholder="请输入手机号" />
    </div>
    <label class="radio"><radio value="r1"/>同意<span style="font-weight: bold;">京东用户注册协议</span></label>
    <button>下一步</button>
    <view>遇到问题？您可以联系客服</view>
  </div>
</template>

<script>
export default {
    data() {
        const currentDate = this.getDate({
            format: true
        })
        return {
            title: 'picker',
            array: ['+86', '01', '+01', '+03'],
            index: 0,
            date: currentDate,
            time: '12:01'
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
    methods: {
        bindPickerChange: function(e) {
            console.log('picker发送选择改变，携带值为', e.detail.value)
            this.index = e.detail.value
        },
        bindDateChange: function(e) {
            this.date = e.detail.value
        },
        bindTimeChange: function(e) {
            this.time = e.detail.value
        },
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        }
    }
}
</script>


<style scoped lang="scss">
.box {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(228, 228, 228);
  
  .input {
    display: flex;
    justify-content: center;
    .picker {
      margin-top: 100rpx;
      display: inline-block;
      background-color: #fff;
      height: 80rpx;
      width: 120rpx;
      line-height: 80rpx;
    }
    .uni-input {
      margin-top: 100rpx;
      // border-radius: 10rpx;
      display: inline-block;
      background-color: #fff;
      // text-align: center;
      width: 600rpx;
      height: 80rpx;
    }
  }
  button {
    margin-top: 30rpx;
    margin-bottom: 30rpx;
  }
}
.radio {
  display: inline-block;
  margin-top: 50rpx;
}
</style>