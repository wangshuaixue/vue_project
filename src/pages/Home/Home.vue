<template>
  <div class="w" >
      <a name="tops" id="topHs"></a>
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
      <!--回顶部-->
      <a class="goTop" target="#topHs">
      </a>
      <!--居家好物等遍历卡片列表-->
      <div v-for="(good,index) in goodList" :key="index">
        <HomeGoodsCart  :good="good"/>
      </div>



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


  import {mapState} from 'vuex'
  export default {  //配置对象
    data(){
      return{

      }
    },
    methods:{
      gotoHeader(){
        let wrap=document.querySelector('.w')
        console.log(wrap)
        let topHeight=wrap.clientTop
        console.log(topHeight)
        if(topHeight!==0){
          wrap.style.top=0+'px'
          wrap.clientTop=topHeight
          console.log(clientTop)
        }

      }
    },
    mounted(){

      this.$store.dispatch('getGoodList')
    },
    computed:{
      ...mapState(['goodList'])
    },

    components:{
      HomeHeaderTop,
      HomeSwiper,
      HomeProduce,
      HomeNewProduce,
      HomeRecommend,
      HomeLimit,
      HomeHandPick,
      HomeGoodsCart
    },
    watch:{

    }
  }
</script>
<style lang="less">
  @import '../../common/less/mixins';
    .w{
      #topHs{
        display: inline-block;
      }
      .goTop{
        display: block;
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
