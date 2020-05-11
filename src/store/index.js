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
    twoCol: false,
  },
  mutations: {
    NAV_IS_HOVER: state => {
      state.isNavHover = true;
    },
    NAV_NOT_HOVER: state => {
      state.isNavHover = false;
    },
    ADD_TO_CART: (state, payload) => {
      state.cart.push({ id: payload[0], size: payload[1], number: 1 });
    },
    TWO_COL: state => {
      state.twoCol = true;
    },
    FOUR_COL: state => {
      state.twoCol = false;
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
    getNavHover: state => {
      return state.isNavHover;
    },
    getCart: state => {
      return state.cart;
    },
    getCartNum: state => {
      let num = 0;
      if (state.cart.length > 0) {
        for (let i = 0; i < state.cart.length; i++) {
          num += state.cart[i].number;
        }
      }
      return num;
    },
    getCol: state => {
      return state.twoCol;
    },
  },
});
