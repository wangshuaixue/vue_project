<template>
  <div>
    <div class="banner">
      <div class="banner-wrap">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <a href="/" class="swiper-slide slide-item">
              <img src="./img/01.jpg" alt="">
              <div class="innerCon">
                <div class="sub-title">—— 严选推荐 ——</div>
                <div class="title">夏日小仙女养成记</div>
                <div class="desc"> 页面内商品每满179减20</div>
              </div>
            </a>
            <a href="/" class="swiper-slide slide-item">
              <img src="./img/02.jpg" alt="">
              <div class="innerCon">
                <div class="sub-title">—— 严选推荐 ——</div>
                <div class="title">今天一起做“大儿童”</div>
                <div class="desc"> 页面内商品每满999减10</div>
              </div>
            </a>
            <a href="/" class="swiper-slide slide-item">
              <img src="./img/01.jpg" alt="">
              <div class="innerCon">
                <div class="sub-title">—— 严选推荐 ——</div>
                <div class="title">夏日小仙女养成记</div>
                <div class="desc"> 页面内商品每满179减20</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted(){
        this.$nextTick(function(){
          new Swiper('.swiper-container', {
            slidesPerView: 'auto',  //占满一页
            loop: true,   // 可以循环轮播
          })
        })
    }
  }
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .banner{
    background-color:#fff;
    margin-top: 88/@rem;
    .banner-wrap{
      padding:24/@rem 0;
      width:690/@rem;
      margin:auto;
     .swiper-wrapper{
       display: flex;
       .slide-item{
         flex-shrink: 0;
         padding: 0 10/@rem;
         display: inline-block;
         position: relative;
         img{
           border-radius: 8/@rem;
           width:100%;
           display: block;
           height:385/@rem;
         }
         .innerCon{
           position: absolute;
           top:0;
           left:0;
           right:0;
           bottom: 0;
           margin:auto ;
           width:466/@rem;
           height:198/@rem;
           background-color: rgba(255,255,255,0.9);
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           .sub-title{
             font-size: 20/@rem;
             line-height: 30/@rem;
             color: #7f7f7f;
             padding:0 8/@rem;
           }
           .title{
             font-weight: 700;
             margin-top: 16/@rem;
             color: #333;
             line-height: 48/@rem;
             font-size: 32/@rem;
           }
           .desc{
             margin-top: 4/@rem;
             color: #333;
             line-height: 36/@rem;
             font-size: 24/@rem;
           }


         }

       }
     }
    }
  }

</style>
