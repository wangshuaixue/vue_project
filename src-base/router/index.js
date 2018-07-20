import Vue from 'vue'
import Router from 'vue-router'
import Personal from '../pages/Personal/Personal.vue'
import Cart from '../pages/Cart/Cart.vue'
import Classify from '../pages/Classify/Classify.vue'
import Home from '../pages/Home/Home.vue'
import Goods from '../pages/Goods/Goods.vue'
import Interlayer from '../pages/Interlayer/Interlayer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personal',
      component: Personal,
      meta: {
        isShow: true
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        isShow: true
      }
    },
    {
      path: '/goods',
      component: Goods,
      meta: {
        isShow: true
      }
    },
    {
      path: '/classify',
      component: Classify,
      meta: {
        isShow: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        isShow: true
      }
    },
    {
      path:'/',
      redirect:'/interlayer'
    },
    {
      path:'/interlayer',
      component:Interlayer
    }
  ]
})
