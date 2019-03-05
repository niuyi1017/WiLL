<template>
  <div class="scroll-wrapper">
    <list-view :data="contacts"/>
  </div>
</template>
<script>
import ListView from '@/base/listview/listview'
export default {
  name: 'ContactPart',
  props: {
    contacts: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ListView
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
.scroll-wrapper
  position fixed
  top 1rem
  left 0
  right 0
  bottom 1.25rem
  overflow hidden
  background $cl-bg2
</style>