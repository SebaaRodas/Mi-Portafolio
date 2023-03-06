<template>
  <Header />
  
  <router-view/>
</template>
<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

body{
  background-image: linear-gradient(to right top, #1b3356, #1e2b48, #1e243b, #1c1d2e, #181722);
    min-height: 100vh;
    margin: 0 auto;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
