<template>
  <div class="w" >
      <!--<a name="tops" id="topHs"></a>-->
      <!--首页头部-->
      <HomeHeaderTop  :getIndex="getIndex"/>
      <!--首页轮播-->
      <HomeSwiper v-if="index===null" name="top"/>
      <!--品牌制造商直供-->
      <HomeProduce v-if="index===null" />
      <!--首页新品-->
      <HomeNewProduce v-if="index===null" />
      <!--人气推荐-->
      <HomeRecommend v-if="index===null" />
      <!--限时抢购-->
      <HomeLimit v-if="index===null" />
      <!--专题精选-->
      <HomeHandPick v-if="index===null" />

      <!--选项卡-->
      <HomeList v-if="index!==null" :index="index"/>

      <!--居家好物等遍历卡片列表-->
      <div v-for="(good,index) in goodList" :key="index" v-if="index===null">
        <HomeGoodsCart :good="good"/>
      </div>

    <!--回顶部-->
    <a class="goTop" href="#top"></a>
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
  import HomeList from '../../components/HomeList/HomeList.vue'


  import {mapState} from 'vuex'
  export default {  //配置对象
    data(){
      return{
          index:null
      }
    },
    mounted(){
      this.$store.dispatch('getGoodList')

    },

    /*methods:{
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
    },*/
    methods:{
      getIndex(index){
        this.index=index
        console.log(this.index)
      }
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
      HomeGoodsCart,
      HomeList
    },
    watch:{

    }
  }
</script>
<style lang="less">
  @import '../../common/less/mixins';
    .w{
      background-color: #eeeeee;

      .goTop{
       /* display: block;*/
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
