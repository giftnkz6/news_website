<template>
  <div class="home">
    <h1>GET THE TRENDING ARTICLES</h1>
    <!-- <img src="https://i.postimg.cc/SQ7RvpW7/Screenshot-5-removebg-preview-1.png" alt="humans illustration"> -->
    <img src="https://i.postimg.cc/YSGHFTNW/Screenshot-6-removebg-preview.png" alt="">
  </div>
  <!-- <div class="deco"></div> -->

  <button class="btn btn-info">VIEW ARTICLES</button>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  .home{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

  }
  h1{
    color: black;
    width: 30rem;
    font-size: 5rem;
    margin-left: 3rem;
  }
  img{
    width: 20rem;
    /* margin-top: 3rem; */
  }
  button{
    /* background-color: blue; */
    color: white;
    width: 10rem;
    height: 4rem;
    margin-top: 8rem;
  }

  .deco{
    /* position: absolute; */
    width: 300px;
    height: 300px;
    background-color: blue;
  }
</style>