<template>
    <div class="body">
        <h1 class="head-text">Contact Us</h1>
        <div class="container animate__animated animate__backInUp 1s">
            <div class="row">
              <form class="p-5" action="https://formspree.io/f/xdoronvn" method="POST">
              <div>
                <label for="exampleFormControlInput1" class="form-label"> </label>
                <input name="firstname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name (required)" required oninvalid="this.setCustomValidity('Please enter your name')"
                oninput="this.setCustomValidity('')">
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input name="secondname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Second Name">
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input name="surname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Surname (required)" required oninvalid="this.setCustomValidity('Please enter your surname')"
                oninput="this.setCustomValidity('')">
              </div>
              <div>
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input name="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address (required)" required  oninvalid="this.setCustomValidity('Please enter a valid email address')"
                oninput="this.setCustomValidity('')">
              </div>
             
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" placeholder="Type a message here..." rows="4"></textarea>
                <br>
                <div class="middle d-flex justify-content-center">
                  <button type="submit" class="btn btn-danger">Submit</button>
                </div>
              </form>
            </div>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

*{
    font-size:30px
  }
  .body{
    background-color:#620A15;
}
.head-text{
    color: white;
    display: flex;
    justify-content: center;
   
}

h1{
    font-size:100px;
}
.btn{
    margin-left: 2rem;
    background-color: #080808;
    color: #fff;
}

.btn:hover{
    background-color:#620A15;
    border: 2px solid #fff;
}

</style>