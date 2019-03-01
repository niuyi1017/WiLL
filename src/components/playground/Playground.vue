<template>
  <div class="playground">
    <m-header title="操场"></m-header>
    <tab/>
    <card-qa/>
    <card-qa/>
    <card-qa/>
    <card-qa/>
    <card-qa/>
  </div>
</template>
<script>
import MHeader from '@/base/header/header'
import Tab from '@/base/tab/tab'
import CardQa from '@/base/card/card-qa'
export default {
  name: 'playground',
  components: {
    MHeader,
    Tab,
    CardQa
  }
}
</script>