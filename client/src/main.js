import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import "semantic-ui-css/semantic.min.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faQuestion,
  faLightbulb,
  faFileAlt,
  faSmileBeam,
  faBars,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
library.add(
  faHome,
  faQuestion,
  faLightbulb,
  faFileAlt,
  faSmileBeam,
  faBars,
  faCheck
);

Vue.use(SuiVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
