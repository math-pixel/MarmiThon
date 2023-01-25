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
    {
      path: '/recette/',
      name: 'recette',
      component: () => import('../views/RecetteView.vue'),
    },
    {
      path: '/creer',
      name: 'creer',
      component: () => import('../views/CreerRecetteView.vue')
    },
    {
      path: '/voirtout',
      name: 'voirtout',
      component: () => import('../views/VoirtoutView.vue')
      },
    {
      path: '/famille',
      name: 'famille',
      component: () => import('../views/FamillyView.vue')
    },
    {
      path: '/planning',
      name: 'planing',
      component: () => import('../views/PlanningView.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/InfoView.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../views/CourseView.vue')
    },
    
  ]
})

router.beforeEach(async (to, from) => {
  const store = Store()

  // if ( !store.isAuthenticated && to.matched.find(r => r.name==="auth") !== undefined) {
  //   return { name: 'login' }
  // }
})

export default router
