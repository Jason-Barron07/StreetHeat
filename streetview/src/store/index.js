import { createStore } from 'vuex'
import axios from 'axios'
// import sweet from 'sweetalert'
// import router from '@/router'
// import {useCookies} from 'vue3-cookies'
// const {cookies}= useCookies()
// import AuthenticateUser  from '@/services/AuthenticateUser'
const HeatURL = ('https://sheaturl.onrender.com/')

export default createStore({
  state: {
    users: null,
    user:null,
    products:null,
    product:null,
    spinner:false,
    token:null,
    msg:null
  },
  getters: {

  },
  mutations: {
    setUsers(state, users){
      state.users = users
  },
  setUser(state,user){
    state.user = user
  },
  setProducts(state, products){
    state.products = products
  },
  setProduct(state, product){
    state.product = product
  },
  setDeleteProducts(state, data) {
    state.products = data
  },
  setSpinner(state , value){
    state.spinner = value
  },
  setToken(state, token){
    state.token = token
  },
  setMsg(state, msg){
    state.msg = msg
  }
  },
  actions: {
    async fetchProducts(context){
      try{
        const {data} = await axios.get(`${HeatURL}products`)
        context.commit("setProducts", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
      }
    }
  },

  async fetchProduct(context, prodID) {
    try{
      const {data} = await axios.get(`${HeatURL}product/${prodID}`)
      context.commit("setProduct", data.results[0])
      console.log(data.results);
    }catch(e){
      context.commit("setMsg", "An error occurred")
    }
  },
  async fetchUsers(context) {
    try{
      const {data} = await axios.get(`${HeatURL}users`)
      context.commit("setUsers", data.results)
    }catch(e){
      context.commit("setMsg", "An error occurred")
    }
  },

  async DeleteProducts(context, prodID ) {
    try{
      const response = await axios.delete(`${HeatURL}products/${prodID}`)
      context.commit("setDelProducts", response)
      location.reload()
    }catch(e){
      context.commit("setMsg", "An error occurred")
    }
  },
 


  modules: {
  }
})
