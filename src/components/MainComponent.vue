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
        <p class="orange text-center fw-bold">Trending Online Store</p>
        <h3 class="text-white text-uppercase text-center fw-bold">Gogrin all <span>organic</span> food</h3>
      </div>
      <!-- Navbar -->
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
      <!-- Lista dei prodotti -->
      <div class="row debug" >
        <div class="col-3 m-3 position-relative cards" style="width: 16rem;" v-for="(singleProduct, i) in store.products" :key='i'>
          <img :src="singleProduct.image" class="card-img-top" alt="">
          <div v-if="singleProduct.discount === true" class="sale text-white text-uppercase fw-bold fs-6"> Sale! </div>
          <h5 class="card-title text-center text-white">{{ singleProduct.title }}</h5>
          <div class="d-flex justify-content-center">
            <p class="card-text text-decoration-line-through me-2 opacity-75" v-if="singleProduct.discount === true">{{ singleProduct.price }}</p>
          <p class="card-text fs-5" v-if="singleProduct.discount === true">{{ singleProduct.newPrice }}</p>
          <p class="card-text fs-5" v-if="singleProduct.discount === false">{{ singleProduct.price }}</p>
          </div>
        </div>
      </div>  
      <button class="p-3 text-uppercase text-white">All products</button>
    </div>
  </section>
  <section>
    <!-- Citazione -->
    <div class="my-container debug">
      <p class="fw-bold text-center lh-lg"> "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit chessecake. <br>
        Cookie topping sweets muffine pudding tart bear claw sugar plum croissant." We started as a small legal consultancy. <br>
        We have proved our competence and had many satisfied clients.
      </p>
      <h5 class="text-dark text-center fw-bolder">Martha Alex</h5>
      <div class="orange text-center fw-bolder mb-3">Manager</div>
      <!-- Sconti con link allo shop -->
      <div class="row debug">
        <div class="col bg-img-1 position-relative">
          <h2 class="text-white p-4">Fresh gurden tomato combo offer...$37</h2>
          <a href="" class="text-white text-decoration-none text-uppercase p-4 fw-bold">Shop Now</a>
        </div>
        <div class="col bg-img-2 position-relative">
          <h2 class="text-white p-4">Some ogranic healthy fruits combo offer...$49</h2>
          <a href="" class="text-white text-decoration-none text-uppercase p-4 fw-bold">Shop Now</a>
        </div>
      </div>
    </div>
  </section>
  <section class=" bg-green position-relative debug">
    <!-- Numeri e dati -->
    <div class="my-container ">
      <div class="row justify-content-center">
        <div class="col-3 px-1 pt-4" v-for="(singleCount, i) in store.counter" :key='i'>
          <div class="fs-1 fw-bold orange text-center">{{ singleCount.count }}</div>
          <p class="text-white fs-5 fw-bold text-center">{{ singleCount.subtitle }}</p>
         <img :src="singleCount.counterImage" alt="" class="py-2">
        </div>
      </div>
    </div>
  </section>
  <section class="trend my-5"> 
    <div class="orange text-center fw-bold fs-5">Running week top selling</div>
    <h3 class="green text-uppercase text-center fw-bold">Top <span>trending</span> organic food</h3>
  </section>
</main>
</template>
<style scoped lang="scss">
main {
  margin: 40px;
  h3, .green {
color: #007166;
}
span, .orange {
  color: #EF9E03;
}
.products {
  background-image: url(../assets/img/shop-bg-img.jpg);
  a {
    text-align: center;
  }
  nav {
    margin-left: 300px;
  }
  .cards {
    background-color: transparent;
    border: none;
    p {
      color: #EF9E03;
    }
    .sale {
      background-color: #EF9E03;
      padding: 5px;
      position: absolute;
      top: 10px;
      right: 20px;
      border-radius: 2px;
    }
  }
  button {
      background-color: #EF9E03;
      border-radius: 0 10px 0 10px;
      border: none;
      margin-left: 500px;
      margin-top: 50px;
      margin-bottom: 50px;
    }
}
  .bg-img-1 {
    background-image: url(../assets/img/offer-img01.jpg);
    height: 300px;
    background-repeat: no-repeat;

    a {
      position: absolute;
      bottom: 30px;
    }
  }
  .bg-img-2 {
    background-image: url(../assets/img/offer-img02.jpg);
    height: 300px;
    background-repeat: no-repeat;
    a {
      position: absolute;
      bottom: 30px;
    }
  }
  .bg-green {
    background-image: url(../assets/img/counter-bg.jpg);
    height: 200px;

    img {
      position: absolute;
      top: 10px;
    }
  }
  .trend {
    background-image: url(../assets/img/title-shap.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}


</style>