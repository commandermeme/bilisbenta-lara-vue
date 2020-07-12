<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand mr-auto" href=""><img src="/img/bilisbenta-logo.png" alt="" class=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/" v-scroll-to="'#home'" class="nav-link text-dark">Home</router-link>
              <!--<a data-toggle="collapse" data-target=".navbar-collapse.show" href="#home" class="nav-link text-dark">Home</a>-->
            </li>
            <li class="nav-item ml-3">
              <a data-toggle="collapse" data-target=".navbar-collapse.show" href="#" v-scroll-to="'#about'" class="nav-link text-dark">About</a>
            </li>
            <li class="nav-item ml-3">
              <a data-toggle="collapse" data-target=".navbar-collapse.show" href="#" v-scroll-to="'#how-it-works'" class="nav-link text-dark">How it works</a>
            </li>
            <li class="nav-item ml-3">
              <a data-toggle="collapse" data-target=".navbar-collapse.show" href="#" v-scroll-to="'#benefits'" class="nav-link text-dark">Benefits</a>
            </li>
            <li class="nav-item ml-3">
              <a data-toggle="collapse" data-target=".navbar-collapse.show" href="#packages" v-scroll-to="'#packages'" class="nav-link text-dark">Packages</a>
            </li>
            <li class="nav-item ml-3">
              <a data-toggle="collapse" data-target=".navbar-collapse.show" href="#contact" v-scroll-to="'#contact'" class="nav-link text-dark">Contact</a>
            </li>
            <li class="nav-item ml-3">
              <router-link data-toggle="collapse" data-target=".navbar-collapse.show" to="/login" class="nav-link text-dark">Login</router-link>
              <!--<a data-toggle="collapse" data-target=".navbar-collapse.show" href="/login" class="nav-link text-dark">Login</a>-->
            </li>
            <!--<li class="nav-item"><router-link to="/login" class="nav-link">Test</router-link></li>-->
          </ul>
        </div>
      </div>
    </nav>
    </div>  
</template>

<script>
export default {
    name: "Navbar"
}
</script>