import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RestoreView from '@/views/RestoreView.vue'
import ComponentsView from '@/views/ComponentsView.vue'
import { loadLayoutMiddleware } from "@/router/middleware/loadLayoutMiddleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'DefaultLayout'
      }

    },
    {
      path: '/auth-login',
      name: 'Login',
      component: LoginView,
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/auth-restore',
      name: 'Restore',
      component: RestoreView,
      meta: {
        layout: 'AuthLayout'
      }
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView,
      meta: {
        layout: 'DefaultLayout'
      }
    },
  ]
})

router.beforeEach(loadLayoutMiddleware)

export default router
