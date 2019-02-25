/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import './common/stylus/border.css'
import './common/stylus/reset.css'
import './common/stylus/variable.styl'
import './common/stylus/base.styl'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
