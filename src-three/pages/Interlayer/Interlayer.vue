<template>
  <div class="wrap">
    <div class="bgImg">
      <img src="./img/top1.jpg" alt="">
      <img src="./img/top2.jpg" alt="">
    </div>
    <div class="bgImg">
      <img src="./img/bottom.jpg" alt="">
      <a href="javascript:;"></a>
      <a href="javascript:;" class="backBtn"></a>
      <router-link to="/home" class="backBtn"></router-link>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang='less'>
  @import "../../common/less/mixins";
  body{
    background-color: #eeeeee;
    .wrap{
      max-width: 750/@rem;
      margin: 0 auto;
      .bgImg{
        position: relative;
        width: 750/@rem;
        margin-left: auto;
        margin-right: auto;
        img{
          vertical-align: top;
          width: 100%;
        }
        .backBtn{
          width:254/@rem;
          height:30/@rem;
          left:244/@rem;
          top:235/@rem;
          position: absolute;
          display: block;
        }
      }
    }
  }

</style>
