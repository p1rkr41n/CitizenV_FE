import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import createPersistedState from "vuex-persistedstate";
// import { compile } from "vue/types/umd";

Vue.use(Vuex);
//set default local storage
const getDefaultState = () => {
  return {
    token: "",
    name: "",
    area: "",
    idArea: "",
    // id: "",
  };
};
//set local storage
export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getarea: (state) => {
      return state.area;
    },
    getidarea: (state) => {
      return state.idArea;
    },
    getname: (state) => {
      return state.name;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_name: (state, name) => {
      state.name = name;
    },
    SET_area: (state, area) => {
      state.area = area;
    },
    SET_idArea: (state, idArea) => {
      state.idArea = idArea;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    login: ({ commit, dispatch }, { token, name, area, idArea }) => {
      commit("SET_TOKEN", token);
      commit("SET_name", name);
      commit("SET_area", area);
      commit("SET_idArea", idArea);
      // set token link with main.js
      Axios.defaults.headers.common["token"] = `${token}`;
    },
    
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },

});
