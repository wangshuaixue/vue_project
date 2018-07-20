<template>
  <div class="goods">
    <div class="recommend">
      <header class="newShow">
        <a href="javascript:;" class="more">
          <span>人气推荐·好物精选</span>
          <div class="all">
            <span class="wrap">
              <span>查看全部</span>
              <i class="arrow-right1"></i>
            </span>
          </div>
        </a>
      </header>
      <div class="goodsItems ">
        <ul class="list">
          <li class="item" v-for="(popularItem,index) in popularList" :key="index">
            <a href="javascript:;" >
              <div class="wraper">
                <img :src="popularItem.listPicUrl" alt="">
              </div>
              <div class="name">
                {{popularItem.name}}
              </div>
              <div class="newText">{{popularItem.simpleDesc}}</div>
              <div class="price">
                <span class="money">￥</span>
                <span class="num">{{popularItem.retailPrice}}</span>
              </div>
            </a>
          </li>


          <li class="item more">
            <a href="">
              <span class="text">查看全部</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapState(['popularList'])
    },
    mounted(){
      //发送请求新品列表
      this.$store.dispatch('getPopularList',()=>{
        this.$nextTick(() => {
          new BScroll('.goodsItems', {
            eventPassthrough: 'vertical',
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true
          })
        })
      })
    }
  }
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  .goods{
    .recommend{
      margin-bottom: 20/@rem;
      background-color: #fff;
      .newShow{
        height:260/@rem;
        background-image: url('./img/bg.png');
        background-size: 16rem 260/@rem;
        margin-bottom: 32/@rem;
        align-items: center;
        justify-content: center;
        display: flex;
        .more{
          font-size: 36/@rem;
          color: #B4A078;
          display: block;
          text-align: center;
          .all{
            margin:15/@rem auto 0;
            width:240/@rem;
            height:56/@rem;
            font-size: 28/@rem;
            line-height: 56/@rem;
            background-color: #F4E9CB;
            .wrap{
              display: inline-block;
              width:128/@rem;
              position: relative;
              height:56/@rem;
              .arrow-right1{
                display: inline-block;
                background-image: url('./img/right.png');
                background-size: 10/@rem 22/@rem;
                top:20/@rem;
                position: absolute;
                width:10/@rem;
                height:20/@rem;
                margin-left: 6/@rem;
              }
            }
          }
        }
      }
      .goodsItems{
        height:480/@rem;
        display: flex;
        overflow: hidden;
        .list{
          display: flex;
          .item{
            margin-left: 30/@rem;
            width:280/@rem;
            &.more{
              height:280/@rem;
              line-height: 280/@rem;
              text-align: center;
              border: 10/@rem solid #f4f4f4;
              .text{
                font-size: 28/@rem;
              }
            }
            a{
              display: block;
              height: 100%;
              .wraper{
                position: relative;
                background-color: #f4f4f4;
                margin-bottom: 20/@rem;
                height:280/@rem;
                img{
                  display: block;
                  position: absolute;
                  top:0;
                  left:0;
                  width: 100%;
                  height:100%;
                }
              }
              .name{
                font-size: 28/@rem;
                line-height: 34/@rem;
                padding:0 10/@rem;
                margin:10/@rem 0;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #333;
              }
              .newText{
                font-size: 24/@rem;
                line-height: 30/@rem;
                padding:0 10/@rem;
                margin-bottom: 14/@rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #7f7f7f;
              }
              .price{
                padding:0 10/@rem;
                font-size: 28/@rem;
                color:  #b4282d;
              }
            }
          }
        }

      }
    }
  }
</style>
