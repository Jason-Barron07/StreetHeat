<template>
    <div>
        <h1>Burn Cash, Not Style</h1>
        <div class="main-container">
        <div class="img-container"> 
       <img src="https://pluriverse.blackboxstore.com/wp-content/uploads/2022/12/Senza-titolo-1-3.jpg" alt="" class="img">
        </div>
    </div>
       <div>  
       </div>

        <div>
        <h1>Taste the Products</h1>
        </div>

        <div class="container">
           <div class="row justify-content-center gap-3" >
            <div class="col-sm-auto">
                <div class="card" style="width: 18rem;">
                    <img src="https://i.postimg.cc/MZ5vTj2M/NBA-raglan-fitted-graphic-t-shirt.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Bulls CropTop</h5>
                      <p class="card-text">R400</p>
                    </div>
                  </div>
                  
            </div>
            <div class="col-sm-auto" >
                <div class="card" style="width: 18rem;">
                    <img src="https://i.postimg.cc/t4TrfPyh/Oversized-Nba-T-Shirt.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Brooklyn Heat</h5>
                        <p class="card-text">R350</p>
                    </div>
                  </div>
            </div>
            <div class="col-sm-auto">
                <div class="card" style="width: 18rem;">
                    <img src="https://i.postimg.cc/2SVwTDFG/Lcn-Nba-Cropped-Graphic-Tee.jpg" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">Lakers CropTop</h5>
                        <p class="card-text">R600</p>
                    </div>
                  </div>
            </div>
        </div>
    </div>

    <h1>Burn Cash, Not Style</h1>

    <div class="main-container">
    <div class="img-container"> 
   <img src="https://assets.vogue.com/photos/62bb178d03ab14729d2cd64d/master/w_2560%2Cc_limit/00-story%2520(2).jpg" alt="" class="img">
    </div>
</div>  
   <div>  
    <h1>Shop with Us</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col-sm-auto">
          <div class="card">
            <img src="https://i.postimg.cc/qMgx1f3f/poster-3.webp" class="card-img-top" alt="..."  style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">We got what you need and want</h5>
              <p class="card-text">Browse our store for to find your clothing niche</p>
            </div>
          </div>
        </div>
        <div class="col-sm-auto">
          <div class="card">
            <img src="https://i.postimg.cc/KvrxpVSN/poster2.webp" class="card-img-top" alt="..."  style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Street wear never looked this good</h5>
              <p class="card-text">Find yourself top-shelf style with bottom-shelf prices</p>
            </div>
          </div>
        </div>
        </div>
        <div class="d-flex justify-content-center p-4">
            <button class="btn btn-primary moreBtn">
              <router-link to="/products" class="prodLink">See our collection</router-link>
          </button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.img{
    width:100%;
    height: 600px;
    border:10px solid black;
    
}

.main-container{
    border: 10px solid #fff;
}

.img-container{
    border: 10px solid #620A15;
}


h1{
    padding-top:2rem;
    text-align: center;
    font-size: 100px;
    font-weight: 700;
}

.col{
    border:1px solid black;
}

.moreBtn{
    padding:1rem;
    background-color: #620A15;
}

.prodLink{
    text-decoration: none;
    color:#fff;
    font-size:30px
}

.moreBtn:hover{
    transform: scale(1.1); 
  cursor: pointer; 
  transition: transform 0.3s ease;
  background-color:#620A15 ;
  color:#fff
}

.card-title{
    font-size:40px
}


.card-text{
    font-size:30px
}

</style>