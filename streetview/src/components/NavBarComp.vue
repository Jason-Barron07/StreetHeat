<template>
    <div class="navbarComp">
     <h2 class="navText">STREET HEAT</h2>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Home <i class="bi bi-house-door-fill"></i></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">About <i class="bi bi-info-circle-fill"></i></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/products">Our collection <i class="bi bi-collection-fill"></i></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact Us <i class="bi bi-telephone-fill"></i></router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/admin" v-show="isAdmin">Admin<i class="bi bi-file-earmark-text-fill"></i></router-link>
                  </li>
                </ul>
              </div> 
              <div>
             <router-link to="/cart"> <i class="bi bi-cart-fill"></i></router-link></div>
            </div>
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item  " >
                <router-link class="nav-link" to="/login">Login</router-link>
              </li>
    
              <li class="nav-item" >
                <router-link class="nav-link" id="color" to="/register">Register</router-link>
                </li>

                <li class="nav-item">
                  <router-link class="nav-link" style="margin-left: 2px;" to="/login"
                     @click="logout">Logout</router-link
                  >
                </li>
              
            </ul>
          </nav>
    </div>
</template>

<script>

import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()

    export default {
      
      computed: {
          user() {
            return this.$store.state.user ||
            cookies.get('GrantedAccess')
          },
          result() {
          return this.user?.result;
        },
        isAdmin() {
          return this.result?.userRole?.toLowerCase() === "admin"
        },
        isUser() {
          return this.result?.userRole?.toLowerCase() === "user"
        },
        },
      methods:{
        logout(){
          this.$store.dispatch('logout')
        }
      }

    }
</script>

<style scoped>

.navText{
  color:#fff;
  padding-left:20px;
  font-size:60px;
}

.navbar .nav-link{
  color:#fff;
  font-size:25px
}


.navbarComp{
  background-color:#620A15;
}

i{
  color:#fff;
  font-size: 20px;
}

.pre-search-input {
  visibility: visible;
  width: 100%;
  background: #f5f5f5;
  color: inherit;
  padding: 8px 48px;
  cursor: text;
}
.headline-5 {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
}

</style>