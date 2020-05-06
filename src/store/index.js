import Vue from "vue";
import Vuex from "vuex";
import sidebars from "../data/sidebars";
import info from "../data/info";
import utilities from "../data/utilities";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebars,
    info,
    utilities,
    subscribeDetail: { email: "", woman: false, man: false, kids: false },
  },
  mutations: {


  },
  actions: {},
  modules: {},
  getters: {
    getSidebars: state => {
      return state.sidebars;
    },
    getInfo: state => {
      return state.info;
    },
    getUtilities: state => {
      return state.utilities;
    },


  },
});
