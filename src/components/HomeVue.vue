<template>
    <div id="home" class="home">
      <h1>GET THE TRENDING ARTICLES</h1>
      <img src="https://i.postimg.cc/YSGHFTNW/Screenshot-6-removebg-preview.png" alt="">
      <div class="deco"></div>
      <div class="deco1"></div>
    </div>
  
    <!-- <button class="btn btn-info">VIEW ARTICLES</button> -->
  </template>
  
  <script>

 

  
  export default {
    name: 'HomeVue',
  }
  </script>
  
  <style scoped>

    .home{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 6rem;
      margin-bottom: 16rem;
      
  
    }
    h1{
      color: #000000;
      width: 30rem;
      font-size: 5rem;
      margin-left: 3rem;
    }
    img{
      width: 20rem;
      margin-left: 8rem;
    }
    button{
      background-color: #289DFF;
      color: white;
      width: 10rem;
      height: 4rem;
      margin-top: 8rem;
      margin-bottom: 5rem;
    }
  
    .deco{
      position: absolute;
      width: 100px;
      height: 80px;
      background-color: #289DFF;
      margin-left: 36rem;
      border-radius: 40% 95% 80% / 80% 40% 15%;
    }
    .deco1{
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: #289DFF;
      margin-left: 70rem;
      margin-top: 9rem;
      border-radius: 60% 15% 80% / 80% 40% 15%;
    }
  </style>