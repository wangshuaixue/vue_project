<template>
  <div class="classify-wrap">
    <!--头部-->
    <Header/>
    <!--侧边导航-->
    <Sidebar />
    <!--显示商品区域-->
    <Details :detail="detail" :activeDetail="cateDetails[2]"/>
  </div>
</template>
<script>
  import Header from '../../components/Classify/Header/Header.vue'
  import Sidebar from '../../components/Classify/Sidebar/Sidebar.vue'
  import Details from '../../components/Classify/Details/Details.vue'

  import PubSub from "pubsub-js"

  import {mapState} from 'vuex'
  export default {  //配置对象
    data(){
      return {
        detail:{}
      }
    },
    methods:{
      getIndex(index){
        this.detail=this.cateDetails[index]
      }
    },
    mounted(){
      this.$store.dispatch('getCateDetails')
      //订阅消息
      PubSub.subscribe('getIndex',(msg,index)=>{
        this.getIndex(index)
      })
    },
    computed:{
      ...mapState(['cateDetails'])
    },
    components:{
      Header,
      Sidebar,
      Details
    }
  }
</script>
<style lang="less">
  @import '../../common/less/mixins.less';
  .classify-wrap{
    background-color: #fff;
    border: 1/@rem solid transparent;
  }

</style>
