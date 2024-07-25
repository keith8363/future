import echarts from "@/components/Echarts";
import svgIcon from "@/components/SvgIcon/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "virtual:svg-icons-register";
import { createApp } from "vue";
import router from "./router";
import pinia from "./stores/index";

import App from "./App.vue";

import config from "@/setting";

const app = createApp(App);

app.config.globalProperties.$CONFIG = config;

// 全局自动注册Icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia).component("svg-icon", svgIcon).use(router).use(echarts).mount("#app");
