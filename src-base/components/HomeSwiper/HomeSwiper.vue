<template>
  <div class="swiper-con">
    <div class="swiper-container" v-if="focusList.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
          <img :src="focus.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="swiper-slide" v-else></div>
    <div class="end-container">
      <ul class="shop-row">
        <li class="item">
          <i class="arrow"></i>
          <span class="content">网易自营品牌</span>
        </li>
        <li class="item">
          <i class="arrow"></i>
          <span class="content">30天无忧退货</span>
        </li>
        <li class="item">
          <i class="arrow"></i>
          <span class="content">48小时快速退款</span>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {

    computed:{
      ...mapState(['focusList'])
    },
    mounted(){
      //数据成功之后再添加分页器的样式
      this.$store.dispatch('getSwiperImg')
    },
    watch:{  //监视vue状态里的值发生改变之后调用，因为vue里的数据自动是不会更新的
      focusList(){
        this.$nextTick(function () {
          new Swiper('.swiper-container', {
            pagination: { // 圆点指示器的容器div
              el: '.swiper-pagination'
            },
            loop: true, // 可以循环轮播
          })
        })
      }
    }
  }
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  .swiper-con{
    margin-top:148/@rem ;
    margin-bottom: 20/@rem;
    .swiper-slide{
      width: 750/@rem;
      height:400/@rem;
      img{
        width: 100%;
        height:100%;
      }
    }
    .end-container{
      background-color: #ffffff;
      .shop-row{
        height:72/@rem;
        display: flex;
        padding:0 30/@rem 0 30/@rem;
        align-items: center;
        justify-content: center;
        .item{
          flex:1;
          float: left;
          .arrow{
            background-image: url('./img/icon/arrow.png');
            width:32/@rem;
            height:32/@rem;
            display: inline-block;
            background-size: 100% 100%;
            vertical-align: middle;
          }
          .content{
            font-size: 24/@rem;
            color: #333;
            line-height: 32/@rem;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
    }
  }

</style>
