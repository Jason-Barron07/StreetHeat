<template>
    <div class="body">
        <h1 class="reghead">Get in the HEAT</h1>
      <div class="container justify-content-center align-items-center vh-100">
        <div class="rows">
          <form class="lines" @submit.prevent="register">
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="name"
                  class="form-control rowF"
                  placeholder="First Name"
                  v-model="payload.firstName"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="surname"
                  class="form-control rowF"
                  placeholder="Last Name"
                  v-model="payload.lastName"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="email"
                  class="form-control rowF"
                  placeholder="Email"
                  v-model="payload.emailAdd"
                  required
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="password"
                  class="form-control rowF"
                  placeholder="Password"
                  minlength="4"
                  maxlength="12"
                  v-model="payload.userPass"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input
                  type="text"
                  class="form-control rowF"
                  placeholder="Role"
                  v-model="payload.userRole"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <span class="inline">
                <input 
                  type="text"
                  class="form-control rowF"
                  v-model="payload.userProfile"
                />
              </span>
            </div>
            <div class="form-control-wrapper">
              <div class="col">
                <button type="submit" class="btn ">
                  Submit
                  <span
                    v-show="spinner"
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
              <div class="object"></div>
            </div>
          </form>
        </div>
        <!-- <div v-else class="row">
          <SpinnerComp/>
        </div> -->
      </div>
    </div>
  </template>
  <script>
  import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();

  export default {
    data() {
      return {
        payload: {
          firstName: "",
          lastName: "",
          emailAdd: "",
          userPass: "",
          userRole: "",
          userProfile: "https://i.postimg.cc/3rZ0H0D8/profile-Image.png",
        },
      };
    },
    computed: {
      user() {
        return this.$store.state.user;
        //  || JSON.parse( cookies.get('GrantedUserAccess'))
      },
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.payload);
      },
    },
    beforeCreate() {
      this.$store.dispatch('fetchUsers')
    },
      mounted() {
      console.log(cookies.get("GrantedAccess"));
    },
    components:{
      // SpinnerComp
  }
  };
  </script>
  <style scoped>

  *{
    font-size:30px
  }
  .body{
    background-color:#620A15;
}
.reghead{
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

.rowF{
    margin:2rem;
    width: 50%;
}

.object{
    background-color:#D9D9D9;
    position: absolute;
    padding:4rem;
    border-radius: 50%;
}

  </style>