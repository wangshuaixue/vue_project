<template>
  <footer class="footer_bar">
    <span class="guide_item " :class="{on:'/home'===$route.path}" @click="goto('/home')">
      <span class="item_icon home" :class="{on:'/home'===$route.path}" ></span>
      <span class="text">首页</span>
    </span>
    <span class="guide_item" :class="{on:'/goods'===$route.path}" @click="goto('/goods')">
      <span class="item_icon goods" :class="{on:'/goods'===$route.path}"></span>
      <span class="text">识物</span>
    </span>
    <span class="guide_item" :class="{on:'/classify'===$route.path}" @click="goto('/classify')">
      <span class="item_icon classify" :class="{on:'/classify'===$route.path}"></span>
      <span class="text">分类</span>
    </span>
    <span class="guide_item shop" :class="{on:'/cart'===$route.path}" @click="goto('/cart')">
      <span class="item_icon cart" :class="{on:'/cart'===$route.path}"></span>
      <span class="text">购物车</span>
    </span>
    <span class="guide_item" :class="{on:'/personal'===$route.path}" @click="goto('/personal')">
      <span class="item_icon personal" :class="{on:'/personal'===$route.path}"></span>
      <span class="text">个人</span>
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
  @import "../../common/less/mixins";
  .footer_bar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 5;
    left:0;
    bottom: 0;
    height:98/@rem;
    width:750/@rem;
    background-color: #fafafa;
    border-top:1px solid #d9d9d9;
    .guide_item{
      position: relative;
      text-align: center;
      display: block;
      width: 48/@rem;
      &.on{
        .text{
          color: #DA989B
        }
      }
      &.shop{
        width:72/@rem;
      }
      .item_icon{
        display: inline-block;
        background-image: url('./img/footer.png');
        background-repeat: no-repeat;
        background-size: 40/@rem 490/@rem;
        width:40/@rem;
        height:40/@rem;
        vertical-align: middle;
        &.home{
          background-position: 0 -250/@rem;
          &.on{
            background-position :0 -200/@rem;
          }
        }
        &.goods{
          background-position :0 -350/@rem;
          &.on{
            background-position :0 -300/@rem;
          }
        }
        &.classify{
          background-position :0 -150/@rem;
          &.on{
            background-position :0 -100/@rem;
          }
        }
        &.cart{
          background-position :0 -50/@rem;
          &.on{
            background-position :0 0;
          }
        }
        &.personal{
          background-position :0 -450/@rem;
          &.on{
            background-position :0 -400/@rem;
          }
        }

      }
      .text{
        font-size: 24/@rem;
        text-align: center;
        display: block;
        color: #666;
        margin-top: 7/@rem;
        line-height: 1;
      }
    }
  }
</style>
