import { Layout } from "../layout";
export default [
  {
    path: "/export",
    component: Layout,
    meta: {
      title: "Export",
    },
    name: "Export",
    redirect: "/export",
    children: [
      {
        path: "",
        name: "Export",
        component: () => import("@/views/Export/index.vue"),
      },
    ],
  },
];