<template>
    <div>
        <div class="container animate__animated animate__backInUp 1s">
            <div class="row">
              <form class="p-5" method="POST">
              <div>
                <label for="exampleFormControlInput1" class="form-label"> </label>
                <input name="firstname" type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name (required) " required oninvalid="this.setCustomValidity('Please enter your name')"
                oninput="this.setCustomValidity('')">
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
                <br>
                <div class="middle d-flex justify-content-center">
                  <button type="submit" class="btn btn-danger">Login</button>
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








</style>