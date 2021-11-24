<template>
  <div class="home">
    <section class="banner-checkout">
      <div class="pt-5">
        <div>
          <h4>¡Tu compra fue aceptada!</h4>
          <div>
            <img src="../assets/compra.gif" alt="" />
          </div>
        </div>
        <div class="container text-center">
          <button type="button" class="btn btn-dark mt-5">
            <router-link :to="{ name: 'products' }" class="nav-link"
              >Seguir Comprando</router-link
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}
h4 {
  color: black;
}

.banner-checkout {
  padding-top: 80px;
}
</style>
