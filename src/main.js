
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './mock/mockServer.js'
import VueLazyLoad from 'vue-lazyload'

//引用插件
Vue.use(VueLazyLoad)


new Vue({
  el: '#app',
  router,
  render:h=>h(App), //渲染页面入口
  store
})
