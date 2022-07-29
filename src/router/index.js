import Vue from "vue";
import VueRouter from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      crumbs: "Главная",
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      crumbs: "Главная/О нас",
    },
  },
  {
    path: "/services",
    name: "services",
    meta: {
      crumbs: "Главная/Услуги",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
    meta: {
      crumbs: "Главная/Проекты",
    },
  },
  {
    path: "/blog",
    name: "blog",
    meta: {
      crumbs: "Главная/Блог",
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    meta: {
      crumbs: "Главная/Контакты",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
