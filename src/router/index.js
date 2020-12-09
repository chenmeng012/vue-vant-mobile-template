import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/foreign-capital',
    component: () => import('@/views/foreign-capital/index.vue')
  },
  {
    path: '/my',
    component: () => import('@/views/my/index.vue')
  }
]

export const router = new VueRouter({
  routes
})
