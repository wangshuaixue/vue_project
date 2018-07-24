<template>
  <div class="goodscon-wrap">
    <!--头部-->
    <GoodsHeader name="top"/>
    <!--轮播-->
    <GoodSwiper/>
    <!--买手的推荐列表-->
    <GoodsRecommend/>
    <!--为你推荐列表-->
    <GoodsRecom/>
    <!--十点一刻-->
    <GoodsCarve/>
    <!--严选甄品-->
    <GoodsChoose/>
    <!--严选Look-->
    <GoodLook/>
    <!--更多精彩好物-->
    <GoodFindMore/>

    <!--回顶部-->
    <a class="goTop" href="#top"></a>

  </div>
</template>
<script>
  import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader.vue'
  import GoodSwiper from '../../components/Goods/GoodSwiper/GoodSwiper.vue'
  import GoodsRecommend from '../../components/Goods/GoodsRecommend/GoodsRecommend.vue'
  import GoodsRecom from '../../components/Goods/GoodsRecom/GoodsRecom.vue'
  import GoodsCarve from '../../components/Goods/GoodsCarve/GoodsCarve.vue'
  import GoodsChoose from '../../components/Goods/GoodsChoose/GoodsChoose.vue'
  import GoodLook from '../../components/Goods/GoodLook/GoodLook.vue'
  import GoodFindMore from '../../components/Goods/GoodFindMore/GoodFindMore.vue'


  export default {  //配置对象
    components:{
      GoodsHeader,
      GoodSwiper,
      GoodsRecommend,
      GoodsRecom,
      GoodsCarve,
      GoodsChoose,
      GoodLook,
      GoodFindMore
    }
  }
</script>
<style lang="less">
  @import "../../common/less/mixins";
  .goodscon-wrap{
    background-color: #eeeeee;
    .goTop{
      background-image: url('./img/top.png');
      background-size: 100% 100%;
      width:82/@rem;
      height:82/@rem;
      position: fixed;
      bottom: 120/@rem;
      right:30/@rem;
      z-index: 20;
    }
  }
</style>
