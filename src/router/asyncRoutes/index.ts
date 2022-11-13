import { RouteRecordRaw } from "vue-router";

const modules = import.meta.glob("/src/router/asyncRoutes/modules/*.ts", {
  eager: true,
});

const asyncRoutes: RouteRecordRaw[] = [];

Object.keys(modules || {}).forEach((key) => {
  const mod = modules[key]?.default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  asyncRoutes.push(...modList);
});

export default asyncRoutes;
