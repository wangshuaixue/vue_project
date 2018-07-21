<template>
  <div>
    <div class="recommend-con">
      <div class="recom-item">
        <div class="rec-title">为你推荐</div>
        <a href="/" class="item-wrap">
          <a href="/" class="mainItem" v-if="recommend.recommendBanner">
            <div class="pic-container">
              <img :src="recommend.recommendBanner.picUrl" alt="">
              <div class="bg-top">{{recommend.recommendBanner.nickname}}</div>
            </div>
            <div class="pic-info">
              <div class="pir-text-con">
                <div class="text">{{recommend.recommendBanner.title}}</div>
                <div class="price">{{recommend.recommendBanner.priceInfo}}元起</div>
              </div>
              <div class="pic-down">{{recommend.recommendBanner.subtitle}}</div>
            </div>

          </a>
          <a href="/" class="info-list" v-for="(recItem,index) in recommend.recommends" :key="index" v-if="recommend.recommends">
            <div class="left-info">
              <div class="actor">
                <div class="head-pic"><img :src="recItem.avatar" alt=""></div>
                <div class="name">{{recItem.nickname}}</div>
              </div>
              <div class="text-info">{{recItem.title}}</div>
              <div class="text-info2">{{recItem.subtitle}}</div>
            </div>
            <div class="right-img">
              <img :src="recItem.picUrl"alt="">
              <div class="bg-top">{{recItem.typeName}}</div>
            </div>
          </a>

        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['recommend'])
    },
    mounted(){
      this.$store.dispatch('getRecommend')
    }
  }
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .recommend-con{
    background-color: #fff;
    width:690/@rem;
    padding:0 30/@rem 40/@rem 30/@rem;
    margin-bottom: 20/@rem;
    .recom-item{

      .rec-title{
        width:690/@rem;
        height:120/@rem;
        line-height: 120/@rem;
        text-align: center;
        font-size: 32/@rem;
      }
      .item-wrap{
        display: block;
        border-radius: 6/@rem;
        background-color: #fff;
        .mainItem{
          display: block;
          width:684/@rem;
          margin-bottom: 20/@rem;
          border: 1/@rem solid #eee;
          .pic-container{
            width:684/@rem;
            height:386/@rem;
            position: relative;
            img{
              display: inline-block;
              width:100%;
              height:100%;
            }
            .bg-top{
              background-color: #fff;
              width:130/@rem;
              height:36/@rem;
              line-height: 36/@rem;
              font-size: 24/@rem;
              position: absolute;
              top:20/@rem;
              left:10/@rem;
              border-radius: 40/@rem;
              text-align: center;
              color: #000;
            }
          }
          .pic-info{
            width: 648/@rem;
            height:62/@rem;
            padding: 24/@rem 20/@rem 67/@rem 20/@rem;
            .pir-text-con{
              margin-bottom: 20/@rem;
              height: 43/@rem;
              font-size: 36/@rem;
              overflow: hidden;
              .text{
                float: left;
              }
              .price{
                float: right;
              }
            }
            .pic-down{
              font-size: 24/@rem;

            }
          }
        }
        .info-list{
          height:272/@rem;
          border:1/@rem solid #eeeeee;
          margin-bottom: 30/@rem;
          display: flex;
          .left-info{
            width:358/@rem;
            height:272/@rem;
            padding:0 30/@rem 0 20/@rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .actor{
              display: flex;
              height:48/@rem;
              .head-pic{
                width:46/@rem;
                height:46/@rem;
                border-radius: 50%;
                margin-right: 8/@rem;
                img{
                  width:100%;
                  height:100%;
                  border-radius: 50%;
                }
              }
              .name{
                font-size: 20/@rem;
                line-height: 48/@rem;
              }
            }
            .text-info{
              width:350/@rem;
              font-size: 32/@rem;
              overflow: hidden;
              white-space:nowrap ;
              text-overflow: ellipsis;
              margin-bottom: 14/@rem;
              margin-right: 40/@rem;
              line-height: 38/@rem;
            }
            .text-info2{
              font-size: 24/@rem;
              line-height: 30/@rem;
            }
          }
          .right-img{
            width:280/@rem;
            height:272/@rem;
            position: relative;
            img{
              width:100%;
              height:100%;
            }
            .bg-top{
              position: absolute;
              padding: 6/@rem 14/@rem;
              left: 14/@rem;
              top:14/@rem;
              border-radius: 20/@rem;
              background-color: #fff;
              color: #333;
              font-size: 24/@rem;
            }
          }
        }
      }
    }
  }
</style>
