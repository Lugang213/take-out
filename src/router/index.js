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
      component: () => import('../pages/Msite/Msite.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: () => import('../pages/Order/Order.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: () => import('../pages/Profile/Profile.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: () => import('../pages/Search/Search.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: () => import('../pages/Login/Login.vue')
    },
    {
      path: '/alert-tip',
      component: () => import('../components/AlertTip/AlertTip.vue')
    },
  ]
})
