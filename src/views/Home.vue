<template>
  <div class="home">
    <section>
      <div class="row">
        <div class="column">
          <div>
            <img src="../assets/warning-banner.gif" alt="" class="sideLeft" />
          </div>
        </div>

        <div class="column mt-5">
          <div>
            <img
              src="../assets/GundamGif.gif"
              alt="Gundam_Gif"
              class="gundam"
            />
          </div>
          <div class="container text-center">
            <button name="button01" type="button" class="btn btn-danger">
              <router-link :to="{ name: 'products' }" class="nav-link"
                >Ir a la tienda</router-link
              >
            </button>
          </div>
        </div>

        <div class="column">
          <div>
            <img src="../assets/warning-banner.gif" alt="" class="sideRight" />
          </div>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.column {
  width: 33.33%;
  padding: 10px;
  height: 300px;
}

.gundam {
  padding-top: 8%;
}

.btn {
  margin-top: 2%;
  border-radius: 15px;
  color: black;
  border: 4px solid black;
  letter-spacing: 2px;
  font-size: 20px;
}
.nav-link {
  color: black !important;
  text-decoration: none !important;
}

.sideLeft {
  float: right;
  clear: left;
  margin-top: 50%;
  padding-top: 18%;
  width: 900px;
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sideRight {
  float: left;
  clear: right;
  margin-top: 50%;
  padding-top: 18%;
  width: 900px;
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
</style>
