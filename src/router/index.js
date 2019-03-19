import Vue from 'vue'
import Router from 'vue-router'

import Will from '../components/will/Will.vue'

import Playground from '../components/playground/Playground.vue'
import qaPart from '../components/playground/components/qa-part.vue'
import momentPart from '../components/playground/components/moment-part.vue'

import Message from '../components/message/Message.vue'
import NotificationPart from '@/base/notification-part/notification-part'
import MessagePart from '@/base/message-part/message-part'
import ContactPart from '@/base/contact-part/contact-part'

import User from '../components/user/User.vue'
import ToolBox from '../components/tool-box/toolBox.vue'
import Search from '../components/search/search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      component: Playground,
      children: [
        {
          path: 'qa',
          component: qaPart,
        },
        {
          path: 'moment',
          component: momentPart,
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children: [
        {
          path: 'notifications',
          component: NotificationPart
        },
        {
          path: 'messages',
          component: MessagePart
        },
        {
          path: 'contacts',
          component: ContactPart
        },
        
      ]
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
    {
      path: '/search',
      name: 'search',
      component: Search
    },
  ]
})