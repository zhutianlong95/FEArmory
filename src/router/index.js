import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/fe-armory',
    component: () => import('../views/FEArmory/FEArmory.vue')
  }
  // {
  //   path: '/suspensionView',
  //   component: () => import('../views/Suspension/SuspensionView.vue')
  // },
  // {
  //   path: '/counterView',
  //   component: () => import('../views/Counter/CounterView.vue')
  // },
  // {
  //   path: '/timeBoardView',
  //   component: () => import('../views/TimeBoard/TimeBoardView.vue')
  // }
]

const router = new Router({ routes })
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
