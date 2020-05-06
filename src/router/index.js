import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Info from "../views/Info.vue";
import Newsletter from "../views/info/Newsletter.vue";
import Contact from "../views/info/Contact.vue";
import Returns from "../views/info/Returns.vue";
import Confirm from "../views/info/Confirm.vue";
import Form from "../views/info/Form.vue";

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
        path: "/confirm/:method",
        name: "Confirm",
        component: Confirm,
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
      { path: "/contact/form", name: "Form", component: Form },
      { path: "/returns", name: "Returns", component: Returns },
    ],
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  routes,
  mode: "history",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
