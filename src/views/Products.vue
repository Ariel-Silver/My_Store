<template>
  <div>
    <div class="container text-right search-bar mb-3">
      <form>
        <input
          class="form-control"
          type="search"
          placeholder="Buscar por producto / Nombre / Categoría (HG; RG; RE; PG) / Serie"
          aria-label="Search"
          :value="$store.state.search"
          @input="$store.dispatch('setSearch', $event.target.value)"
        />
      </form>
    </div>

    <div>
      <div v-if="$store.getters.searchedProducts.length > 0">
        <ProductList
          v-if="$store.getters.searchedProducts.length > 0"
          :products="$store.getters.searchedProducts"
        ></ProductList>
      </div>
      <div v-else>
        <div class="product-not-found my-5">No se encontro un modelo</div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  name: "Products",
  components: { ProductList },
};
</script>

<style scoped>
.container {
  margin-top: 75px;
}

.search-bar {
  margin-top: 100px;
}

form {
  margin-top: 100px;
}

input {
  border: 1px solid black;
}

.product-not-found {
  font-size: 24px;
  font-weight: bold;
}
</style>
