<template>
  <div id="app">
    <NavBar/>
    <b-container class = "mt-5">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import NavBar from "./components/partials/navbar.vue"
export default {
  name: 'App',
  components:{
    NavBar
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
  margin-top: 20px;
}
</style>
