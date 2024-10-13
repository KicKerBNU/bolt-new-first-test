import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../../presentation/views/LoginView.vue'
import HomeView from '../../presentation/views/HomeView.vue'
import DatabaseView from '../../presentation/views/DatabaseView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/database',
      name: 'Database',
      component: DatabaseView
    }
  ]
})

export default router