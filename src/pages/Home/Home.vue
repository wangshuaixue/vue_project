<template>
  <div >
    <HeaderTop/>
    <HomeSwiper/>
    <Produce/>
    <NewProduce/>

  </div>
</template>
<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import HomeSwiper from '../../components/HomeSwiper/HomeSwiper.vue'
  import Produce from '../../components/Produce/Produce.vue'
  import NewProduce from '../../components/NewProduce/NewProduce.vue'
  export default {  //配置对象

    components:{
      HeaderTop,
      HomeSwiper,
      Produce,
      NewProduce
    }
  }
</script>
<style lang="less">

</style>
