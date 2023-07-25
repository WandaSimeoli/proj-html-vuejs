<script>
import { store } from '../store.js';
export default {
  components :{
  },

  data() {
    return { store }
  },
  methods: {}
}
</script>

<template>
<main>
  <!-- Sezione a 3 colonne con descrizione e marchio -->
  <section class="description debug position-relative">
    <div class="my-container debug">
      <div class="row">
        <div class="col-4">
          <h3 class="fw-bold fs-2">
            <span>Look what</span> consumer power has done with <span>organic food;</span>we can do to the same with clothes
          </h3>
        </div>
        <div class="col-5">
          <p class="fs-6 fw-light">I have need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture, 
            <span>It isn't really about it helps to do that.  I have a relationship to hosting culture.</span>
          </p>
          <p class="fs-6 fw-light">Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that, I have a relationship to hosting culture.</p>
        </div>
        <div class="col">
          <img src="../assets/img/fe-shap1-1.png" alt="Marchio 100% Natural" class="position-absolute top-0 end-0">
        </div>
      </div>
      <!-- Riga con 4 colonne e immagini -->
      <div class="row">
        <div class="col">
          <img src="../assets/img/fe3.jpg" alt="">
        </div>
        <div class="col">
          <img src="../assets/img/fe1.jpg" alt="">
        </div>
        <div class="col">
          <img src="../assets/img/fe2.jpg" alt="">
        </div>
        <div class="col">
          <img src="../assets/img/fe1.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <!-- Sezione shop -->
  <section class="container-md debug my-5 products">
    <div class="my-container debug pt-5">
      <div class="title" v-for="i in 2" :key="i">
        <p class="orange text-center">Trending Online Store</p>
        <h3 class="text-white text-uppercase text-center">Gogrin all <span>organic</span> food</h3>
      </div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-sm debug">
          <div class="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul class="navbar-nav ">
              <li class="nav-item " v-for="(singleLink, i) in store.links" :key='i'>
                <a class="nav-link active text-white p-4 " aria-current="page" href="#">{{ singleLink }}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row debug" >
        <div class="card m-3" style="width: 16rem;" v-for="(singleProduct, i) in store.products" :key='i'>
          <img :src="singleProduct.image" class="card-img-top" alt="">
          <h3 class="card-title text-center text-white">{{ singleProduct.title }}</h3>
          <p class="card-text text-center">{{ singleProduct.price }}</p>
        </div>
      </div>  
    </div>
  </section>
</main>
</template>
<style scoped lang="scss">
main {
  margin: 40px;
  h3 {
color: #007166;

}
span, .orange {
  color: #EF9E03;
}
}
.products {
  background-image: url(../assets/img/shop-bg-img.jpg);
  a {
    text-align: center;
  }
  nav {
    margin-left: 300px;
  }
  .card {
    background-color: transparent;
    border: none;
    p {
      color: #EF9E03;
    }
  }
}

</style>