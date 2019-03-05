<template>
  <div class="user">
    <user-profile/>
  </div>
</template>
<script>
import UserProfile from '@/base/user-profile/userProfile'
export default {
  name: 'user',
  components: {
    UserProfile
  }
}
</script>