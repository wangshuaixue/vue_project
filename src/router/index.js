import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../pages/Personal/Personal.vue'
import Cart from '../pages/Cart/Cart.vue'
import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Goods from '../pages/Goods/Goods.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
