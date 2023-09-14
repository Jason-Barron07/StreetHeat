<template>
<div class="body">
    <h1 class="text-center">Cart</h1>
    <table style=" border:none;">
                
        <tbody>
            <tr v-for="product in cart" :key="product.prodID" >
                <td class="text">{{product.prodID}}</td>
                <td><img :src="product.key.prodUrl" :alt="product.prodName" style="width: 10rem;"></td>
                <td class="text">{{product.key.prodName}}</td>
                <td class="text">R{{product.key.prodPrice}}</td>
                <td class="text">{{product.key.prodQuan}}</td> 
                <td class="text">R{{subtotal}}</td>
                <button
                type="button"
                class="btn btn-primary btn-lg "
                @click="navigateToCheckout">
                Checkout
              </button>
                <td><button class="btn btn-white" @click="removeFromCart(product)"><i class="bi bi-trash"></i></button></td>
            </tr>
        </tbody>
    </table>
</div>
  </template>
  methods: {
    
  },
  <script>
  import sweet from 'sweetalert';
  export default {
    computed: {
      cart() {
        const cart = JSON.parse(localStorage.getItem("cart"));
        return cart;
  
      },
      subtotal() {
        // Calculate the subtotal based on the cart items
        let total = 0;
        for (const product of this.cart) {
          total += parseFloat(product.key.prodPrice);
        }
        return "" + total.toFixed(2);
      },
    },
    checkout(){
      sweet({
        title:'Order complete',
        icon:'success',
        timer:1000,
      })
  
    },
    methods: {
      removeFromCart(product) {
        const index = this.cart.indexOf(product);
        if (index !== -1) {
          this.cart.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          window.location.reload();
  
        }
      },
      navigateToCheckout() {
      
      window.location.href = './checkout';
    },
    },
  };
  let CheckOutList = JSON.parse(localStorage.getItem("checkout"))
    ? JSON.parse(localStorage.getItem("checkout"))
    : [];

  console.log(CheckOutList);
  </script>

  <style scoped>
  *{
    font-size: 2rem;
  }
  table {
    border-collapse: collapse;
    width: 100%;
}
th, td {
    border: none;
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}


.body{
 height: 70vh;
}

</style>