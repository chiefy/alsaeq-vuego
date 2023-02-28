import { createRouter, createWebHistory } from 'vue-router'

import EqView from '../views/EqView.vue'
import ConfigView from '../views/ConfigView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EqView
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigView
    }
  ]
})

export default router
