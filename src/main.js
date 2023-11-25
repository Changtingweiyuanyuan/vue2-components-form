import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(vuelidate);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");