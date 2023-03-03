// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/Home/Home.vue'),
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: () => import('@/views/Home/AboutUs.vue'),
  },
  {
    path: '/PicturesBeforeSfter',
    name: 'PicturesBeforeSfter',
    component: () => import('@/views/Home/PicturesBeforeSfter.vue'),
  },
    {
    path: '/firstPage',
    name: 'firstPage',
    component: () => import('@/views/Home/firstPage.vue'),
  },
  {
    path: '/OnlineCounseling',
    name: 'OnlineCounseling',
    component: () => import('@/views/Home/OnlineCounseling.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
