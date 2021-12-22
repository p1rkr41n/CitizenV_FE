import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/auth"; //new

import { auth } from "./auth.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    Auth, //new
  },
});
