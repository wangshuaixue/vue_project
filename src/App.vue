<template>
  <div id="app">
    <!--保证切换路由的时候不会去掉之前的路由-->
    <keep-alive>
      <router-view/>
    </keep-alive>

    <FooterBar v-show="$route.meta.isShow"/>

  </div>
</template>

<script>
  import FooterBar  from './components/FooterBar/FooterBar.vue'
export default {

    components:{
      FooterBar
    }
}
</script>

<style lang="less">
  body{
    background-color: #fff;
  }
</style>
