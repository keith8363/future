import { Layout } from "../layout";
export default [
  {
    path: "/echarts",
    name: "Echarts",
    component: Layout,
    meta: {
      title: "",
      icon: "",
    },
    redirect: "/echarts/index",
    children: [
      {
        path: "index",
        name: "Echarts",
        component: () => import("@/views/echarts/index.vue"),
        meta: {
          title: "",
          icon: "",
        },
      },
    ],
  },
];
