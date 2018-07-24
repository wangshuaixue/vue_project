<template>
  <div class="home_list">
    <div class="banner">
      <img :src="goodList[index].bannerUrl" alt="">
    </div>
    <div class="indexFloor" >
      <h3>{{goodList[index].name}}</h3>
      <div class="goodGrid">
        <ul class="list">
          <li v-for="(good,index) in goodList[index].itemList" :key="index">
            <img :src="good.listPicUrl" alt="">
            <span class="desc">{{good.simpleDesc}}</span>
            <div>满额减</div>
            <span class="good">{{good.name}}</span>
            <span class="price">￥{{good.retailPrice}}</span>
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props:{
      index:Number
    },
    computed: {
      ...mapState(['goodList']),
    },
    methods:{

    },

    components: {}
  }
</script>

<style lang="less">
  @import '../../common/less/mixins';
  .home_list{
    margin-bottom: 98/@rem;
    width:750/@rem;
    overflow: hidden;
    .banner{
      width: 750/@rem;
      height: 420/@rem;
      margin-bottom: 20/@rem;
      img{
        width: 750/@rem;
        height: 420/@rem;
      }
    }
    .indexFloor{
      width: 100%;
      background-color: white;
      margin-bottom: 20/@rem;
      h3{
        width: 100%;
        height: 120/@rem;
        text-align: center;
        font-size: 32/@rem;
        line-height: 120/@rem;
        color: #333;
      }
      .goodGrid{
        .list{
          background-color: white;
          li{

            display: inline-block;
            width: 345/@rem;
            height: 595/@rem;
            margin-left: 20/@rem;
            img{
              width: 345/@rem;
              height: 345/@rem;
              background-color: #f4f4f4;
              vertical-align: middle;
            }
            .desc{
              display: inline-block;
              background-color: #F1ECE2;
              height: 69/@rem;
              width: 345/@rem;
              color: #9F8A60;
              font-size: 24/@rem;
              line-height: 69/@rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            div{
              margin: 20/@rem 0 0 15/@rem;
              width: 92/@rem;
              height: 30/@rem;
              background-color: #f48f18;
              border-radius: 2/@rem;
              font-size: 20/@rem;
              text-align: center;
              color: white;
              line-height: 30/@rem;
            }
            .good{
              display: block;
              margin: 20/@rem 0 0 15/@rem;
              font-size: 28/@rem;
              color: #333;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

            }
            .price{
              color: #b4282d;
              font-size: 32/@rem;
              display: inline-block;
              margin: 10/@rem 0 0 10/@rem;
            }

          }
        }
      }
    }

  }

</style>
