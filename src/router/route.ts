import type { RouteRecordRaw } from "vue-router";

function load(path: string): any {
  return import("../views/" + path + "/index.vue");
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => load("home"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      icon: "",
      hide: true,
    },
    component: () => load("login"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NoPage",
    meta: {
      icon: "",
      hide: true,
    },
    component: () => load("noPage"),
  },
];
