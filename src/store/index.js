import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },

    addToBag(state, product) {
      state.productsInBag.push(product);
    },

    removeFromBag(state, productId) {
      let updatedBag = this.state.productsInBag.filter(
        (item) => productId != item.id
      );
      this.state.productsInBag = updatedBag;
    },
  },

  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit("loadProducts", response.data);
      });
    },

    addToBag({ commit }, product) {
      commit("addToBag", product);
    },

    removeFromBag({ commit }, productId) {
      if (confirm("Are You Sure?")) {
        commit("removeFromBag", productId);
      }
    },
  },
  modules: {},
});
