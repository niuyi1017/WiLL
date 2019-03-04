<template>
  <div class="message-item">
    <div class="pic">
      <img src="../../common/image/t1.jpg" alt="">
    </div>
    <div class="username">{{message.username}}</div>
    <div class="time">{{message.time}}</div>
    <div class="desc">{{message.desc}}</div>
    <div class="num">{{message.num}}</div>
  </div>
</template>
<script>
export default {
  name: 'MessageItem',
  props: {
    message: {
      type: Object,
      default() {
        return {
          username: '一只小小白',
          time: '12 mins ago',
          desc: '学长你好，我也想学物联网工程专业，想请教你点问题',
          num: 12
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
@import "~@/common/stylus/mixins.styl"
.message-item
  height 1.4rem
  background #fff
  position relative
  margin-top .1rem
  .pic
    height 1rem
    width 1rem
    overflow hidden
    border-radius .5rem
    position absolute
    top .2rem
    left .2rem
    img
      width 100%
  .username
    position absolute 
    margin-left 1.5rem
    top .3rem
    font-size .32rem
    font-weight 600
  .desc
    position absolute
    top  .6rem
    left 1.5rem
    height .8rem
    line-height .8rem
    right .8rem
    ellipsis()
  .time
    position absolute
    right .15rem
    top .15rem 
    color $cl-subColor
  .num
    position absolute
    right .1rem
    bottom .1rem
    height .5rem
    width .5rem
    line-height .5rem
    text-align center
    color #fff
    background $cl-yellow
    border-radius .25rem
    font-size .24rem

</style>
