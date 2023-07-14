import { createRouter, createWebHistory } from 'vue-router'
import store from '../stores/index.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../views/LayoutView.vue'),
      redirect: '/roles',
      children: [
        {
          path: '/roles',
          name: 'roles',
          component: () => import('../views/pages/RolesPage.vue')
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('../views/pages/UserPage.vue')
        },
        {
          path: '/goodies',
          name: 'goodies',
          component: () => import('../views/pages/GoodiesPage.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('store', store.state.permission)
  const uInfo = store.state.permission.userInfo
  if (!uInfo.username) {
    if (to.path === '/login') {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
