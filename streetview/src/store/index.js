import { createStore } from 'vuex'
import axios from 'axios'
// import sweet from 'sweetalert'
// import router from '@/router'
// import {useCookies} from 'vue3-cookies'
// const {cookies}= useCookies()
// import AuthenticateUser  from '@/services/AuthenticateUser'
const HeatURL = ('https://sheaturl.onrender.com/')
// https://sheaturl.onrender.com/
export default createStore({
  state: {
    users: null,
    user:null,
    products:null,
    product:null,
    // addProduct:null,
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
  setDeleteProducts(state, data) {
    state.products = data
  },
  setDeleteUsers(state, data) {
    state.users = data
  },
  setProduct(state, product){
    state.product = product
  },

  // setAddProduct(state,data){
  //   state.addProduct = data
  // },

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
    },
    async fetchUsers(context){
      try {
        const { data } = await axios.get(`${HeatURL}users`);
        context.commit("setUsers", data.results)
      }catch(e){
        context.commit("setMsg", "An error occurred")
        console.log("user not fetched");
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

  async DeleteProducts(context, prodID) {
    try{
      const response = await axios.delete(`${HeatURL}product/${prodID}`)
      context.commit("setDeleteProducts", response.data)
      location.reload()
    }catch(e){
      context.commit("setMsg", "An error occurred")
    }},

  async DeleteUsers(context, userID ) {
    try{
      const response = await axios.delete(`${HeatURL}user/${userID}`)
      context.commit("setDeleteUsers", response.data)
      location.reload()
    }catch(e){
      context.commit("setMsg", "An error occurred")
    }
  },
 


},
      // const { results, err, msg } = res.data;
      // if (results) {
      //   context.commit("setUsers", results);
      // } else {
      //   context.commit("setMsg", err || msg);
      // }
    // } catch (error) {
    //   // Handle error here, such as setting an error state in your store
    //   console.error("Error fetching users:", error);
    // }
},)


  // async prodDeleted(context, prodID) {
  //   try{
  //     const res = await axios.delete(`${HeatURL}product/${prodID}`)
  //     context.commit("setProducts", res.data)
  //     console.log("worked");
  //     location.reload()
  //   } catch(e) {
  //     console.log("did not work");
  //   }
  // },

  // async DeleteProducts(context, prodID) {
  //   try{
  //     const response = await axios.delete(`${HeatURL}product/${prodID}`)
  //     context.commit("setDeleteProducts", response.data)
  //   }catch(e){
  //     context.commit("setMsg", "An error occurred")
  //   }
  // },
 
  // async addProduct({ commit }, productData) {
  //   try {
  //     const response = await axios.post(`${HeatURL}products`, productData);
  //     // Handle success, e.g., commit the mutation or take any other actions
  //     commit('setAddProduct', response.data);
  //     // Reload your data or take other necessary actions
  //     location.reload();
  //   } catch (error) {
  //     // Handle the error here, e.g., display an error message
  //     console.error('An error occurred:', error);
  //   }
  // },


