import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import {useCookies} from 'vue3-cookies'
const {cookies} = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView,
    beforeEnter(){
      if(!cookies.get('GrantedAccess')){
        router.push({name:"login"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductsView.vue')
  },
  {
    path: '/product/:prodID',
    name: 'product',
    props: true,
    component: () => import( '../views/SingleProductView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/LoginView.vue'),
    afterEnter(){
      if(!cookies.delete('GrantedAccess')){
        router.push({name:"home"})
      }
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import( '../views/CartView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegistrationView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
