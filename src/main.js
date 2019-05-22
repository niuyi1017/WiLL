/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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

export const app =new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
