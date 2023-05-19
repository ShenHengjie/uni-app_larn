/*
 * @Author: hayyot
 * @Date: 2023-05-09 10:32:49
 * @Description: 铁沸物
 * @FilePath: \uni-app\demo_01\src\main.ts
 */
import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import '@/uni.scss'
import '@/common/iconfont.css'
import { createUnistorage } from 'pinia-plugin-unistorage'
export function createApp() {
  const app = createSSRApp(App);
  const store = Pinia.createPinia()
  store.use(createUnistorage())
  app.use(store)
  return {
    app,Pinia
  };
}
