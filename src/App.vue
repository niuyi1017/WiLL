<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <fade-animate>
      <gallery 
            :imgs="galleryImgs" 
            :galleryIndex="galleryIndex"
            v-if="galleryImgs.length"
            @close="handleClose"/>
    </fade-animate>
  </div>
</template>
<script>
import FadeAnimate from '@/base/fadeAnimate/fadeAnimate'
import Gallery from '@/base/gallery/gallery'
import{mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  components: {
    FadeAnimate,
    Gallery
  },
  methods: {
   handleClose(){
     this.closeGallery()
   },
   ...mapActions([
     'closeGallery'
   ])
  },
  computed: {
   ...mapGetters([
     'galleryIndex',
     'galleryImgs'
   ])
  },
  
}
</script>

<style lang="stylus" scoped>
@import "~@/common/stylus/variable";

</style>
