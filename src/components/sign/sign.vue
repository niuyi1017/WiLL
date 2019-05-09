<template>
  <div class="sign">
    <div class="box">
      <div class="title">{{title}}</div>
      <div class="input-group">
        <div class="input-wrapper">
          <input type="text" v-model="phoneNumber" class="username" placeholder="请输入手机号">
        </div>
        <div class="input-wrapper" v-show="!signMode">
          <input type="text" v-model="username" class="username" placeholder="请设置昵称">
        </div>
        <div class="input-wrapper">
          <input type="password" v-model="password" class="password" placeholder="密码">
        </div>
        <div class="input-wrapper" v-show="!signMode">
          <input type="password" v-model="confirmPassword" class="password" placeholder="确认密码">
        </div>
      </div>
      <div class="tip" ><span v-show="errMsg">{{errMsg}}</span></div>
      <div class="btn">
        <div class="circle" @click="handleSign">
          <i class="iconfont icon-feiji"></i>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="sign-up" v-show="signMode" @click="changeSignMode">还没账号？赶快来注册吧</div>
      <div class="forgot" v-if="signMode">忘记密码</div>
      <div class="forgot" v-else @click="changeSignMode">已有账号？去登录</div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {signUp, signIn} from '@/api/user'
import {mapActions,mapMutations,mapGetters} from 'vuex'
import {getUploadSK} from '@/api/post'
export default {
  name: 'sign',
  data() {
    return {
      isError: false,
      errMsg:'',
      signMode: true, //true = signin, false = signup
      phoneNumber:null,
      username: null,
      password: null,
      confirmPassword: null
    }
  },
  methods: {
     _getUploadSk(){
      if(!this.uploadSK){
        getUploadSK().then(res => {
          if(res.code==0&&res.data){
            this.setUploadSK(res.data.uploadToken)
          }
        })
      }
    },
    handleSign(){
      if(this._checkform()){
        if(this.signMode){
          console.log("signin")
          signIn(this.phoneNumber,this.password).then((res) => {
            if(res.code==0&&res.data){
              const data = {
                token: res.data.token,
                uid: res.data.uid,
                following: res.data.following,
                recentlyMoments:[]
              }
              this.signInSuccess(data)
              this. _getUploadSk()
            }
          })
        }else{
          signUp(this.phoneNumber,this.username,this.password).then((res) => {
            if(res.code==0&&res.data){
              this.signMode = true
              this.password = ''
            }else{
              console.log(res)
            }
          })
        }
         
      }
     
    },
    _checkform(){
      if(this.signMode){
        if (this.phoneNumber && this.password) {
          if(this.phoneNumber.length<11||this.password.length<6){
            this.errMsg = "手机号至少为11位 / 密码长度不能小于6位！"
          }else{
              return true
          }
        }
        if(!this.phoneNumber||!this.password){
          this.errMsg = "手机号 / 密码不能为空！"
        }
      }else{
        if (this.username && this.password && this.confirmPassword && this.phoneNumber ) {
          if(this.password == this.confirmPassword)
            if(this.username.length<3||this.password.length<6 || this.phoneNumber < 11){
              this.errMsg = "用户名长度不能小于3位 / 密码长度不能小于6位！"
            }else{
              return true
            }
          else{
            this.errMsg = "两次密码不一致！"
          }
        }
        if(!this.username||!this.password||!this.phoneNumber){
          this.errMsg = "手机号 / 用户名 / 密码不能为空！！"
        }
      }
    },
    changeSignMode(){
      this.signMode = !this.signMode
      this.errMsg = ''
      this.username = ''
      this.password = ''
      this.confirmPassword = ''

    },
   
    ...mapActions({
        signInSuccess: 'signInSuccess'
    }),
    ...mapMutations({
      setUploadSK: "SET_UPLOADSK"
    })
  },
  computed: {
    title() {
      return this.signMode ? "登录" : "注册"
    },
     ...mapGetters(['uploadSK'])
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.sign
  position fixed
  top 0
  left 0 
  right 0
  bottom 0
  background #fff
  z-index 60
  display flex
  flex-direction column
  justify-content center
  align-items center
  .box
    width 80%
    height 0
    padding-bottom 120%
    // margin-bottom 2rem
    .title
      height 2rem
      line-height 2rem
      font-size .78rem
      color $cl-yellow
    .input-group
      // height 2rem
      line-height 1rem
      .input-wrapper
        height 1rem
        line-height 1rem
        padding-left .2rem
        border-bottom 0.02rem solid $cl-border
        input 
          border none
          outline none 
          width 90%
          height .4rem
          line-height 2rem
          margin-top .4rem
          font-size .32rem
          color $cl-subColor
    .tip
      width 100%
      height .6rem
      line-height .6rem
      margin-top .2rem
      text-align end
      color $cl-red
    .btn
      width 100%
      height 2rem
      margin-top 1rem
      display flex
      justify-content center
      align-items center
      .circle
        height 1.5rem
        width 1.5rem
        background $cl-yellow
        text-align center
        line-height 1.5rem
        border-radius 50%
        color #FFF
        box-shadow 0 0.25rem 1.5rem $cl-yellow
        .iconfont 
          font-size .88rem
  .footer
    line-height .4rem
    text-align center
    text-decoration underline
    color $cl-subColor
</style>
