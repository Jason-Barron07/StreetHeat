<template>
  <div> <form class="d-flex p-5 justify-content-center" role="search" style="width:30%">
    <input class="form-control " type="search" placeholder="Search" aria-label="Search ">
    <button class="btn btn-outline" type="button"><i class="bi bi-search text-white"></i></button>
  </form></div>
    <div class="container justify-content-center align-items-center">
      <div class="row" v-if="products">
        <div v-for="product in products" :key="product.prodID" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
          <div class="card mt-5 " style="width: 18rem; border:none;" >
              <img :src="product.prodUrl" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">{{product.prodName}}</p>
                <p class="card-text">R{{product.prodPrice}}</p>
                <p class="card-text">{{product.prodBrand}}</p>
                <div @click="addToCart(product)" class="btn text-white ">Add to Cart</div>
                <router-link :to="{ name: 'product', params: { prodID: product.prodID } }"
                ><button class="btn text-white">
                  View More
                </button></router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="row">
          <SpinnerCompVue/>
        </div>
      </div>
</template>

<script>
import SpinnerCompVue from '../components/SpinnerComp.vue'
  

  export default {

    data() {
    return {
    product: [
       this.$store.dispatch('fetchProducts')
      ],
      cart: [],
    };
  },

        computed:{
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch('fetchProducts')
        },
        components:{
            SpinnerCompVue
        },

        methods:{
          addToCart(product) {
        const data = JSON.parse(localStorage.getItem('cart')) || []
        const newData = {key: product}
        data.push(newData)
        localStorage.setItem('cart', JSON.stringify(data))
    },

  },
  }
          
    
</script>

<style scoped>

    .container{
        display:flex
    }

    .btn{
      background-color:#620A15;
      margin-left:30px;
    }

    .card-text{
      font-size: 30px;
    }

    .card:hover{
      transform: scale(1.1); 
      cursor: pointer; 
      transition: transform 0.3s ease;
    }



</style>