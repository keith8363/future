// 导入引用组件
import Menus from "@/components/Menus/index.vue";
// 渲染组件
import { createApp } from "vue";
import router from "../router";

let timer: any;

function getMenus(currentPage: any) {
  timer !== null && clearTimeout(timer);
  timer = setTimeout(() => {
    // 创建元素用来挂载菜单组件
    const menus = document.createElement("div");
    document.body.appendChild(menus);
    const app = createApp(Menus, {
      currentPage,
      onclick() {
        app.unmount();
        menus.remove();
      },
    }).use(router);
    app.mount(menus);
  }, 0);
}

export default getMenus;
