import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import UserPage from "../views/UserPage.vue";
import Menu from "../components/Menu.vue";
import Profile from "../components/Profile.vue";
import RatingPage from "../views/RatingPage.vue";
import Suggestion from "../components/Suggestions.vue";
import Preoccupation from "../components/Preoccupation.vue";
import Register from "../views/Register.vue";
import AdminLogin from "../views/admin/AdminLogin.vue";
import Dashboard from "../views/admin/Dashboard.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/connexion",
  },
  {
    path: "/connexion",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/inscription",
    name: "Register",
    component: Register,
  },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage,
    children: [
      {
        path: "/menu",
        component: Menu,
      },
      {
        path: "/profil",
        component: Profile,
      },
      {
        path: "/rating",
        component: RatingPage,
      },
      {
        path: "/suggestions",
        component: Suggestion,
      },
      {
        path: "/preoccupation",
        component: Preoccupation,
      },
    ],
  },

  {
    path: "/admin",
    redirect: "/admin/login",
  },
  {
    path: "/admin/login",
    component: AdminLogin,
  },
  {
    path: "/dashboard",
    component: Dashboard,
  },
  { path: "/404", component: NotFound },
  { path: "*", redirect: "/404" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
