<template>
  <div class="scroll-wrapper">
    <scroll class="scroll">
      <div>
        <div class="notification-part" v-for="(item, index) in notifications" :key="index">
          <h3>{{item.date}}</h3>
          <div class="notification-list">
            <notififation-item 
                    v-for="(notification, index) in item.notifications" 
                    :key="index"
                    :notification="notification"
                    />
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import NotififationItem from '@/base/notification-part/notification-item'
import Scroll from '@/base/scroll/scroll'
export default {
  name: 'NotificationPart',
  components: {
    NotififationItem,
    Scroll
  },
  props:{
    notifications: {
      type :Array,
      default() {
        return [
          {
            date: '今天',
            notifications: [
              {
                isRead: false,
                isSystemMsg: false,
                isFollow: false,
                isFriends: false,
                avatar: '',
                username: '一只小小白',
                message: '赞了你的文章',
                postTime: '17 mins ago',
                articlePic: ''
              }
            ]
          },
        ]
      }
    }
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
    .notification-part
      h3
        height 1rem
        line-height 1rem
        padding-left .4rem
        font-size .36rem
</style>