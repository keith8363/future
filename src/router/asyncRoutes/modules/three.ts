import { Layout } from "../layout";
export default [
  {
    path: "/three",
    name: "Three",
    component: Layout,
    meta: {
      title: "Three",
      icon: "",
    },
    children: [
      {
        name: "Three",
        path: "/",
        component: () => import("@/views/Three/index.vue"),
      },
    ],
  },
];
