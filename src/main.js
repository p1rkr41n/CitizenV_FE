import Vue from "vue";
import VueRouter from "vue-router";
import vSelect from "vue-select";
import { mapGetters } from "vuex";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

import VueApexCharts from "vue-apexcharts";

//Auth:
import store from "./store";
import Axios from "axios";
Vue.config.productionTip = false;
// set auth header
Axios.defaults.headers.common["token"] = `${store.state.token}`; // get token from store
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});


Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.component("v-select", vSelect);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
  data: {
  },
  computed: mapGetters(["isLoggedIn", "getarea", "getidarea", "getareaCode"]), // getters from store
});
