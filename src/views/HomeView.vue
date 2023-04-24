<template>
  <div>
    <HomeVue/>
    <!-- <AboutVue/> -->
    <!-- <ArticlesVue/> -->
  </div>
</template>

<script>
 import HomeVue from '@/components/HomeVue.vue'
 import AboutVue from '@/components/AboutVue.vue'
 import ArticlesVue from '@/components/ArticlesVue.vue'
  export default{
    name: "HomeView",
    components:{
      HomeVue,
      AboutVue,
      ArticlesVue
    }
  }
</script>