<template>
  <div class="scroll-wrapper">
    <scroll class="scroll">
      <div>
        <div class="notification-part" v-for="(notificationArr, date, index) in notifications" :key="index">
          <h3>{{date}}</h3>
          <div class="notification-list">
            <notififation-item 
                    v-for="(notification, index) in notificationArr" 
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
import { getNotifications } from '@/api/message'
import {mapGetters} from 'vuex'
import moment from 'moment'
export default {
  name: 'NotificationPart',
  components: {
    NotififationItem,
    Scroll
  },
  data() {
    return {
      notifications: {}
    }
  },
  computed: {
    ...mapGetters(['uid'])
  },
  methods: {
    _getNotifications(){
      if(this.uid){
        getNotifications(this.uid).then((res) => {
          if(res.code==0&&res.data){
            let notifications = res.data
            let result = {}
            for(let i=notifications.length-1;i>0;i--){
              if(notifications[i]==null)continue;
              let date = moment(notifications[i].postTime,'YYYYMMDD').calendar().split(' ')[0]
              if(result[date]){
                result[date].push(notifications[i])
              }else{
                result[date] = []
                result[date].push(notifications[i])
              }
            }
            this.notifications = result
          }
        })
      }
      
    }
  },
  mounted() {
    this._getNotifications()
  },
  activated() {
    this._getNotifications()
  },
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