<template>
  <footer class="footer_bar">
    <span class="guide_item " :class="{on:'/home'===$route.path}" @click="goto('/home')">
      <span class="item_icon home" ></span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:'/goods'===$route.path}" @click="goto('/goods')">
      <span class="item_icon goods" ></span>
      <span>识物</span>
    </span>
    <span class="guide_item" :class="{on:'/classify'===$route.path}" @click="goto('/classify')">
      <span class="item_icon classify" ></span>
      <span>分类</span>
    </span>
    <span class="guide_item" :class="{on:'/cart'===$route.path}" @click="goto('/cart')">
      <span class="item_icon cart"></span>
      <span>购物车</span>
    </span>
    <span class="guide_item" :class="{on:'/personal'===$route.path}" @click="goto('/personal')">
      <span class="item_icon personal"></span>
      <span>个人</span>
    </span>
  </footer>
</template>
<script>
  export default {  //配置对象

    data(){
      return{

      }
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }

  }
</script>
<style lang="less">
  .footer_bar{

  }
</style>
