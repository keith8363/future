import { Layout } from "../layout";
export default [
  {
    path: "/canvas",
    component: Layout,
    meta: {
      title: "Canvas",
    },
    name: "Canvas",
    redirect: "/canvas",
    children: [
      {
        path: "",
        name: "Canvas",
        component: () => import("@/views/Canvas/index.vue"),
      },
    ],
  },
];
