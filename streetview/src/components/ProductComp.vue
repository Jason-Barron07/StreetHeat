<template>
    <div class="container">
      <div class="row">
        <div v-for="product in products" :key="product.prodID" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <!-- Display products that don't have "Combo" in prodCategory -->
          <div v-if="product.prodCatergory !== 'Combo'" class="card" style="width: 18rem;">
          <div class="card" style="width: 18rem;">
            <img :src="product.prodUrl" class="card-img-top" alt="">
            <div class="card-body">
              <p class="card-text">{{ product.prodName }}</p>
              <p class="card-text">R{{ product.prodPrice }}</p>
              <p class="card-text">{{ product.prodBrand }}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      product() {
        // Filter products based on the condition that prodCategory is not "Combo"
        return this.$store.state.products.product(product => product.prodCatergory !== 'Combo');
      }
    },
    mounted() {
      // Fetch all products from the store, including prodCategory information
      this.$store.dispatch('fetchProducts');
    }
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>