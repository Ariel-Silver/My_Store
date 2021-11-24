<template>
  <div class="product-list">
    <div class="container">
      <div class="row">
        <div
          class="col-md-6 col-lg-4 my-3"
          v-for="product in products"
          :key="product.id"
        >
          <div class="card h-100 card-box">
            <div class="images-container">
              <img
                :src="product.src"
                class="card-img-top image-product"
                alt="..."
              />
            </div>
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.series }}
              </p>
              <div>
                <div v-if="product.clearance === true">
                  <p class="card-text product-price">
                    <img
                      src="../assets/descu.png"
                      class="img-fluid image-discount mr-2"
                      alt="..."
                    />
                    ${{
                      parseInt(
                        product.price * (1 - product.discount / 100)
                      ).toLocaleString("de-DE")
                    }}
                  </p>
                  <p class="card-text product-price-without-clearance pb-3">
                    Precio Original: ${{
                      product.price.toLocaleString("de-DE")
                    }}
                    | {{ product.discount }}% Off
                  </p>
                </div>
                <div v-else>
                  <p class="card-text product-price">
                    ${{ product.price.toLocaleString("de-DE") }}
                  </p>
                </div>
              </div>
              <button
                type="button"
                name="carrito"
                class="align-self-end btn btn-lg btn-block btn-grad"
                style="margin-top: auto"
                @click="addToShoppingCart(product)"
              >
                Añadir al Carro
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: { type: Array, require: true },
  },
  methods: {
    addToShoppingCart(product) {
      console.log("submit addToShoppingCart");
      this.$store.dispatch("addProductToShoppingCart", product);
    },
  },
};
</script>

<style scoped>
.images-container {
  display: flex;
  text-align: center;
  justify-content: center;
}

.image-product {
  width: 90%;
}

.product-price {
  font-weight: bold;
  font-size: 25px;
}
.card-box {
  border-radius: 10px;
  border-color: black;
}

.btn-grad {
  background-color: black;
}
.btn-grad {
  text-align: center;
  color: white;
  box-shadow: 0 0 20px white;
  border-radius: 10px;
  display: block;
}
.btn-grad:hover {
  background-color: #c2161e;
  color: white;
}

.image-discount {
  height: 50px;
}
</style>
