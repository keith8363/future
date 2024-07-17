export default [
  {
    path: "/leaflet",
    meta: {
      title: "LeafLet",
    },
    name: "LeafLet",
    redirect: "/leaflet",
    children: [
      {
        path: "",
        name: "Canvas",
        component: () => import("@/views/LeafLet/index.vue"),
      },
    ],
  },
];
