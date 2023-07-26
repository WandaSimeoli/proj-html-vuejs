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
    firstTwoArticles() {
      return this.store.articles.slice(0,2);
    }
  }
}
</script>

<template>
<footer>
   <!-- Footer top con 4 colonne -->
  <section class="footer-top  p-5">
    <div class="my-container">
         <!-- Colonna 1 con logo -->
      <div class="row margin">
        <div class="col">
          <img src="../assets/img/footer-logo.png" alt="" class="mb-4">
          <p class="text-white">War should never be entered upon until every agency of peace hai failed not to be good</p>
          <font-awesome-icon icon="fa-brands fa-square-facebook" class="mx-2 text-white fs-1 icon"/>
            <font-awesome-icon icon="fa-brands fa-square-twitter" class="mx-2 text-white fs-1 icon" />
            <font-awesome-icon icon="fa-brands fa-square-google-plus" class="mx-2 text-white fs-1 icon"/>
            <font-awesome-icon icon="fa-brands fa-square-pinterest" class="mx-2 text-white fs-1 icon"/>
        </div>
          <!-- Colonna due con lista di link -->
        <div class="col-3">
          <h3 class="text-white">Emergency Link.</h3>
          <ul>
            <li v-for="(link, i) in store.footerLinks" :key="i" class="list-unstyled p-2">
              <a href="" class="text-white text-decoration-none"> {{ link }}</a>
            </li>
          </ul>
        </div>
          <!-- Colonna 3 Articoli -->
        <div class="col">
          <h3 class="text-white">Our Latest Blog.</h3>
          <div class="row g-0" v-for="(article, i) in firstTwoArticles" :key="i">
            <div class="col">
              <img :src="article.smallImage" alt="">
            </div>
            <div class="col">
              <a href="" class="text-decoration-none"><h6 class="text-white">{{ article.title }}</h6></a>
              <p class="text-white">{{ article.date }}</p>
          </div>
          </div>
        </div>
         <!-- Colonna 4 con galleria -->
        <div class="col">
         <h3 class="text-white"> Our Gallery</h3>
         <div class="row gx-1 gy-2">
          <div class="col" v-for="(singleImage, i) in store.footerImage">
            <img :src="singleImage" alt="">
          </div>
         </div>
        </div>
      </div>
    </div>
  </section>
     <!-- Footer bottom con copyright -->
  <section>
    <div class="my-container">
      <div class="row p-3">
      <div class="col">
        <p class="text-white">Copyrigth 
          <font-awesome-icon icon="fa-regular fa-copyright" class=" text-white"/>
          grogrin all rights reserved.</p>
      </div>
      <div class="col text-white text-end ">
        <a href="" class="text-white text-decoration-none m-2">Service</a>
        <a href="" class="text-white text-decoration-none m-2">Pricing Table</a>
        <a href="" class="text-white text-decoration-none m-2">Contact</a>
      </div>
    </div>
    </div>
  </section>
</footer>
</template>

<style scoped lang="scss">

footer {
  background-color: #007166;
  .footer-top {
  background-image: url(../assets/img/footer-bg.jpg);
  
  .margin {
    margin-top: 100px;
  }
}
.icon:hover {
  background-color: #ef9e03;
}
}
</style>