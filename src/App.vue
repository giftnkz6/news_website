<template>
  <NavBar/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <FooterVue/>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import FooterVue from '@/components/FooterVue.vue';
  export default{
    name: "App",
    components:{
      NavBar,
      FooterVue
    }
  }
</script>

<style>
#app {
  font-family: 'Schibsted Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F1F6F9;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #289DFF;
}
</style>
