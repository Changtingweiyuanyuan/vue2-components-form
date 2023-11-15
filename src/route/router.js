import Vue from "vue";
import Router from "vue-router";
import Form from "@/pages/form/Index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "form",
      component: Form,
    },
  ],
});
