<template>
  <div id="app">
    <Content/>
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import Content from '../components/Content.vue'

export default {
  name: 'Home',
  components: {
    Content
  } 
}
</script>
  
<style>
#app {
  font-family: Nunito;
}
</style>
