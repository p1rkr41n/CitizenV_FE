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
    area: "",
    idArea: "",
    areaCode: "",
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
    getareaCode: (state) => {
      return state.areaCode;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_area: (state, area) => {
      state.area = area;
    },
    SET_idArea: (state, idArea) => {
      state.idArea = idArea;
    },
    SET_areaCode: (state, areaCode) => {
      state.areaCode = areaCode;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
  },
  actions: {
    login: ({ commit, dispatch }, { token, area, idArea, areaCode }) => {
      commit("SET_TOKEN", token);
      commit("SET_area", area);
      commit("SET_idArea", idArea);
      commit("SET_areaCode", areaCode);
      // set auto header token = x-auth-token
      Axios.defaults.headers.common["x-auth-token"] = `${token}`;
    },
    
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },

});
