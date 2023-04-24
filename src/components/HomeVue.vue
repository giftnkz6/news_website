<template>
    <div id="home" class="home">
      <h1>GET THE TRENDING ARTICLES</h1>
      <img src="https://i.postimg.cc/YSGHFTNW/Screenshot-6-removebg-preview.png" alt="">
      <div class="deco"></div>
      <!-- <div class="deco1"></div> -->
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
      width: 300px;
      height: 300px;
      background-color: #289DFF;
      margin-left: 15rem;
      /* margin-top: 3rem; */
      border-radius: 100% 67% 100% 60% / 190% 65% 40% 50%;
      opacity: 35%;
    }
    .deco1{
      position: absolute;
      width: 200px;
      height: 200px;
      background-color: #289DFF;
      margin-left: 50rem;
      margin-top: 9rem;
      border-radius: 60% 35% 80% 200%/ 80% 40% 15% 135%;
      opacity: 35%;
    }

    @media screen and (max-width: 970px){
      .home{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin-top: 6rem;
      margin-bottom: 16rem;
      margin: auto;
      
  
    }
    img{
      margin: auto;
    }

    h1{
      text-align: center;
    }

    }

    @media screen and (max-width: 550px){
      .home{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin-top: 6rem;
      margin-bottom: 16rem;
      margin: auto;
      
  
    }

    img{
      margin: auto;
    }

    h1{
      text-align: center;
      font-size: 2rem;
      width: 20rem;
    }

    .deco{
      display: none;
    }

    }

    @media screen and (max-width: 400px){
      .home{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin-top: 6rem;
      margin-bottom: 16rem;
      margin: auto;
      
  
    }

    img{
      width: 14rem;
      margin-left: 1rem;
      margin: auto;
    }

    h1{
      text-align: center;
      font-size: 2rem;
      width: 18rem;
      margin-left: 0rem;
    }

    .deco{
      display: none;
    }

    }
  </style>