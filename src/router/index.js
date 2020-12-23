import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/scaleWindow'
  },
  {
    path: '/scaleWindow',
    component: () => import('../views/ScaleWindow.vue')
  }
]

const router = new Router({ routes })
// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export default router
