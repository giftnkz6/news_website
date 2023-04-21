<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="container">
    <div v-for="(tesla, index) in teslas" :key="index">
      <div class="card" style="width: 18rem;">
        <img :src="tesla.urlToImage" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ tesla.title }}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "About",
  computed: {
    teslas: function () {
      return this.$store.state.articles;
    }

  },
  mounted() {
    this.$store.dispatch("getArticles")
  }
}
</script>

<style>
  .card{
    background-color: lightblue;
    margin-top: 2rem;
  }
  img{
    width: 18rem;
  }
  .container{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
  }
</style>
