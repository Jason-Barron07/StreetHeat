<template>
  <div class="body ">
    <h1 class="text-center text-white">Get in the HEAT</h1>
    <div class="container align-items-center justify-content-center">
      <div class="row">
        <form class="form" @submit.prevent="login">
          <div class="form-control-wrapper">
            <span class="inline">
              <input
                type="email"
                class="form-control rowF"
                placeholder="email"
                v-model="payload.emailAdd"
                required/>
            </span>
          </div>
          <div class="form-control-wrapper rowF">
            <span class="inline">
              <input
                type="password"
                class="form-control"
                placeholder="password"
                minlength="4"
                maxlength="12"
                v-model="payload.userPass"
              />
            </span>
          </div>
          <div class="form-control-wrapper">
            <div class="col">
              <button type="submit" class="btn btn-success">
                Log In
                <span
                  v-show="spinner"
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
          <div class="form-control-wrapper">
            <div class="row">
              <div class="col">
                <!-- <router-link class="d-flex justify-content-center text-decoration-none" to="/register" -->
                  <!-- >Don't have an account ? Click here to register</router-link -->
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  </template>
  <script>

  import { useCookies } from "vue3-cookies";
  const {cookies}  = useCookies();
  
  export default {
    components: {
    },
    data() {
      return {
        payload: {
          emailAdd: "",
          userPass: "",
        },
        message: null,
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
        //  || JSON.parse( cookies.get('GrantedUserAccess'))
      },
      spinner() {
        return this.$store.state.spinner;
      },
    },
    methods: {
      login() {
        this.$store.dispatch("login", this.payload);
      },
      logout() {
        this.$store.dispatch("logout", this.payload)
      },
    },
    beforeCreate() {
      this.$store.dispatch('fetchUsers')
    },
    mounted() {
    console.log(cookies.get("GrantedAccess"));
  }
  };
  </script>
  <style scoped>
  *{
    font-size:30px
  }
  .body{
    background-color:#620A15;
    height: 70vh;
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
    border:none
}

.btn:hover{
    background-color:#620A15;
    border: 2px solid #fff;
}

.rowF{
  margin:2rem;
  width: 100%;
}
  </style>
