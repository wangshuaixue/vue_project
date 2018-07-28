<template>
  <div class="carve-wrap">
    <div class="tencarve">
      <div class="head-title">十点一刻</div>
      <div class="topic-con">
        <div class="swiper-container1">
          <ul class="swiper-wrapper">
            <a href="/" class="swiper-slide common-item" v-for="(tenfifteen,index) in tenfifteens" :key="index">
            <div class="titled">
              <span class="today">-今日话题-</span>
            </div>
            <div class="item-title">{{tenfifteen.title}}</div>
            <div class="desc">{{tenfifteen.desc}}</div>
            <div class="text-info" >
              <div class="text-inner">
                <div class="as">
                  <div class="avatar" v-for="(pics,index) in tenfifteen.participantAvatar" :key="index">
                    <!--<img src="./img/01.jpg" alt="">-->
                    <img :src="pics ? pics : './img/01.jpg'" alt="">
                  </div>
                </div>
                <div class="dot">
                  <span class="circle"></span>
                  <span class="circle"></span>
                  <span class="circle"></span>
                </div>
                <div class="peo">{{tenfifteen.participantNum}}人参与话题</div>
              </div>
            </div>
            </a>

            <a href="" class="swiper-slide common-item more">
              <div class="inner">
                <div class="all">查看全部话题</div>
                <div class="allm"><img src="./img/right.png" alt=""></div>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default {

    mounted(){
      this.$store.dispatch('.getTenfifteens',()=>{
        this.$nextTick(function () {
          new Swiper('.swiper-container1', {
            slidesPerView: 'auto',  //占满一页
//            loop: true,   // 可以循环轮播
          })
        })
      })

    },

    computed:{
      ...mapState(['tenfifteens'])
    }

  }

</script>
<style lang='less'>
  @import "../../../common/less/mixins";
  .carve-wrap{
    width:690/@rem;
    height: 531/@rem;
    margin-bottom: 20/@rem;
    padding: 0 30/@rem 40/@rem 30/@rem;
    background-color: #fff;
    .tencarve{
      .head-title{
        font-size: 32/@rem;
        height:120/@rem;
        line-height: 120/@rem;
        text-align: center;
      }
      .topic-con{
        height:411/@rem;
        overflow: hidden;
        .common-item{
          /*display: inline-block;*/
          width:500/@rem!important;
          height:294/@rem;
          padding:38/@rem 40/@rem 79/@rem 40/@rem;
          margin-right: 30/@rem;
          background-image: url('./img/bg.png');
          background-size: 100% 100%;
          &.more{
            display: block;
            width:500/@rem!important;
            height:294/@rem;
            position: relative;
            .inner{
              width:350/@rem;
              position: absolute;
              left:50%;
              top:50%;
              transform: translate(-50%,-50%);
              overflow: hidden;
              .all{
                float: left;
                font-size: 36/@rem;
                color: #666;
                /*<!--width:500/@rem;-->*/
              }
              .allm{
                display: inline-block;
                float: right;
                width:60/@rem;
                height: 60/@rem;
                img{
                  width: 100%;
                  height:100%;
                  vertical-align: middle;
                }
              }
            }
          }
          .titled{
            width:484/@rem ;
            height:30/@rem ;
            padding:0 8/@rem;
            margin-bottom: 40/@rem;
            text-align: center;
            .today{
              font-size: 24/@rem;
              display: inline-block;
              text-align: center;
              line-height: 24/@rem;
              color: #999;
            }
          }
          .item-title{
            text-align: center;
            font-weight: 700;
            font-size: 32/@rem;
            margin-bottom: 14/@rem;
            color: black;
            height:36/@rem;
          }
          .desc{
            height:42/@rem;
            width:500/@rem;
            font-size: 28/@rem;
            text-align: center;
          }
          .text-info{
            height:75/@rem;
            width:500/@rem;
            margin:60/@rem 40/@rem 0 40/@rem;
            .text-inner{
              height:48/@rem;
              display: flex;
              justify-content: center;
              .as{
                display: inline-block;
                margin-right: 16/@rem;
                .avatar{
                  display: inline-block;
                  width:48/@rem;
                  height:48/@rem;
                  background-color: #999;
                  img{
                    border-radius: 50%;
                    width:100%;
                    height:100%;
                  }

                }
              }
              .dot{
                background-color: #ccc;
                border-radius: 50%;
                height: 48/@rem;
                width:48/@rem;
                line-height: 48/@rem;
                display: flex;
                justify-content: center;
                align-items: center;
                .circle{
                    display: inline-block;
                    border-radius: 50%;
                    width: 6/@rem;
                    height: 6/@rem;
                    margin-right: 4/@rem;
                    background-color: #fff;
                  }
                }
              .peo{
                margin-left: 10/@rem;
                line-height: 48/@rem;
                font-size: 24/@rem;
                color: #666;
              }
              }
            }
          }
        }
      }
    }

</style>
