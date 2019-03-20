<template>
  <div class="message">
    <tab @changeTab="changeTab" :menu="menu"/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar/>
  </div>
</template>
<script>
import Tab from '@/base/tab/tab'
import TabBar from '@/components/tabBar/tabBar'

export default {
  name: 'message',
  components: {
    Tab,
    TabBar
  },
  data() {
    return {
      mode: 'notifications',
      menu: [
        {
          modeName: 'notifications',
          text: '通知',
          url: '/message/notifications'
        },
        {
          modeName: 'messages',
          text: '消息',
          url: '/message/messages'
        },
        {
          modeName: 'contacts',
          text: '同窗',
          url: '/message/contacts'
        }
      ],
      notifications:[],
      messages: [],
      contacts: []
    }
  },
  methods: {
    changeTab(mode) {
      this.mode = mode
      let url = '/message/' + mode
      this.$router.push(url)
    }
  },
  activated() {
    let url = '/message/' + this.mode
    this.$router.push(url)
  }
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"

</style>
