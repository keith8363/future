export default [
  {
    path: "/visual",
    name: "Visual",
    meta: {
      title: "Visual",
      icon: "",
    },
    children: [
      {
        name: "Visual",
        path: "",
        component: () => import("@/views/Visual/index.vue"),
      },
    ],
  },
];
