import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import faultLocalization from "../views/faultLocalization"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/faultLocalization',
    name: 'faultLocalization',
    component: faultLocalization
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
