import Vue from 'vue'
import Router from 'vue-router'
import Will from '../components/will/Will.vue'
import Playground from '../components/playground/Playground.vue'
import Message from '../components/message/Message.vue'
import User from '../components/user/User.vue'
import ToolBox from '../components/tool-box/toolBox.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'root',
      redirect: '/will'
    },
    {
      path: '/will',
      name: 'will',
      component: Will
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/toolbox',
      name: 'ToolBox',
      component: ToolBox
    },
  ]
})