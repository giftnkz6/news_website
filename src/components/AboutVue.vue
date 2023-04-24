<template>
    <div class="about">
        <h1 id="about">ABOUT US</h1>
        <div class="container">
            <img src="../assets/output-onlinegiftools.gif" alt="">
            <!-- <img src="https://cdn.dribbble.com/users/3873964/screenshots/14523057/media/02a1ca5dc4e5faacfac8e754195b118c.gif" alt="online news"> -->
            <div class="about-text">
                <h2>OUR MISSION</h2>
                <p>Our goal is to provide the best and factual stories to our clients at a click of a button. Gone are the days where in order to stay up to date you needed to drive to a shop to buy a newspaper. Now we are in a digital world where we bring you, your favorite stories at the comfort of your home.
                    We have been operating since 2020 and we are continously growing each year. We currently have 200 employees across South Africa and we are hoping to expand to other countries by 2024.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "AboutVue"
    }
</script>

<style scoped>
    .about-text{
        margin-bottom: 4rem;
    }
    .container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 2rem;
    }
    h1{
        color: #000000;
        /* margin-bottom: 7rem; */
        
    }
    p{
        box-shadow: 0 0 10px skyblue;
        margin-left: 4rem;
    }
    h2{
        margin-top: 8rem;
        color: #289DFF;
        margin-bottom: 4rem;
    }
    img{
        width: 35rem;
    }
</style>