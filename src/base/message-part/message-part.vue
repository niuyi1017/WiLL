<template>
  <div class="scroll-wrapper">
    <scroll class="scroll">
      <div>
        <message-item 
                v-for="(item, index) in messages" :key="index" 
                :message="item"
                />
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from '@/base/scroll/scroll'
import MessageItem from '@/base/message-part/messageItem'
export default {
  name: 'MessagePart',
  props: {
    messages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    MessageItem,
    Scroll
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
  .scroll
    height 100%
</style>