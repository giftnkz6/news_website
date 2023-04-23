<template>
    <div class="about">
        <h1 id="articles">Top Stories</h1>
        <form action="">
            <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" v-model="search" placeholder="Search">
            </div>
        </form>

        <div class="container">
            <div v-for="(tesla, index) in searchArticles" :key="index">
                <div class="card" style="width: 20rem;">
                <img :src="tesla.urlToImage" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ tesla.title }}</h5>
                    <p class="card-text">{{ tesla.description }}</p>
                    <a :href="tesla.url" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>
                <!-- <div class="wrapper">
                    <img :src="tesla.urlToImage" class="card-img-top" alt="...">
                    <div class="body">
                        <h5 class="card-title">{{ tesla.title }}</h5>
                        <p class="card-text">{{ tesla.description }}</p>
                        <a :href="tesla.url" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div> -->

        </div>
    </div>
</div>
</template>
  
<script>
export default {
    name: "ArticlesVue",
    data() {
        return {
            search: "",
        }
    },
    computed: {
        teslas: function () {
            return this.$store.state.articles;
        },

        searchArticles() {
            let filtering = this.teslas
            if (this.search.trim().length > 0) {
                filtering = filtering.filter((tesla) => tesla.title.toLowerCase().includes(this.search))
            }
            return filtering
        },
    },


    mounted() {
        this.$store.dispatch("getArticles")
    }
}
</script>
  
<style scoped>
.card {
    /* background-color: lightblue; */
    margin-top: 2rem;
    box-shadow: 2px 3px 3px grey;
    height: 35rem;
}

.wrapper {
    width: 30rem;
    display: flex;
    margin-bottom: 2rem;
    height: 10rem;
    box-shadow: 3px 2px 3px 3px grey;
}

/* .card:hover{
        color: white;
    } */

h1 {
    color: #289DFF;
}

/* img {
    width: 9rem;
    height: 10rem;
} */

/* img {
    object-fit: cover;
    aspect-ratio: 3/4;
    filter: grayscale(100%);


  }
  img:hover {
    transform: scale(1.1);
    transition: transform .7s;
} */
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
}

form {
    width: 30rem;
    float: right;
}

input {
    width: 20rem;
}

a {
    margin-top: 2rem;
}
</style>
  