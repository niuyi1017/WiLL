<template>
  <div class="tab ">
    <div class="menu " 
          @click="handleTabClick('qa')"
          :class="{'actived': mode=='qa'}"
          >问答</div>
    <div class="menu" 
          @click="handleTabClick('moment')"
          :class="{'actived': mode=='moment'}">同学圈</div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data() {
    return {
      mode : 'qa'
    }
  },
  props: {
    menu: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleTabClick( mode ) {
      this.mode = mode
      this.$emit('changeTab',this.mode)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.tab
  height .8rem
  border-bottom .02rem solid $cl-border
  background #ffffff
  display flex
  justify-content space-around
  align-items center
  .menu
    font-size .32rem
    padding 0 .15rem .15rem .15rem
    color $cl-subColor
  .actived
    color $cl-yellow
    font-weight 600px
    border-bottom .04rem solid $cl-yellow
    padding-bottom 0.11rem
</style>
