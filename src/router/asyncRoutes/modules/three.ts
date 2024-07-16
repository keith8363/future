export default [
  {
    path: "/three",
    name: "Three",
    meta: {
      title: "Three",
      icon: "",
    },
    children: [
      {
        name: "Three",
        path: "",
        component: () => import("@/views/Three/index.vue"),
      },
    ],
  },
];
