<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@mdo">Add</button>
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel1">Product Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addProd" class="d-flex flex-column gap-5">
            <input type="text" v-model="productInfo.prodID" placeholder="Product ID" name="" id="" required>
            <input type="text" v-model="productInfo.prodUrl" placeholder="Product Image" name="" id="" required>
            <input type="text" v-model="productInfo.prodName" placeholder="Product Name" name="" id="" required>
            <input type="number" v-model="productInfo.prodPrice" placeholder="Product Price" name="" id="" required>
            <input type="text" v-model="productInfo.prodCatergory" placeholder="Category" name="" id="" required>
            <input type="number" v-model="productInfo.prodQuan" placeholder="Quantity" name="" id="">
            <button type="submit" class="btn">Add Product</button>
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
    export default {
        data(){
    return{
        productInfo:{
        prodID: "",   
        prodName: "",
        prodPrice: "",
        prodQuan: "",
        prodCatergory: "",
        prodUrl: ""
      }
    }
  },
  methods:{
          addProd(){
            this.$store.dispatch('addProduct', this.productInfo)
          }
        }
    }
</script>
<style scoped>
.btn{
    background-color: #620A15;
    border-radius: 1px 0.5em;
    color: white;
}
</style>