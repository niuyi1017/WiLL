<template>
  <div class="userProfile">
    <s-header :title="title" 
              :hasMore="hasMore"
              :showBack="showBack"
              :showLeft="showLeft"
              :showRight="showRight"
              :showAbs="showAbs"/>
    <div class="pic-wrapper">
    </div>
    <div class="content">
      <div class="pic">
        <img src="../../common/image/t1.jpg" alt="" srcset="">
      </div>
      <div class="user-info">
        <div class="username">一只小小白</div>
        <div class="school">烟台大学 物联网工程专业</div>
      </div>
    </div>
    <div class="pad">

    </div>
  </div>
</template>
<script>
import SHeader from '@/base/header/Sheader'
export default {
  name: 'UserProfile',
  components: {
    SHeader
  },
  data() {
    return {
      mode: 'isSelf'
    }
  },
  computed: {
    title() {
      return this.mode=='isSelf' ? "我的主页" : "名片"
    },
    hasMore() {
      return this.mode=='isSelf' ? "设置" : ""
    },
    showBack() {
      return this.mode=='isSelf' ? false : true
    },
    showLeft(){
       return this.mode=='isSelf' ? false : true
    },
    showRight(){
       return this.mode=='isSelf' ? true : false
    },
    showAbs() {
       return this.mode=='isSelf' ? true : false
    }

  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.userProfile
  position relative
  .pic-wrapper
    height 0
    width 100%
    padding-bottom 70%
    overflow hidden
    background url('../../common/image/b2.jpg') 
    filter: blur(.08rem); 
    position fixed
    background-size:100% 100%;
  .content
    height 0
    width 100%
    padding-bottom 70%
    z-index 1
    position absolute
    background-color rgba(0,0,0,.15)
    top 0
    .pic
      height 1.5rem
      width 1.5rem
      border-radius 50%
      overflow hidden
      position absolute
      bottom 1.5rem
      left 50%
      box-shadow $shadow
      margin-left -0.75rem
      img 
        width 100%
    .user-info
      width 100%
      position absolute
      bottom .5rem
      text-align center
      line-height .4rem
      color $cl-border
      // font-size .32rem
      // font-weight 600

  .pad
    height 30rem

</style>
