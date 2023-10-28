import { createRouter, createWebHistory } from "vue-router";
import SelectProfile from "@/views/SelectProfile.vue";
import MainProfile from "@/views/MainProfile.vue";
import LoginRegistration from "@/views/LoginRegistration.vue";
import ChartActions from "@/components/statistic/ChartActions.vue";
import ErrorPage from "@/views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: SelectProfile,
    meta: { requiresAuth: true },
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/profile/:id",
    name: "profile",
    component: MainProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/authorithation",
    name: "authorithation",
    component: LoginRegistration,
  },
  {
    path: "/chart",
    name: "chart",
    component: ChartActions,
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next("/authorithation");
  } else {
    console.log(isAuthenticated());
    next();
  }
});

function isAuthenticated() {
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  console.log(tokenExpiration != null);
  console.log(new Date().getTime() > Number(tokenExpiration));
  console.log(
    tokenExpiration != null && new Date().getTime() > Number(tokenExpiration)
  );
  if (
    tokenExpiration == null ||
    new Date().getTime() > Number(tokenExpiration)
  ) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    return false;
  }
  return true;
}

export default router;
