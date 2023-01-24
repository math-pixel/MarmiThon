import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Store } from '@/stores/store.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      children: [
        {
        path: 'login',
        name: 'login',
        component: () => import('../views/LoginView.vue')
        },
        {
          path: 'signin',
          name: 'signin',
          component: () => import('../views/SigninView.vue')
        }],

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
  ]
})

router.beforeEach(async (to, from) => {
  const store = Store()

  // if ( !store.isAuthenticated && to.name !== 'Signin') {
  //   return { name: 'Signin' }
  // }
})

export default router
