import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Texperia Techsolutions Pvt. Ltd. - Digital Engagement & Experiential Products',
      description:
        'Texperia creates cutting-edge digital engagement and experiential products that transform how businesses connect with audiences.',
    },
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/ProductView.vue'),
    meta: {
      title: "Playda - Texperia's Flagship Product",
      description:
        'Playda is our flagship product designed to elevate engagement through gamification for customer loyalty and employee engagement.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Texperia - Get in Touch',
      description:
        'Get in touch with Texperia for innovative digital engagement solutions and experiential products.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
