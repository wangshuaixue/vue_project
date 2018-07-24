<template>
  <div>
    <div class="login-wrap">
      <GoodsHeader/>
      <div class="content-wrap">
        <div class="logo-wrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="center-wrap">
          <div class="top">
            <div class="phone">
              <input type="text" class="tel-input" placeholder="请输入手机号" maxlength="11" v-model="phone">
              <div :class="{'clear-input':phone.length>0}" @click="clearNum"></div>
            </div>

            <div class="yanzheng">
              <input type="text" class="yan-input" placeholder="请输入手机验证码">
              <div class="btns" @click="reviveCode" ref="recive">获取验证码</div>
            </div>
            <div class="alert-text" >
              <div class="text"  ref="alertTip">
              </div>
            </div>
            <div class="unlogin">
              <span class="issue">遇到问题?</span>
              <span class="pwd-login">使用密码验证登录</span>
            </div>
            <div class="sub-wrap">
              <div class="submit">登录</div>
              <div class="other">其他登录方式</div>
              <div class="more">注册账号
              <span class="icon"></span>
              </div>
            </div>
          </div>
          <div class="down"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import GoodsHeader from '../../components/Goods/GoodsHeader/GoodsHeader.vue'

  export default {  //配置对象
    data(){
      return {
        phone:'',
        isOk:true,
        time:0
      }
    },

    computed:{
      /*verify(){
        return /^1\d{10}$/.test(this.phone)
      },*/

    },

    methods:{
      clearNum(){
        this.phone=''
      },
      judge(){

      },
      reviveCode(){

          if(/^1\d{10}$/.test(this.phone)){
            //发送获取验证码请求
//            let time=8
            if(time===0) {  //避免重复点击，指定时间内只执行一次
              time = 20;
              this.intervalId = setInterval(() => {
                time--
                this.$refs.recive.textContent = this.isOk ? `倒计时${time}s` : '获取验证码'
//            console.log(time)
                if (time <=0) {   //倒计时完毕清除定时器
                  clearInterval(this.intervalId)
                  this.$refs.recive.textContent = '获取验证码'
                }
              }, 1000)
            }
          }else{
            //不符合规范不能发送请求

          }
          this.isOk=/^1\d{10}$/.test(this.phone)
          this.$refs.alertTip.textContent=this.phone ? (this.isOk ? '' : '手机号格式错误' ) : ('请输入手机号')
        }

    },

    components:{
      GoodsHeader
    }
  }
