import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Newsletter from "../views/info/Newsletter.vue";
import Contact from "../views/info/Contact.vue";
import Returns from "../views/info/Returns.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
    children: [
      {
        path: "/newsletter",
        name: "Newsletter",
        component: Newsletter,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
      { path: "/returns", name: "Returns", component: Returns },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
