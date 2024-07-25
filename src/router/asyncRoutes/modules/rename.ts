export default [
  {
    path: "/rename",
    meta: {
      title: "Rename",
    },
    name: "Rename",
    redirect: "/rename",
    children: [
      {
        path: "",
        name: "Rename",
        component: () => import("@/views/Rename/index.vue"),
      },
    ],
  },
];
