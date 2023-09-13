<template>
    <div>
        
        <div>
              <div class="container" v-if="product">
                <div class="card mb-4 mt-3"  style="width: 30rem; border:none;">
                    <div class="row g-0">
                      <div class="col-md-8">
                        <img :src="product.prodUrl" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-4">
                        <div class="card-body">
                          <h5 class="card-text">{{product.prodName}}</h5>
                          <p class="card-text">R{{product.prodPrice}}</p>
                          <p class="card-text">{{product.prodBrand}}</p>
                          <button class="btn text-white">
                            Add to Cart
                          </button>
                        </div>
                    </div>
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

