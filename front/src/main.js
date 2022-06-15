import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"; // boot strap 관련 설정
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap an BootstrapVue CSS 파일 임포트
import "bootstrap-vue/dist/bootstrap-vue.css";
// BootstrapVue 플러그인 설치
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
