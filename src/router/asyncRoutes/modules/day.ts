import { Layout } from "../layout";
export default [
  {
    path: "/day",
    name: "Day",
    component: Layout,
    meta: {
      title: "",
      icon: "",
    },
    redirect: "/day/index",
    children: [
      {
        name: "Day",
        path: "/",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "",
          icon: "",
        },
      },
    ],
  },
];
