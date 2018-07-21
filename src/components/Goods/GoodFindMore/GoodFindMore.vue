<template>
  <div>
    <div class="find-more">
      <div class="title-find">
        <span class="inner">更多精彩</span>
      </div>
      <div class="content-wrap">
        <a class="item-cart" v-for="(findItem,index) in findMores" :key="index">
          <div class="wrap-img">
            <img :src="findItem.itemPicUrl" alt="">
          </div>
          <div class="text-info">{{findItem.subtitle}}</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['findMores'])
    },
    mounted(){
      this.$store.dispatch('getFindMores')
    }
  }
</script>
<style lang='less'>
  @import '../../../common/less/mixins';
  .find-more{
    width:690/@rem;
    margin:0 30/@rem 30/@rem 30/@rem;
    .title-find{
      height:140/@rem;
      line-height: 140/@rem;
      display: flex;
      align-items: center;
      .inner{
        flex: 1;
        font-size: 30/@rem;
        display: inline-block;
        text-align: center;
        color: #666;
      }
      &::before{
        content: '';
        display: block;
        width: 264/@rem;
        height: 1px;
        background-color: rgba(0,0,0,0.2);
      }
      &::after{
        content: '';
        display: block;
        width: 264/@rem;
        height: 1px;
        background-color: rgba(0,0,0,0.2);
      }
    }
    .content-wrap{
      .item-cart{
        display: block;
        margin-bottom: 20/@rem;
        padding:24/@rem;
        background-color: #fff;
        .wrap-img{
          width:642/@rem;
          height:360/@rem;
          img{
            width:100%;
            height:100%;
          }
        }
        .text-info{
          font-size: 28/@rem ;
          padding:28/@rem 0;
        }
      }
    }
  }
</style>
