<!--
 * @Author: hayyot
 * @Date: 2023-05-22 09:18:22
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\pages\my\index.vue
-->
<template>
    <swiper
        indicator-dots
        autoplay
        circular
    >
        <swiper-item><img style="height: 100%;width: 100%;" src="@/static/logo.png" alt="" srcset=""></swiper-item>
        <swiper-item><img style="height: 100%;width: 100%;" src="@/static/logo.png" alt="" srcset=""></swiper-item>
        <swiper-item><img style="height: 100%;width: 100%;" src="@/static/logo.png" alt="" srcset=""></swiper-item>
        <swiper-item><img style="height: 100%;width: 100%;" src="@/static/logo.png" alt="" srcset=""></swiper-item>
    </swiper>
    <navigator
        url="/pages/my-map/index"
        hover-class="navigator-hover"
    >
        <button>地图跳转</button>
    </navigator>
    <navigator
        url="/pages/my-JDlogin/index"
        open-type="navigate"
        hover-class="navigator-hover"
    >
        <button>京东登录</button>
    </navigator>
    <navigator
        url="/pages/my-detail/index"
        open-type="navigate"
        hover-class="navigator-hover"
    >
        <button>个人详情</button>
    </navigator>
    <navigator
        url="/pages/my-connectus/index"
        open-type="navigate"
        hover-class="navigator-hover"
    >
        <button>找到我</button>
    </navigator>
    <navigator
        url="/pages/my/my-video"
        open-type="navigate"
        hover-class="navigator-hover"
    >
        <button>小视频</button>
    </navigator>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">

</style>