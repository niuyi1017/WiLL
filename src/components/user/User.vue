<template>
  <div class="user">
    <user-profile :isSelf="isSelf" v-if="uid"/>
    <sign v-if="!uid"/>
  </div>
</template>
<script>
import UserProfile from '@/base/user-profile/userProfile'
import Sign from '@/components/sign/sign'
import {mapGetters} from 'vuex'
export default {
  name: 'user',
  data() {
    return {
      isSelf: true
    }
  },
  components: {
    UserProfile,
    Sign
  },
  computed: {
   ...mapGetters([
     'uid'
   ])
  },
}
</script>