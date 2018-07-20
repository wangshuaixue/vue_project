<template>
  <div >
    <div class="time">
      <div class="timeLimit">
        <div class="left">
          <div class="title">严选限时购</div>
          <div class="count">
            <span class="hours">02</span>
            <span class="arr">:</span>
            <span class="mins">36</span>
            <span class="arr">:</span>
            <span class="secs">37</span>
          </div>
          <div class="next-time">下一场 22:00 开始</div>
        </div>
        <div class="right">
          <div class="pic">
            <img :src="limitItem.primaryPicUrl" alt="">
          </div>
          <div class="price">
            <div class="p1">￥{{limitItem.activityPrice}}</div>
            <div class="p2">￥{{limitItem.originPrice}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="welfare">
      <a href="javascript:;"  class="wel"></a>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['limitItem'])
    },
    mounted(){
      this.$store.dispatch('getLimitItem')
    }
  }
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  .time{
    .timeLimit{
      padding: 30/@rem 40/@rem 30/@rem 56/@rem;
      height:380/@rem;
      margin-bottom: 20/@rem;
      background-color: #fff;
      display: flex;
      .left{
        display: flex;
        flex-direction: column;
        padding-top: 80/@rem;
        flex: 1;
        .title{
          font-size: 36/@rem;
          line-height: 36/@rem;
          margin-bottom: 24/@rem;
          color: #333;
          letter-spacing: 12/@rem;
        }
        .count{
          font-size: 0;
          .hours,.mins,.secs{
            display: inline-block;
            line-height: 56/@rem;
            text-align: center;
            width:62/@rem;
            height:56/@rem;
            font-size: 32/@rem;
            color: #fff;
            background-color: #444;
            border-radius: 5/@rem;
          }
          .arr{
            display: inline-block;
            text-align: center;
            color: #333;
            font-size: 30/@rem;
            width:20/@rem;
            font-weight: 700;
          }
        }
        .next-time{
          margin-top: 40/@rem;
          color: #333;
          font-size: 24/@rem;
          line-height: 24/@rem;
          height:24/@rem;
        }
      }
      .right{
        width:320/@rem;
        height:320/@rem;
        position: relative;
        img{
          width: 100%;
          height:100%;
        }
        .price{
          position: absolute;
          height:96/@rem;
          width:96/@rem;
          background-color: #F59524;
          color: #ffffff;
          right:20/@rem;
          bottom: 36/@rem;
          border-radius: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .p1{
            font-size: 27/@rem;
            height:28/@rem;
            line-height:28/@rem;
          }
          .p2{
            font-size: 24/@rem;
            height:28/@rem;
            line-height:28/@rem;
            text-decoration: line-through;
          }
        }
      }
    }

  }
  .welfare{
    width:750/@rem;
    height:300/@rem;
    margin-bottom: 20/@rem;
    .wel{
      display: block;
      width:100%;
      height:100%;
      background-image: url('./img/welfare/01.jpg');
      background-repeat:no-repeat;
      background-position: center ;
      background-size: 100% 100%;
    }
  }

</style>
