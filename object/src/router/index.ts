import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/nav1/option-one',
      name: 'option-one',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/option-one.vue')
    },
    {
      path:'/nav1/option-two',
      name:'option-two',
      component:()=>import('../views/option-two.vue')
    }
  ]
})

export default router
