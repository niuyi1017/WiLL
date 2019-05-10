<template>
  <div class="playground">
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
  name: 'playground',
  components: {
    Tab,
    TabBar
  },
  data() {
    return {
      mode: 'qa',
      menu: [
          {
            modeName:'qa',
            text: '问答',
            url: '/playground/qa'
          },
          {
            modeName:'moment',
            text: '同学圈',
            url: '/playground/moment'
          }
        ],
      qaList:[],
      momentList: []
    }
  },
  methods: {
    changeTab(mode) {
      this.mode = mode
      let url = '/playground/' + mode
      this.$router.push(url)
    }
  },
  activated() {
    let url = '/playground/' + this.mode
    this.$router.push(url)
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
</style>
