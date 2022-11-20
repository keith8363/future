import { Layout } from "../layout";
export default [
  {
    path: "/echarts",
    name: "Echarts",
    component: Layout,
    meta: {
      title: "Echarts",
      icon: "",
    },
    children: [
      {
        path: "/",
        name: "Echarts",
        component: () => import("@/views/Echarts/index.vue"),
      },
    ],
  },
];
