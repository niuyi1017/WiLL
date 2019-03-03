<template>
  <div class="message">
    <m-header title="小纸条"></m-header>
    <tab @changeTab="changeTab"
          :menu="menu"
        />
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Tab from '@/base/tab/tab'
export default {
  name: 'message',
  components: {
    MHeader,
    Tab,
  },
  data() {
    return {
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
      ]
    }
  },
}
</script>