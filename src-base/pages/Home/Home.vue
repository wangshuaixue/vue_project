<template>
  <div class="w1">
    <!--首页头部-->
    <HomeHeaderTop/>
    <!--首页轮播-->
    <HomeSwiper/>
    <!--品牌制造商直供-->
    <HomeProduce/>
    <!--首页新品-->
    <HomeNewProduce/>
    <!--人气推荐-->
    <HomeRecommend/>
    <!--限时抢购-->
    <HomeLimit/>
    <!--专题精选-->
    <HomeHandPick/>

    <!--居家好物等遍历卡片列表-->
    <HomeGoodsCart/>

  </div>
</template>
<script>
  import HomeHeaderTop from '../../components/HomeHeaderTop/HomeHeaderTop.vue'
  import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'
  import HomeProduce from '../../components/HomeProduce/HomeProduce.vue'
  import HomeNewProduce from '../../components/HomeNewProduce/HomeNewProduce.vue'
  import HomeRecommend from '../../components/HomeRecommend/HomeRecommend.vue'
  import HomeLimit from '../../components/HomeLimit/HomeLimit.vue'
  import HomeHandPick from '../../components/HomeHandPick/HomeHandPick.vue'
  import HomeGoodsCart from '../../components/HomeGoodsCart/HomeGoodsCart.vue'


  export default {  //配置对象

    components:{
      HomeHeaderTop,
      HomeSwiper,
      HomeProduce,
      HomeNewProduce,
      HomeRecommend,
      HomeLimit,
      HomeHandPick,
      HomeGoodsCart
    }
  }
</script>
<style lang="less">
  @import '../../common/less/mixins';
    .w1{
      height:6000/@rem;
    }
</style>
