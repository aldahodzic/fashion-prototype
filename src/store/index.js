import Vue from "vue";
import Vuex from "vuex";
import sidebars from "../data/sidebars";
import info from "../data/info";
import utilities from "../data/utilities";
import products from "../data/products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebars,
    info,
    utilities,
    subscribeDetail: { email: "", woman: false, man: false, kids: false },
    products,
    cart: [],
    isNavHover: false,
    twoCol: false
  },
  mutations: {
    NAV_IS_HOVER: state => {
      state.isNavHover = true;
    },
    NAV_NOT_HOVER: state => {
      state.isNavHover = false;
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
    getCollections: state => {
      return state.products;
    },
    getCart: state => {
      return state.cart;
    },
    getNavHover: state => {
      return state.isNavHover;
    },
  },
});
