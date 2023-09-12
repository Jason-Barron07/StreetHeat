<template>
    <div>
        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"><i class="bi bi-clipboard-plus"></i></button>
       
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addUser" class="d-flex flex-column gap-5">
            <input type="text" v-model="userInfo.userID" placeholder="id" name="" id="">
            <input type="text" v-model="userInfo.firstName" placeholder="name" name="" id="">
            <input type="text" v-model="userInfo.lastName" placeholder="surname" name="" id="">
            <input type="text" v-model="userInfo.userAge" placeholder="age" name="" id="">
            <input type="text" v-model="userInfo.Gender" placeholder="role" name="" id="">
            <input type="text" v-model="userInfo.userRole" placeholder="email" name="" id="">
            <input type="text" v-model="userInfo.emailAdd" placeholder="password" name="" id="">
            <input type="text" v-model="userInfo.userProfile" placeholder="image" name="" id="">
            <button type="submit" class="btn">Add</button>
            userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass,userProfile
           </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>
<script>
// userID, firstName, lastName, userAge, gender, userRole, emailAdd, userPass,userProfile
    export default {
        data(){
            return{
                userInfo:{
                userID:"",
                firstName: "",
                lastName : "",
                userAge: "",
                gender: "",
                emailAdd: "",
                userPass: "", 
                userRole: "",
                userProfile:""

            }
    }
  },
  methods:{
           addUser(){
            this.$store.dispatch('addUser', this.userInfo)
            console.log(this.userInfo);
          }
        }
    }
</script>
<style scoped>

</style>
