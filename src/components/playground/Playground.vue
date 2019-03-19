<template>
  <div class="playground">
    <tab @changeTab="changeTab"/>
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
      qaList:[],
      momentList: []
    }
  },
  methods: {
    changeTab(mode) {
      let url = '/playground/' + mode
      this.$router.push(url)
    }
  },
  mounted() {
    this.$router.push('/playground/qa')
  },
}
</script>
<style lang="stylus" scoped>
@import "~@/common/stylus/variable.styl"
</style>
