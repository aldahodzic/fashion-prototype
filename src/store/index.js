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
    unsubscribeEmail: "",
  },
  mutations: {
    updateSubscribeDetail: (state, data) => {
      state.subscribeDetail.email = data[0];
      state.subscribeDetail.woman = data[1];
      state.subscribeDetail.man = data[2];
      state.subscribeDetail.kids = data[3];
    },
    updateUnsubscribeEmail: (state, data) => {
      state.unsubscribeEmail = data;
    },

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
    getSubscribeDetail: state => {
      return state.subscribeDetail;
    },
    getUnsubsribeEmail: state => {
      return state.unsubscribeEmail;
    },
  },
});
