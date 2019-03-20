<template>
  <div class="tab ">
    <div class="menu" 
          v-for="(tab, index) in menu" :key="index"
          @click="handleTabClick(tab.modeName)"
          :class="{'actived': mode==tab.modeName}"
          >{{tab.text}}</div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data() {
    return {
      mode : this.defaultMenu
    }
  },
  props: {
    menu: {
      type: Array,
      default() {
        return 
      }
    },
    defaultMenu: {
      type:String,
      default(){
        return this.menu[0].modeName
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
  height 1rem
  border-bottom .02rem solid $cl-border
  background #ffffff
  display flex
  justify-content space-around
  align-items center
  .menu
    font-size .32rem
    padding 0.15rem .15rem .15rem .15rem
    color $cl-subColor
  .actived
    color $cl-yellow
    font-weight 600px
    border-bottom .04rem solid $cl-yellow
    padding-bottom 0.11rem
</style>
