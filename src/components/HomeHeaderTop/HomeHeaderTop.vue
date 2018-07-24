<template>

  <div class="header_con">
    <a name="tops"></a>
    <header class="header_top">
      <!--<a href="javascript:;" class="logo"></a>-->
      <router-link to="/home" class="logo"></router-link>
      <div class="search">
        <i class="search_icon"></i>
        <span class="search_text">搜索商品，共97565款好物</span>
      </div>
    </header>
    <div class="scroll">
      <div class="scroll-container">
        <div class="list" >
          <div class="tab " :class="{active : show(null)}" >
            <span class="text" @click="checkindex(null) ">推荐</span>
          </div>
          <div class="tab"  v-for="(headCate,index) in headCates" :key="index" :class="{active : show(index)}">
            <span class="text" @click="checkindex(index)">{{headCate.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState,mapActions} from 'vuex'
  export default {
    props:{
      getIndex:Function,
    },
    data(){
      return {
        index:null
      }
    },
    computed:{
      ...mapState(['headCates'])
    },
    methods:{
      checkindex(index){
        this.index=index
        this.getIndex(index)
      },
      /*setIndex(index){
        this.index=index
      },*/
     /* activeItem(event){
        const lists=document.querySelectorAll('.list .tab')
        const span=document.querySelector('.list span')
        console.log(lists)
        for (let i=0;i<lists.length;i++){
//          lists[i].className=''
        }
        console.log(event.target)
      },*/

      show(index){
        return this.index===index
      }

    },
    mounted(){

      this.$store.dispatch('getHeaderList')


      this.$nextTick(() => {
        new BScroll('.scroll-container', {
          probeType: 2,  // 因为惯性滑动不会触发
          click: true,   //默认是禁止点击的
          scrollX: true,
          scrollY:false
        })
      })
    }
  }
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  .header_con{
    position: fixed!important;
    top:0;
    left:0;
    background-color: #fff;
    height:148/@rem;
    width:100%;
    z-index: 5;
    .header_top{
      display: flex;
      align-items: center;
      padding:16/@rem 30/@rem;
      .logo{
        width:138/@rem;
        height:40/@rem;
        background-image: url(./img/logo.png);
        display: inline-block;
        margin-right:20/@rem;
        background-position: center;
        background-size: cover;
      }
      .search{
        height:56/@rem;
        border-radius: 10/@rem;
        font-size: 28/@rem;
        background-color: #ededed;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        .search_icon{
          background-image: url('./img/search.png');
          display: inline-block;
          vertical-align: middle;
          background-repeat:no-repeat;
          background-size: 100% 100%;
          width:28/@rem;
          height: 28/@rem;
          margin-right: 10/@rem;
        }
        .search_text{
          color: #666;
          display: block;
        }
      }
    }
    .scroll{
      background-color: #fff;
      .scroll-container{
        display: flex;
        overflow: hidden;
        .list{
          display: flex;
          flex-shrink: 0; //文字不换行
          padding:0 30/@rem;
          background-color: #fff;
          .tab{
            position: relative;
            margin-left: 48/@rem;
            &:first-child{
              margin-left: 0;
            }
            &.active{
              color :#b4282d;
              /*margin-left: 0;*/
              &::after{
                content: '';
                position: absolute;
                left:0;
                bottom: 0;
                width:100%;
                height: 4/@rem;
                background-color: #b4282d;
              }
            }

            .text{
              padding: 0 16/@rem;
              line-height: 60/@rem;
              font-size: 28/@rem;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>
