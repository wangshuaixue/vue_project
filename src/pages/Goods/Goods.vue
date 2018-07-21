<template>
  <div>
    <GoodsHeader/>
    <GoodSwiper/>
    <GoodsRecommend/>
  </div>
</template>
<script>
  import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader.vue'
  import GoodSwiper from '../../components/Goods/GoodSwiper/GoodSwiper.vue'
  import GoodsRecommend from '../../components/Goods/GoodsRecommend/GoodsRecommend.vue'

  export default {  //配置对象
    components:{
      GoodsHeader,
      GoodSwiper,
      GoodsRecommend
    }
  }
</script>
<style></style>
