export default [
  {
    path: "/slideShow",
    name: "SlideShow",
    meta: {
      title: "SlideShow",
      icon: "",
    },
    children: [
      {
        name: "SlideShow",
        path: "",
        component: () => import("@/views/SlideShow/index.vue"),
      },
    ],
  },
];
