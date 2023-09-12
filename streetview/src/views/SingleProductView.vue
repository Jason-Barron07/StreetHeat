<template>
    <div>
        <br>
        <br>
        <div>
            <body>
                <div class="container" v-if="product">
                  <div class="left-side">
                    <img :src="product.prodUrl" class="left-side" alt="" style="height: 28rem; width:18rem" />
                  </div>
                  <div class="right-side">
                    <p id="perfume">PAINTINGS</p>
                    <h1 id="header">{{ product.prodName }}</h1>
                    <p id="description">A poetic expression, where the canvas breathes with its own life.Layers of texture create a tactile feast for the eyes, inviting closer inspection</p>
                    <div class="price">
                      <h1 id="number-discount">R{{ product.prodPrice }}</h1>
                      <p id="number-full">$169.99</p>
                    </div>
                    <button class="cart-btn">
                      <p id="btn-text">Add to Cart</p>
                    </button>          
                  </div>
                </div>
                <div v-else>
                    <h1>Loading...</h1>
                </div>
            </body>
        </div>
        
    </div>
  </template>
  
  <script>
  
  
  export default {
  computed: {
    product() {

      return this.$store.state.product;
    },
  },
  mounted(){
      
    this.$store.dispatch('fetchProduct', this.$route.params.prodID)

  },
  components:{
   
   }
};
  </script>
  
 <style scoped>
 body {
    background-color: hsl(30, 38%, 92%);
    font-family: 'Montserrat', sans-serif;
}
  
.container {
   
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 600px;
    height: 450px;
    background-color: white;
    border-radius: 10px;
}

.left-side {
    background-image: url(https://i.ibb.co/xzq5YWH/image-product-desktop.jpg);
    background-size: cover;
    background-position: center;
  border-radius: 10px 0px 0px 10px;
}

.right-side {
    margin: 20px 32px 32px 32px;
}

#perfume {
    font-size: 12px;
    letter-spacing: 5px;
    color: hsl(228, 12%, 48%);
}

#header {
    font-family: 'Fraunces', serif;
    line-height: 1;
    color: hsl(212, 21%, 14%);
    margin-bottom: 25px;
}

#description {
    font-size: 14px;
    color: hsl(228, 12%, 48%);
    line-height: 1.5;
    margin-bottom: 5px;
}


#number-discount, #number-full {
    display: inline-block;
    vertical-align: middle;
}

#number-discount {
    color: hsl(158, 36%, 37%);
    font-family: 'Fraunces', serif;
    margin-right: 10px;
}

#number-full {
    font-size: 14px;
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
}

.cart-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: hsl(158, 36%, 37%);
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    transition: background-color 0.2s;
    margin-top: 6px
}

.cart-btn:hover {
    background-color: hsl(156, 42%, 18%);
    cursor: pointer;
}

.cart-btn > svg {
    margin-left: -8px;
}

@media only screen and (max-width: 767px) {
    .container {
      grid-template-columns: 1fr;
      width: 345px;
      height: 610px;
    }

    .left-side {
        background-image: url(https://i.ibb.co/Dpz1GXR/image-product-mobile.jpg);
        height: 240px;
        border-radius: 10px 10px 0 0;
    }

    #perfume {
        margin-top: 5px;
        margin-bottom: -10px;
    }

    #description {
        margin-top: -8px;
        margin-bottom: -1px;
    }

    .price {
        margin-bottom: -8px;
    }

    .cart-btn {
        height: 48px;
    }
  }
 </style>