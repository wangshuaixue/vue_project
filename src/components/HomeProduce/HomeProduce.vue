<template>
  <div>
    <div class="produce" v-if="tagListsFilter">
      <div class="header-top">
        <a href="javascript:;">
          <span>品牌制造商直供</span>
          <i class="icon"></i>
        </a>
      </div>
      <div class="content" v-if="tagListsFilter.length">
        <ul class="list">
          <li class="item"  v-for="(tagItem,index) in tagListsFilter" :key="index"  v-if="tagItem">
            <a href="javascript:;">
              <div class="shop">
                <h4 class="title">{{tagItem.name}}</h4>
                <div class="price">
                  <span class="price1">{{tagItem.floorPrice}}</span>
                  <span class="price2">元起送</span>
                </div>
              </div>
              <img :src="tagItem.picUrl" alt="">
            </a>
          </li>
        </ul>
      </div>
      <!--<div class="contentbg" v-else></div>-->
    </div>
    <!--<div class="probg" v-else></div>-->
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getTagLists')
    },
    computed:{
      ...mapState(['tagLists']),

      tagListsFilter(){
        let list=[]
        for(var i=0;i<4;i++){
          list.push(this.tagLists[i])
        }
        return list
      }
    }

  }
</script>
<style lang='less'>
  @import '../../common/less/mixins';
  .produce{
    padding-bottom: 20/@rem;
    background-color: #fff;
    .header-top{
      height:110/@rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32/@rem;
      .icon{
        display: inline-block;
        background-image: url('./img/right.png');
        background-size: 100% 100%;
        width:30/@rem;
        height:30/@rem;
        vertical-align: middle;
      }
    }
    .contentbg{
      height:476/@rem;
      width:750/@rem;
      background-color: #fff;
    }
    .content{
      padding-bottom: 8/@rem;
      .list{
        display: flex;
        flex-wrap: wrap;
        margin:0 12/@rem;
        height:476/@rem;
        position: relative;
        overflow: hidden;
        .item{
          display: inline-block;
          position: relative;
          margin-bottom: 8/@rem ;
          margin-right: 8/@rem;
          width:355/@rem;
          height:236/@rem;
          overflow: hidden;
          background-color: #f4f4f4;
          a{
            width:100%;
            height:100%;
            .shop{
              position: absolute;
              left:0;
              top:0;
              padding: 10/@rem 0 0 10/@rem;
              width:100%;
              .title{
                font-size: 28/@rem;
                line-height: 34/@rem;
                margin-bottom: 6/@rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #333;
              }
              .price{
                display: inline-block;
                .price1{
                  font-size: 28/@rem;
                  line-height: 34/@rem;
                }
                .price2{
                  font-size: 24/@rem;
                  line-height: 34/@rem;
                }
              }
            }
            img{
              width:100%;
              height:100%;
            }
          }
        }
      }
    }
  }
  .probg{
    width: 750/@rem;
    height:614/@rem;
    background-color: #fff;
  }
</style>
