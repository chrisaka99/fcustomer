import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import UserPage from "../views/UserPage.vue";
import Menu from "../components/Menu.vue";
import TheFirstProfile from "../components/TheFirstProfile.vue";
import Profile from "../components/Profile.vue";
import RatingPage from "../views/RatingPage.vue";
import Suggestion from "../components/Suggestions.vue";
import Preoccupation from "../components/Preoccupation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/connexion",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/inscription",
    name: "RegisterPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RegisterPage.vue"),
  },
  {
    path: "/user",
    name: "UserPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserPage,
    children: [
      {
        path: "/menu",
        component: Menu,
      },
      {
        path: "/profile-setup",
        component: TheFirstProfile,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
