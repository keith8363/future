import { RouteRecordRaw } from "vue-router";

const Layout = () => import("@/layout/index.vue");

export const constantRoutes: RouteRecordRaw[] = [
  //基础路由规则
  {
    path: "/",
    component: Layout,
    meta: { title: "首页" },
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: Layout,
    meta: { title: "404", hidden: true },
    children: [
      {
        path: "",
        name: "404",
        component: () => import("@/views/404/index.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录", hidden: true },
    component: () => import("@/views/login/index.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];
