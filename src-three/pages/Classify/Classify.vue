<template>
  <div>
    <Header/>
    <Sidebar />
    <Details :detail="detail" :activeDetail="cateDetails[0]"/>
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
        console.log(this.detail)
      }
    },
    mounted(){
      this.$store.dispatch('getCateDetails')
      //订阅消息
      PubSub.subscribe('getIndex',(msg,index)=>{
        this.getIndex(index)
        console.log(index)
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
<style>

</style>
