<template>
  <div class="message">
    <tab @changeTab="changeTab" :menu="menu"/>
    <notification-part :notifications="notifications"
                        v-show="mode=='notifications'"/>
    <message-part :messages="messages"
                  v-show="mode=='message'"/>
    <contact-part :contacts="contacts"
                    v-if="mode=='contacts'"/>
    <tab-bar/>
  </div>
</template>
<script>
import Tab from '@/base/tab/tab'
import NotificationPart from '@/base/notification-part/notification-part'
import MessagePart from '@/base/message-part/message-part'
import ContactPart from '@/base/contact-part/contact-part'
import TabBar from '@/components/tabBar/tabBar'
import { getMessage } from '@/api/message'
export default {
  name: 'message',
  components: {
    Tab,
    NotificationPart,
    MessagePart,
    ContactPart,
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
          modeName: 'message',
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
       this.mode = mode
    },
    _getMessage(){
      getMessage().then((res) => {
        if(res.code==0&&res.data){
          this.notifications = res.data.notifications
          this.messages = res.data.messages
          this.contacts = res.data.contacts
        }
      })
    }
  },
  mounted() {
    this._getMessage()
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"

</style>
