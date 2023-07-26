<script>

export default {
  components :{
  },

  data() {
    return {  }
  },
  methods: {}
}
</script>

<template>
<header class="debug">
  <!-- Header top con indirizzo, mail, orario e social -->
  <section class="header-top p-2">
  <div class="my-container">
      <div class="row justify-content-between">
        <div class="col text-white">
          <span><a href="">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            North baukhula, tala, USA</a></span>
          <span><a href="">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            demo@example.com</a></span>
        </div>
        <div class="col text-end">
          <span>
            <font-awesome-icon icon="fa-solid fa-clock" />
            8.30AM-8.30AM  
          </span>
          <span >
            <font-awesome-icon icon="fa-brands fa-facebook-f" class="mx-2"/>
            <font-awesome-icon icon="fa-brands fa-twitter" class="mx-2" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="mx-2"/>
            <font-awesome-icon icon="fa-brands fa-pinterest-p" class="mx-2"/>
          </span>
        </div>
      </div>
    </div>
  </section>
  <!-- Nav bar con logo e carrello -->
  <section class="header-bottom p-2">
    <div class="my-container">
      <div class="row">
        <div class="col">
          <img src="../assets/img/logo.png" alt="Logo Gogrin">
        </div>
        <div class="col">
          <!-- Voci del menù con dropdown -->
          <nav class="navbar navbar-expand-lg text-uppercase">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item dropdown">  
                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                  <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">Action</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Service</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Other</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Contact</a>
                </li>
              </ul>
              </div>
            </div>
          </nav>
        </div>
        <!-- Carrello -->
          <div class="col">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="color: #ef9e03;" class="p-1 rounded-circle border m-2"/>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" style="color: #007166;" class="p-1 rounded-circle border m-2"/>
            <button class="p-3 text-uppercase text-white">Order Now</button>
          </div>
        </div>
      </div>
  </section>
  <!-- Jumbotron con buttons -->
  <section class="jumbotron text-white p-4">
    <h3 class="text-uppercase text-center">Gogrin ogranic food store</h3>
    <h1 class="text-center fw-bolder fs-1">Eating naturally & organic is 
      <br> always be healthy</h1>
      <button class="p-3 text-uppercase text-white button-1">About us</button>
      <button class="p-3 text-uppercase text-white button-2">our history</button>
  </section>
</header>
</template>

<style scoped lang="scss">
@use "../assets/scss/main.scss";
  .header-top {
      background-color: #007166;
      color: white;

    a {
      text-decoration: none;
      margin: 10px;
      color: white;
    }
    .orange {
      color: #EF9E03;
    }
  }
    button {
      background-color: #EF9E03;
      border-radius: 0 10px 0 10px;
      border: none;
    }
    .jumbotron {
      background-image: url(../assets/img/H3-slider3.jpg);
      height: 800px;
      h3 {
        margin-top: 300px;
      }
      button:first-of-type {
        margin-left: 600px;
      }
      button:last-child {
        margin-left: 10px;
        background-color: #007166;
      }
      .button-1:hover {
        background-color:#007166;
      }
      .button-2:hover {
        background-color: #EF9E03;
      }
   }

</style>