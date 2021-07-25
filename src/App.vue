<template>
  <div id="app">
    <Nav/>
    <router-view class="mt-24"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Nav,
    Footer
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}

</style>