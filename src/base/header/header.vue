<template>
  <div class="header">
    <div class="back" @click="handleBack"><i class="iconfont icon-left"></i></div>
    <div class="title">{{title}}</div>
    <div class="right" v-show="right!=''" @click="handleRight">{{right.text}}</div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      default:'WiLL'
    },
    right: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    handleBack(){
      this.$router.go(-1)
    },
    handleRight(){
      this.$emit("headerRightClicked")
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.header
  height 1rem
  line-height 1rem
  background #fff
  display flex
  justify-content center
  position fixed
  top 0
  width 100%
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
  .right 
    position absolute
    right 0.1rem
    width 1rem
    height 1rem
    line-height 1rem
    display flex
    justify-content center
    font-size .36rem
    color: $cl-yellow
</style>