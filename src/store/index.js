import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    shoppingCart: [],
    products: [
      {
        name: "1/144 HG GUNDAM BARBATOS LUPUS",
        series: "Mobile Suit Gundam: Iron-Blooded Orphans",
        category: "HG",
        manufacturer: "Bandai",
        clearance: true,
        discount: 10,
        price: 14990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bann09064_0.jpg",
      },
      {
        name: "1/60 PG UNLEASHED RX-78-2 GUNDAM",
        series: "Gundam 0079",
        category: "PG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 15,
        price: 220000,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans60765_0.png",
      },
      {
        name: "1/144 RG MSM-07S CHAR'S Z'GOK",
        series: "Gundam 0079",
        category: "RG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 19990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/ban990183box.jpg",
      },
      {
        name: "1/144 HGBF TRY BURNING GUNDAM",
        series: "Gundam Build Fighters / Gundam Build Divers",
        category: "HG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 12990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/ban995958box.jpg",
      },
      {
        name: "1/144 RG WING GUNDAM ZERO EW",
        series: "Gundam Wing",
        category: "RG",
        manufacturer: "Bandai",
        clearance: true,
        discount: 30,
        price: 24990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/ban994380box.jpg",
      },
      {
        name: "1/144 RG FORCE IMPULSE GUNDAM",
        series: "Gundam Seed",
        category: "RG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 24990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans59228_0.png",
      },
      {
        name: "1/60 PG PERFECT STRIKE GUNDAM",
        series: "Gundam Seed",
        category: "PG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 186990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans59011_0.png",
      },
      {
        name: "1/144 HGAC GUNDAM DEATHSCYTHE",
        series: "Gundam Wing",
        category: "HG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 10990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans61654_1.jpg",
      },
      {
        name: "1/144 RG GUNDAM ASTRAY GOLD FRAME AMATSU MINA",
        series: "Gundam Seed VS Astray",
        category: "RG",
        manufacturer: "Bandai",
        clearance: true,
        discount: 50,
        price: 24990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bann16380_0.png",
      },
      {
        name: "1/100 RE/100 MSN-04II NIGHTINGALE",
        series: "Char's Counterattack",
        category: "RE",
        manufacturer: "Bandai",
        clearance: true,
        discount: 25,
        price: 60990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/ban992082_0.jpg",
      },
      {
        name: "1/144 HGCE DESTINY GUNDAM",
        series: "Gundam Seed Destiny",
        category: "HG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 14990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans57606_0.png",
      },
      {
        name: "1/144 RG GNT-0000 00 QAN[T]",
        series: "Gundam 00 (Double O)",
        category: "RG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 19990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bann06312_0.jpg",
      },
      {
        name: "1/48 MEGA SIZE MODEL UNICORN GUNDAM (DESTROY MODE)",
        series: "Gundam UC (Unicorn)",
        category: "RE",
        manufacturer: "Bandai",
        clearance: true,
        discount: 1,
        price: 54990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bann16742_0.jpg",
      },
      {
        name: "1/144 HGBD:R ELDORA BRUTE",
        series: "Gundam Build Fighters / Gundam Build Divers",
        category: "HG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 14990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans58306_0.png",
      },
      {
        name: "1/144 HGCE INFINITE JUSTICE GUNDAM",
        series: "Gundam Seed Destiny",
        category: "HG",
        manufacturer: "Bandai",
        clearance: false,
        discount: 0,
        price: 14990,
        src: "https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/b/a/bans58930_0.png",
      },
    ],
  },
  getters: {
    searchedProducts(state) {
      if (state.search === "") {
        return state.products;
      } else {
        return state.products.filter(
          (product) =>
            product.name.toLowerCase().includes(state.search.toLowerCase()) ||
            product.series.toLowerCase().includes(state.search.toLowerCase()) ||
            product.manufacturer
              .toLowerCase()
              .includes(state.search.toLowerCase()) ||
            product.category.toLowerCase().includes(state.search.toLowerCase())
        );
      }
    },

    searchProductByClearance(state) {
      return state.products.filter((product) => product.clearance === true);
    },

    productsOnShoppingCart(state) {
      return state.shoppingCart.map((item) => {
        const product = state.products.find(
          (product) => product.name === item.name
        );
        return {
          name: product.name,
          series: product.series,
          price: product.price,
          discount: product.discount,
          clearance: product.clearance,
          src: product.src,
          quantity: item.quantity,
        };
      });
    },

    totalAmountShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator =
          accumulator + item.price * (1 - item.discount / 100) * item.quantity;
        return accumulator;
      }, 0);
    },

    totalQuantityInShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator = accumulator + item.quantity;
        return accumulator;
      }, 0);
    },

    totalDiscountShoppingCart(state) {
      return state.shoppingCart.reduce((accumulator, item) => {
        accumulator =
          accumulator +
          (item.price * item.quantity -
            item.price * (1 - item.discount / 100) * item.quantity);
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    SET_SEARCH(state, newSearch) {
      state.search = newSearch;
    },

    ADD_PRODUCT_TO_PRODUCT_LIST(state, newProduct) {
      state.products.push(newProduct);
    },

    ADD_PRODUCT_TO_SHOPPING_CART(state, product) {
      state.shoppingCart.push({ ...product, quantity: 1 });
    },

    INCREMENT_PRODUCT_QUANTITY(state, productAlreadyInShoppinCart) {
      productAlreadyInShoppinCart.quantity++;
    },

    REDUCE_PRODUCT_QUANTITY(state, index) {
      state.shoppingCart[index].quantity--;
    },

    REMOVE_PRODUCT_FROM_SHOPPING_CART(state, index) {
      state.shoppingCart.splice(index, 1);
    },
    CLEAR_SHOPPING_CART(state) {
      state.shoppingCart = [];
    },
  },
  actions: {
    setSearch(context, newSearch) {
      context.commit("SET_SEARCH", newSearch);
    },

    addProductToProductList(context, newProduct) {
      context.commit("ADD_PRODUCT_TO_PRODUCT_LIST", { ...newProduct });
    },

    addProductToShoppingCart(context, product) {
      const productAlreadyInShoppinCart = context.state.shoppingCart.find(
        (productAlreadyInShoppinCart) =>
          (product.name && product.series) ===
          (productAlreadyInShoppinCart.name &&
            productAlreadyInShoppinCart.series)
      );

      if (productAlreadyInShoppinCart) {
        context.commit(
          "INCREMENT_PRODUCT_QUANTITY",
          productAlreadyInShoppinCart
        );
      } else {
        context.commit("ADD_PRODUCT_TO_SHOPPING_CART", product);
      }
    },

    reduceProductQuantity(context, index) {
      if (context.state.shoppingCart[index].quantity > 1) {
        context.commit("REDUCE_PRODUCT_QUANTITY", index);
      } else {
        context.commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", index);
      }
    },
    removeProductFromShoppingCart(context, index) {
      const productIndex = context.state.shoppingCart[index];
      context.commit("REMOVE_PRODUCT_FROM_SHOPPING_CART", productIndex);
    },

    clickOnCheckout(context) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("CLEAR_SHOPPING_CART");
          resolve();
        }, 1000);
      });
    },
  },
  modules: {},
});
