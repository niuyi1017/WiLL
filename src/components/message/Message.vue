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
          text: '通知'
        },
        {
          modeName: 'messages',
          text: '消息'
        },
        {
          modeName: 'contacts',
          text: '同窗'
        }
      ],
      notifications:[],
      messages: [],
      contacts: []
    }
  },
  methods: {
    changeTab(mode) {
       let url = '/message/' + mode
       this.$router.push(url)
    }
  },
  mounted() {
    this.$router.push('/message/notifications')
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"

</style>
