<template>
    <div>
        <div>
              <div class="container" v-if="product">
                  <div class="row" style="margin-top:3rem; display:flex; justify-content:center; align-items:center;">
                        <div class="card col-4 col-md-6"  style="width: 30rem; border:none;">
                        <img :src="product.prodUrl" class="img-fluid rounded-start" alt="...">
                      </div>
                      
                        <div class="card-body col-8 col-md-6">
                          <h5 class="card-text" style="width:100%; margin-top:4rem">{{product.prodName}}</h5>
                          <p class="card-text">R{{product.prodPrice}}</p>
                          <p class="card-text">{{product.prodBrand}}</p>
                          <button class="btn text-white">
                            Add to Cart
                          </button>
                        </div>

            </div>
        </div>
        <div v-else>
          <SpinnerCompVue/>
        </div>

        </div>
        
    </div>
  </template>
  
  <script>
import SpinnerCompVue from '@/components/SpinnerComp.vue';
  
  
  
  export default {
    components:{
        SpinnerCompVue
    },
  computed: {
    product() {

      return this.$store.state.product;
    },
  },
  mounted(){
      
    this.$store.dispatch('fetchProduct', this.$route.params.prodID)

  },
};
  </script>
  
 <style scoped>


 .btn{
    background-color:#620A15;
    margin-left:30px;
  }

  .card-text{
    font-size:30px;
   
  }
  .container{
    padding-left: 28rem;
  }
 

 </style>

