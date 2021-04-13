import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        path: '/fe-armory',
        component: () => import('../views/FEArmory/FEArmory.vue'),
        children: [
          {
            path: '/fe-armory/counter',
            component: () => import('../views/FEArmory/Components/Counter/CounterView.vue')
          },
          {
            path: '/fe-armory/suspension',
            component: () => import('../views/FEArmory/Components/Suspension/SuspensionView.vue')
          },
          {
            path: '/fe-armory/echart-demo1',
            component: () => import('../views/FEArmory/Components/EChartsDemo1/EChartsDemo1.vue')
          },
          {
            path: '/fe-armory/magic-card',
            component: () => import('../views/FEArmory/Components/MagicCard/MagicCardView.vue')
          },
          {
            path: '/fe-armory/drag-box',
            component: () => import('../views/FEArmory/Components/DragBox/DragBoxView.vue')
          },
          {
            path: '/fe-armory/card-drag',
            component: () => import('../views/FEArmory/Components/CardDrag/CardDragView.vue')
          }
        ]
      }
    ]
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
