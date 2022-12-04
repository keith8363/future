import { Layout } from "../layout";
export default [
  {
    path: "/echarts",
    component: Layout,
    meta: {
      title: "Echarts",
    },
    name: "Echarts",
    redirect: "/echarts",
    children: [
      {
        path: "",
        name: "Echarts",
        component: () => import("@/views/Echarts/index.vue"),
      },
    ],
  },
];