</script>
<style lang='less'>

  @import '../../common/less/mixins';
  .content-wrap{
    padding-top: 88/@rem;
    background-color: #fff;
    .logo-wrap{
      height:64/@rem;
      text-align: center;
      padding-top: 56/@rem;
      img{
        width:192/@rem;
        height:64/@rem;
        display: inline-block;
      }
    }
    .center-wrap{
      width:670/@rem;
      padding:0 40/@rem;
      .top{
        padding-top: 80/@rem;
        .phone{
          margin: auto;
          width:670/@rem;
          padding-left: 8/@rem;
          font-size: 30/@rem;
          color: #666;
          position: relative;
          overflow: hidden;
          input{
            outline: none;
            width:100%;
            height:90/@rem;
            border-bottom: 1/@rem solid #ddd;
          }
          .clear-input{
            position: absolute;
            width:31/@rem;
            height:31/@rem;
            line-height: 62/@rem;
            right:10/@rem;
            top:20/@rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAp1JREFUSA29lr9v2kAUx8/mh0BCMGQAxRMC0REKqtQOVafskeiUvyVj/pYubaXsnaoMrVRBYUD8WMqAUwnhCQkGI+j7XnyXs302kJCeZHz33rv34fne3T2DHdB6vd7r7XZ7Sc97MrcMwzjHtN1ud08v2zTNO3puG43Gb8jjmhGn7Ha7HwlyQzav4uwU3ZjA181m84si83W1wH6/X95sNp8ogrc+6wMH9AV+JpPJq3q9/ic4JQSkqD5QVF/J8CxofOTYoWjbFO13dZ4P6MG+kUFKNXpG3yXohQqVQHxG13V/kfPnRhb8f04qlXojPq8ptFizF4DB/Znnm6M4ENn41AThXvb8wDcYMONAL/W109LpNCuVSoyyTqsXwmw2y4rFIqMMFSLfWzAMbGoKuevTKgPALMti6/WaTSYTRraK9qGby+VYtVpliUSCDYdDtlqtQjYQ0J9umkS+1Go94WKx4DBEUKvVQpGqMMdxImFwBxaAOK4iGyJCZIgwCA3CptNppB8owMIaWrFWpNRBC4WC/IyIbB/MY1imOIiPhVYqFb5mR8CQUOdyH+4DQo9IbdvGLcGzEePZbHbIVG5D83YmPbhiDmpYs3K5LGHYKrpEinH2FxHaMQZSFUyQwWCgTSQ5Qd/B3Wne6XWP0iAMCaJLpH2HA1gA3j66DvewFcSmDiaIDkr+wk48CVimVxaMo6zy+XxsNgahmUwmytUYLH5AEvmaNuVnneV8PmfL5TL2BAF0NBoxwKKONTDgX560nU7nB2Xsk0oK3R9VZSg5Wq3WO8jkB6cFv6KxoxqeqO94vrk7CcSNTGG3SeqeCAQ3KDHa4raHQAIxQO1BBhfUPUWkKKJ89QwYcg0xEO2/lokCijfKAsrely+EVSj6pyz1/wFrT2LaPTPA3AAAAABJRU5ErkJggg==) no-repeat ;
            background-size:100% 100%;

          }

        }
        .yanzheng{
          margin: auto;
          width:670/@rem;
          padding-left: 8/@rem;
          font-size: 30/@rem;
          color: #666;
          position: relative;
          overflow: hidden;
          border-bottom: 1/@rem solid #ddd;

          input{
            outline: none;
            width:380/@rem;
            height:90/@rem;
          }
          .btns{
            background-color: #fff;
            position: absolute;
            display: inline-block;
            right:10/@rem;
            top:15/@rem;
            width:166/@rem;
            height:52/@rem;
            border:2/@rem solid #666;
            line-height: 56/@rem;
            font-size: 26/@rem;
            border-radius: 10/@rem;
            text-align: center;
          }
        }
        .alert-text{
          margin-top: 16/@rem;
          font-size: 26/@rem;
          color: #b4282d;
          .text{
            display: block;
          }
        }
        .unlogin{
          overflow: hidden;
          font-size: 28/@rem;
          margin:50/@rem 0  40/@rem 0;
          .issue{
            float: left;
            color: #666;
          }
          .pwd-login{
            float: right;
            color: #333;
          }
        }
        .sub-wrap{
          width:670/@rem;
          /*<!--height:164/@rem;-->*/
          /*<!--padding: 0 40/@rem;-->*/
          font-size: 30/@rem;
          .submit{
            width:670/@rem;
            height:94/@rem;
            line-height: 94/@rem;
            text-align: center;
            background-color: #b4282d;
            border:2/@rem solid #fff ;
            color: white;
            border-radius: 10/@rem;
            margin-bottom: 50/@rem;
          }
          .other{
            width:670/@rem;
            height:94/@rem;
            text-align: center;
            line-height: 94/@rem;
            background-color: #fff;
            border-radius: 10/@rem;
            /*<!--border: 1/@rem solid #b4282d;-->*/
            border: 2/@rem solid #b4282d;
            color: #b4282d;
          }
          .more{
            margin-top: 40/@rem;
            color: #333;
            text-align: center;
            .icon{
              display: inline-block;
              background-image: url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png);
              width:27/@rem;
              height:27/@rem;
              background-size:100%;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
</style>
