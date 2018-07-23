<template>
  <div>
    <div class="wrap1">
      <header class="pick">
        <a href="javascript:;" class="more">
          <span>专题精选</span>
          <i class="icon"></i>
        </a>
      </header>
      <div class="topics">
        <div class="inner">
          <ul class="list" v-if="picklist">
            <li class="item" v-for="(pick,index) in picklist" :key="index">
              <a href="/" class="imgWrap">
                <img :src="pick.itemPicUrl" alt="">
              </a>
              <div class="money">
                <h4 class="title">{{pick.title}}</h4>
                <span class="price">{{pick.priceInfo}}</span>
              </div>
              <div class="desc">{{pick.subtitle}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getPicklist',()=>{
        this.$nextTick(() => {
          new BScroll('.inner', {
            eventPassthrough: 'vertical',
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true
          })
        })
      })
    },
    computed:{
      ...mapState(['picklist'])
    }
  }
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  .wrap1{
    background-color: #fff;
    margin-bottom: 12/@rem;
    .pick{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32/@rem;
      height:110/@rem;
      .more{
        color: #333;
        display: flex;
        align-items: center;
        .icon{
          display: block;
          background-image: url('./img/right.png');
          background-size:100% 100%;
          width:30/@rem;
          height:30/@rem;
          margin-left: 10/@rem;
        }
      }
    }
    .topics{
      .inner{
        padding:0 30/@rem 36/@rem;
        overflow: hidden;
        display: flex;
        .list{
          display: flex;
          .item{
            margin-right: 20/@rem;
            width:575/@rem;
            .imgWrap{
              display: block;
              height:322/@rem;
              width:575/@rem;
              margin-bottom: 16/@rem;
              border-radius: 8/@rem;
              overflow: hidden;
              img{
                width:100%;
                position: relative;
                left:50%;
                transform: translateX(-50%);
                border: 0;
              }
            }
            .money{
              height:41/@rem;
              margin-bottom: 2/@rem;
              width:575/@rem;
              .title{
                width:410/@rem;
                float: left;
                font-size: 28/@rem;
                text-overflow: ellipsis;
                overflow: hidden;
              }
              .price{
                float: right;
                font-size: 28/@rem;
                color: #b4282d;
              }
            }
            .desc{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 24/@rem;
              color: #7f7f7f;
            }
          }
        }
      }
    }
  }
</style>
