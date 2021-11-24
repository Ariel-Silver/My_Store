<template>
  <div id="app">
    <h2 class="my-4 title">Agrega un producto a la lista</h2>

    <div>
      <form @submit.prevent="addProductToProductList">
        <div class="form-options py-2">
          <div class="form-text">
            <div class="row align-items-center">
              <div class="col-6 text-right pr-3">
                <label>Nombre:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  name="name"
                  v-model="form.name"
                  required
                  placeholder="Escriba un nombre"
                />
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Serie:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  name="serie"
                  v-model="form.series"
                  required
                  placeholder="Escriba una descripción"
                />
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Categoría:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <select name="categoria" v-model="form.category" required>
                  <option disabled selected value="">
                    Elige una categoría
                  </option>
                  <option value="HG">HG</option>
                  <option value="RG">RG</option>
                  <option value="RE">RE</option>
                  <option value="PG">PG</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-size mt-2">
            <div class="row justify">
              <div class="col-6 text-right pr-3">
                <label>Precio:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="number"
                  v-model.number="form.price"
                  required
                  placeholder="Ingrese el precio"
                />
              </div>
            </div>
          </div>

          <div class="form-manufacturer mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Marca:</label>
              </div>
              <div class="col-1 text-left pl-0">
                <select name="brand" v-model="form.manufacturer" required>
                  <option disabled selected value="">Elige una marca</option>
                  <option value="AM">Accurate Miniatures (USA)</option>
                  <option value="BI">Bandai (Japan)</option>
                  <option value="BL">Black Label (China)</option>
                  <option value="CR">Condor (Ukraine)</option>
                  <option value="EO">Ebbro (Japan)</option>
                  <option value="HC">Hobbycraft (Canada)</option>
                </select>
              </div>
            </div>
          </div>
          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Oferta:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <select name="discount" v-model="form.clearance" required>
                  <option disabled selected value="">
                    Producto con descuento
                  </option>
                  <option value="true">Sí</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-filter mt-2" v-if="form.clearance">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>Descuento (%):</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                name="zero"
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  v-model.number="form.discount"
                  v-if="form.clearance"
                  required
                  placeholder="Ingrese el descuento"
                />
              </div>
            </div>
          </div>

          <div class="form-filter mt-2">
            <div class="row">
              <div class="col-6 text-right pr-3">
                <label>URL Imagen:</label>
              </div>
              <div class="col-6 text-left pl-0">
                <input
                  type="text"
                  name="url"
                  v-model="form.src"
                  required
                  placeholder="Pega la URL de imagen"
                />
              </div>
            </div>
          </div>
        </div>

        <button name="button02" class="mt-3 btn btn-outline-dark" type="submit">
          Añadir Producto
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProducts",
  data: () => ({
    form: {
      name: "",
      series: "",
      category: "",
      manufacturer: "",
      clearance: false,
      discount: null,
      price: null,
      src: "",
    },
  }),
  methods: {
    addProductToProductList() {
      console.log("submit");
      console.log(this.form);
      this.$store.dispatch("addProductToProductList", this.form);
      alert(
        `¡Genial! el producto ${this.form.name} ha sido agregado exitosamente`
      );
      this.form = "";
    },
  },
};
</script>

<style scoped>
.form-color select {
  display: flex;
  vertical-align: middle;
  height: 30px;
  display: grid;
}

.circle {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 150px;
}

input {
  width: 300px;
  border: 1px solid black;
}

select {
  width: 300px;
  border: 1px solid black;
}
</style>
