<template>
  <div class="column">
    <div class="recommend-wrap">
      <div class="rec-wrap">
        <div class="list-scroll" v-if="columns.length">
          <a href="/" class="item" v-for="(column,index) in columns">
            <img :src="column.picUrl" alt="" >

            <div class="num-wrap">
              <div class="num">{{column.articleCount}}</div>
            </div>

            <div class="title">{{column.title}}</div>
          </a>
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
      this.$store.dispatch('getColumns',()=>{
        this.$nextTick(() => {
          new BScroll('.rec-wrap', {
            eventPassthrough: 'vertical',
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollX: true
          })
        })
      })
    },
    computed:{
      ...mapState(['columns'])
    }
  }
</script>
<style lang='less'>
  @import "../../../common/less/mixins";
  .recommend-wrap{
    height:226/@rem;
    margin-bottom: 20/@rem;
    padding:32/@rem 30/@rem 28/@rem 30/@rem;
    background-color: #fff;
    .rec-wrap{
      display: flex;
      overflow: hidden;
      .list-scroll{
        display: flex;
        .item{
          display: inline-block;
          margin-right: 24/@rem;
          width:164/@rem;
          height:210/@rem;
          position: relative;
          img{
            width: 164/@rem;
            height:164/@rem;
            margin-bottom: 22/@rem;
            border-radius: 4/@rem;
            display: block;
          }
          .title{
            width:184/@rem;
            margin-left: -10/@rem;
            text-align: center;
            font-size: 24/@rem;
            color: #333;
          }
          .num-wrap{
            position: absolute;
            top:0;
            right:0;
            background-image: url('./img/shadow.png');
            background-size:100% ;
            width:116/@rem;
            height:32/@rem;
            border-radius: 0 4/@rem 0 0;
            .num{
              position: absolute;
              top:0;
              right:8/@rem;
              text-align: right;
              line-height: 32/@rem;
              width:150/@rem;
              height: 32/@rem;
              font-size: 24/@rem;
            }
          }

        }
      }
    }
  }
</style>
