<template>
  <div class="user">
    <user-profile :user="user" v-if="isSignin"/>
    <sign v-else/>
  </div>
</template>
<script>
import UserProfile from '@/base/user-profile/userProfile'
import Sign from '@/components/sign/sign'
import { getUser } from '@/api/user'
import {mapGetters} from 'vuex'
export default {
  name: 'user',
  data() {
    return {
      user: {},
    }
  },
  components: {
    UserProfile,
    Sign
  },
  computed: {
   ...mapGetters([
     'isSignin'
   ])
  },
  methods: {
    _getUser(){
      getUser().then((res) => {
        if(res.code == 0 && res.data){
          this.user = res.data
        }
      })
    }
  },
  mounted() {
    this._getUser()
  }
}
</script>