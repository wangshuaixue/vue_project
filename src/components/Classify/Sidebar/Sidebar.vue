<template>
  <div class="slideW">
      <div class="sidebar-wrap">
        <ul class="sidebar">
          <!--<li class="item active" >-->
            <!--<a href="javascript:;" class="text">推荐专区1</a>-->
          <!--</li>-->
          <li class="item " v-for="(detail,index) in cateDetails" :key="index"
              @click="getIndex(index)"  :class="{active : clickIndex(index) } ">
            <a href="javascript:;" class="text">{{detail.name}}</a>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>

//  <!--这里组件间通信用到的是订阅消息与发布消息-->

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import PubSub from "pubsub-js"

  export default {
    data(){
      return {
        index:2
      }
    },
    mounted(){
      this.$store.dispatch('getCateDetails',()=>{
        this.$nextTick(()=>{  //之前不能滑动的原因：没有在nextTick的回调里面执行，这里写成了普通的function函数导致出错
          this.scroll=new BScroll('.sidebar-wrap', {
//          probeType: 2,  // 因为惯性滑动不会触发
            click: true,   //默认是禁止点击的
            scrollY:true
          })
//          console.log(this.scroll)
        })
      })

    },
    methods:{

      getIndex(index){
      //发布消息
        PubSub.publish('getIndex',index)
//        console.log(index)
//        更新最新点击的index
        this.index=index
      },

      clickIndex(index){
       return index===this.index
      }

    },
    computed:{
      ...mapState(['cateDetails'])
    }
  }
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .slideW{
    margin-top: 90/@rem;
    border-right:1/@rem solid #bbb;
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    overflow: hidden;
    height:100%;
    background-color: #fff;
    .sidebar-wrap{
      height:100%;
      .sidebar{
        width:162/@rem;
        padding:0 0 300/@rem 0;
        font-size: 28/@rem;
        margin-bottom: 50/@rem;
        .item{
          margin-top: 40/@rem;
          width:162/@rem;
          height:50/@rem;
          line-height: 50/@rem;
          text-align: center;
          &.active{
            width:158/@rem;
            border-left:4/@rem solid #ab2b2b;
            .text{
              color: #ab2b2b;
              font-size: 32/@rem;
            }
          }
        }

      }
    }
  }
</style>
