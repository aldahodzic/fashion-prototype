import Vue from "vue";
import Vuex from "vuex";
import sidebars from "../data/sidebars";
import info from "../data/info";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebars,
    info,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getSidebars: state => {
      return state.sidebars;
    },
    getInfo: state => {
      return state.info;
    },
  },
});
