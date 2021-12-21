import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

// import MaterialDashboard from "./material-dashboard";

// import GlobalComponents from "./globalComponents";
// import GlobalDirectives from "./globalDirectives";
// import Notifications from "./components/NotificationPlugin";

createApp(App)
// .use(GlobalDirectives);
// .use(GlobalComponents);
// .use(VueApexCharts);
// .use(MaterialDashboard);
  
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  // .use(MaterialDashboard)
  .mount("#app");
