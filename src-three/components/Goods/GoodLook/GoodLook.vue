<template>
  <div>
    <div class="look-wrap">
      <div class="look-title">严选LOOK</div>
      <div class="look-con">
        <div class="video-wrap">

          <video class="video" src="http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg" >
            <div class="video-icon">11111</div>
          </video>

        </div>
        <div class="user-info">
          <div class="info-top">
            <div  class="head-img"><img :src="yxLook.avatar" alt=""></div>
            <div class="username">{{yxLook.nickname}}</div>
          </div>
          <div class="textinfo">{{yxLook.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['yxLook'])
    },
    mounted(){
      this.$store.dispatch('getYxLook')
    }
  }
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .look-wrap{
    background-color: #fff;
    .look-title{
      font-size: 32/@rem;
      height: 120/@rem;
      line-height: 120/@rem;
      text-align: center;
    }
    .look-con{

      .video-wrap{
        height:422/@rem;
        width:750/@rem;
        background-image: url('http://yanxuan.nosdn.127.net/yx-topic-1531997741819r9mv9q0g.jpg');
        background-size:100%;
        .video{
          width: 100%;
          height:100%;
          .video-icon{
            /*display: inline-block;*/
            width:96/@rem;
            height:96/@rem;
            background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/videoLookPlay-5c29b129cf.png);
          }
        }
      }
      .user-info{
        width:690/@rem;
        height:248/@rem;
        padding:24/@rem 30/@rem 46/@rem 30/@rem;
        overflow: hidden;

        .info-top{
          overflow: hidden;
          height:48/@rem;
          margin-bottom: 24/@rem;
          .head-img{
            float: left;
            height: 48/@rem;
            width:48/@rem;
            margin-right: 8/@rem;
            display: inline-block;
            border-radius: 50%;
            overflow: hidden;
            img{
              width:100%;
              height:100%;
            }
          }
          .username{
            float: left;
            display: inline-block;
            font-size: 28/@rem;
            line-height: 48/@rem;

          }
        }
        .textinfo{
          width:690/@rem;
          /*overflow: hidden;*/
          /*white-space: inherit;*/
          font-size: 28/@rem;
          color: #666;
          line-height: 40/@rem;
          word-break:break-all   //允许在单词内换行
        }
      }
    }
  }
</style>
