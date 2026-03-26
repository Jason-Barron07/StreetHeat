<template>
    <div class="container justify-content-center align-items-center">
      <div class="row" v-if="products">
        <div v-for="product in products" :key="product.prodID" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
          <div class="card mt-5" style="width: 18rem;" >
              <img :src="product.prodUrl" class="card-img-top" alt="">
              <div class="card-body">
                <p class="card-text">{{product.prodName}}</p>
                <p class="card-text">R{{product.prodPrice}}</p>
                <p class="card-text">{{product.prodBrand}}</p>
                <div class="btn text-white">Add to cart</div>
                <div class="btn text-white">View</div>
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
import SpinnerCompVue from './SpinnerComp.vue'
  

  export default {
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
        }

    }
</script>

<style scoped>

    .container{
        display:flex
    }

    .btn{
      background-color:#620A15;
    }

    .card-text{
      font-size: 30px;
    }

</style>