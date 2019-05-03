<template>
  <div>
    <div v-show="isShowAbs" >
      <div class="header-abs header-abs-left" v-show="showLeft">
        <div class="header-abs-back" @click="handleBack">
          <i class="iconfont icon-left"></i>
        </div>
      </div>
      <div class="header-abs header-abs-right" v-show="showRight">
        <div class="header-abs-back" :style="opacityStyleAbs">设置</div>
      </div>
    </div>
    <div class="header" v-show="!isShowAbs" :style="opacityStyle">
      <div class="back" @click="handleBack" v-show="showBack"><i class="iconfont icon-left"></i></div>
      <div class="title">{{title}}</div>
      <div class="more" v-show="hasMore" @click="handleMore">{{hasMore}}</div>
    </div>
  </div>
</template>
<script>
export default {  
  name: "Header",
  data() {
    return {
      opacityStyle: {
        opacity: 0
      },
      opacityStyleAbs: {
        opacity: 1
      },
      isShowAbs: this.showAbs
    }
  },
  props: {
    title: {
      type: String,
      default:'WiLL'
    },
    hasMore: {
      type: String,
      default: ''
    },
    showAbs: {
      type: Boolean,
      default: true
    },
    showBack: {
      type: Boolean,
      default: true
    },
    showLeft: {
      type: Boolean,
      default: true
    },
    showRight: {
      type: Boolean,
      default: true
    }
  },
  
  methods: {
    handleBack(){
      this.$router.go(-1)
    },
    handleMore() {
      this.$emit('more')
    },
    handleScroll () {
      const top =  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if(top < 100){
        let opacityAbs = 1 - (top/140)
        this.opacityStyleAbs = {opacity: opacityAbs }
      }
      if ( top > 100){
        let opacity = top / 200 
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.isShowAbs = false
      }else{
        this.isShowAbs = true
      }
    }
  },
  mounted()  {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.header-abs
  position fixed
  top .15rem
  height .8rem
  text-align center
  z-index 20
.header-abs-left
  left .2rem
  width .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .5)
  .header-abs-back
    color $cl-yellow  
    height .8rem
    line-height .8rem
.header-abs-right
  right .2rem
  height .8rem
  .header-abs-back
    position relative
    height .4rem
    line-height .4rem
    padding 0.1rem .25rem
    top .1rem
    border-radius .4rem
    background rgba(0,0,0,.5)
    color $cl-yellow  
    z-index 20

.header
  position fixed
  top 0
  left 0
  right 0
  z-index 20
  height 1rem
  line-height 1rem
  background #fff
  display flex
  justify-content center
  // box-shadow 0 .05rem .15rem rgba(0,0,0,.15)
  // position relative
  .back
    position absolute
    left 0
    width 1rem
    height 1rem
    line-height 1rem
    display flex
    justify-content center
    .iconfont
      font-size .56rem
      color $cl-yellow
  .title
    font-size .36rem
    letter-spacing 0.04rem
    color $cl-title
  .more
    position absolute
    right  .2rem
    width 1rem
    height 1rem
    text-align center
    line-height 1rem
    color $cl-yellow
</style>
