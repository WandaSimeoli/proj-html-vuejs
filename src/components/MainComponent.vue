<script>
import { store } from '../store.js';
export default {
  components :{
  },

  data() {
    return { store }
  },
  methods: {},
  computed : {
    firstFourProducts() {
      return this.store.products.slice(0,4);
    }
  }
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
            <span class="orange">Look what</span> consumer power has done with <span class="orange">organic food;</span>we can do to the same with clothes
          </h3>
        </div>
        <div class="col-5">
          <p class="fs-6 fw-light">I have need to make these sorts of connections literal sometimes, and a vehicle often helps to do that. I have a relationship to hosting culture, 
            <span class="orange">It isn't really about it helps to do that.  I have a relationship to hosting culture.</span>
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
        <h3 class="text-white text-uppercase text-center fw-bold">Gogrin all <span class="orange">organic</span> food</h3>
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
        <div class="col-3 m-3 position-relative cards border-0" style="width: 16rem;" v-for="(singleProduct, i) in store.products" :key='i'>
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
      <!-- Citazione -->
  <section>
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
      <!-- Numeri e dati -->
  <section class=" bg-green position-relative debug">
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
    <!-- Top trending -->
  <section class=" my-5"> 
    <div class="my-container">
      <div class="trend">
        <div class="orange text-center fw-bold fs-5">Running week top selling</div>
        <h3 class="green text-uppercase text-center fw-bold">Top <span class="orange">trending</span> organic food</h3>
      </div>
      <div class="row debug my-4">
        <div class="col-3 m-3 position-relative cards border border-success border-opacity-10" style="width: 16rem;" v-for="(singleProduct, i) in firstFourProducts" :key='i'>
          <img :src="singleProduct.image" class="card-img-top" alt="">
          <div v-if="singleProduct.discount === true" class="sales text-white text-uppercase fw-bold fs-6"> Sale! </div>
          <h5 class="card-title text-center">{{ singleProduct.title }}</h5>
          <div class="d-flex justify-content-center">
            <p class="card-text text-decoration-line-through me-2 opacity-75 fw-lighter" v-if="singleProduct.discount === true">{{ singleProduct.price }}</p>
            <p class="card-text fs-6 text-decoration-underline fw-lighter" v-if="singleProduct.discount === true">{{ singleProduct.newPrice }}</p>
            <p class="card-text fs-6 fw-lighter" v-if="singleProduct.discount === false">{{ singleProduct.price }}</p>
          </div>
        </div>
      </div>  
    </div>
  </section>
    <!-- Sezione dei contatti con numeri di telefono e appuntamenti -->
  <section class="contacts">
    <div class="my-container debug p-3">
      <p class="text-white text-uppercase text-center fw-bold mt-5">here you can 100% fresh organic food</p>
      <h2 class="text-white text-center fw-bold">Best organic food up to 25% off for all product</h2>
      <p class="text-white text-center mb-5">The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss,
        and have found their way out of those depths. he most beautiful people we have known are those who have known defeat, known suffering
      </p>
      <button class="p-3 text-white rounded me-4">+088123 56 906</button>
      <button class="p-3 text-white text-uppercase rounded">Apointment</button>
    </div>
  </section>
  <section class="my-5">
    <div class="my-container">
      <div class="trend">
        <div class="orange text-center fw-bold fs-5">The news what we have</div>
        <h3 class="green text-uppercase text-center fw-bolder">Gogrin latest <span class="orange">news</span> feed</h3>
      </div>
    </div>
  </section>
     <!-- Articoli -->
  <section>
    <div class="my-container">
      <div class="row">
      <div class="col m-3 border-0" style="width: 16rem;" v-for="(singleArticle, i) in store.articles" :key='i'>
        <img :src="singleArticle.image" alt="" class="card-img-top mb-2">
        <span class="card-subtitle me-2  opacity-75">{{ singleArticle.author }}</span> 
        <span class="card-subtitle mb-2 fs-6 opacity-75"> {{ singleArticle.date }}</span>
        <h5 class="card-title green fw-bold mt-2">{{ singleArticle.title }}</h5>
        <p class="card-text opacity-75">{{ singleArticle.preview }}</p>
        <a href="" class="text-decoration-none green text-uppercase">Read more...</a>
      </div>
    </div>
    </div>
  </section>
     <!-- Colonne con loghi -->
  <section class="logos">
    <div class="my-container">
      <div class="row">
        <div class="col" v-for="(singleLogo, i ) in store.logos" :key="i">
          <img :src="singleLogo" alt="" class="mt-5 px-4">
        </div>
      </div>
    </div>
  </section>
   <!-- Form con input mail e submit -->
  <section class="mt-5 position-relative">
    <div class="my-container form">
      <div class="row p-5">
        <div class="col">
          <h2 class="text-white text-uppercase fw-bold">Subscribe our newsletter</h2>
        </div>
        <div class="col">
          <form action="">
            <div class="input-group mb-3">
          <input type="email" class="form-control rounded-0" placeholder="your email" aria-label="your email" aria-describedby="button-addon2">
          <button class="btn text-white text-uppercase rounded-0 p-3 w-25" type="submit" id="button-addon2">Send</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
</template>
<style scoped lang="scss">
main {
  margin: 40px;
  h3, .green {
color: #007166;
}
 .orange {
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
    p {
      color: #EF9E03;
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
.sales {
      background-color: #EF9E03;
      padding: 5px;
      position: absolute;
      top: 10px;
      right: 20px;
      border-radius: 2px;
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
    background-size: contain;
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
  .contacts {
    background-image: url(../assets/img/call-to-bg.jpg);
    height: 400px;

  button:first-of-type {
    background-color: #EF9E03;
    margin-left: 400px;
  }
  button {
    background-color: #007166;
  }
  }
  .logos {
    margin-bottom: 200px;
  }
  .form {
    background-image: url(../assets/img/milesim-bg.jpg);
    position: absolute;
    bottom: -100px;
    left: 200px;
    width: 1100px;
  }
    button {
      background-color: #007166;
    }

}


</style>