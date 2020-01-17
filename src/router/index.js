import Vue from "vue";
import VueRouter from "vue-router";
import Form from "../views/form/form-view.vue";
import Button from "../views/button/button-view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    name: "form",
    component: Form
  },
  {
    path: "/button",
    name: "button",
    component: Button
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
