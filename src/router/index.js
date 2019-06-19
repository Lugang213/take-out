import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: () => import('../pages/Msite/Msite.vue')
    },
    {
      path: '/order',
      component: () => import('../pages/Order/Order.vue')
    },
    {
      path: '/profile',
      component: () => import('../pages/Profile/Profile.vue')
    },
    {
      path: '/search',
      component: () => import('../pages/Search/Search.vue')
    },
  ]
})
