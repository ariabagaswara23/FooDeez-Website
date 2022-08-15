import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'home',
  component: () =>
    import('../views/Home.vue')
},
{
  path: '/menu',
  name: 'menu',
  component: () =>
    import('../views/Menu.vue')
},
{
  path: '/gallery',
  name: 'gallery',
  component: () =>
    import('../views/Gallery.vue')
},
{
  path: '/cart',
  name: 'cart',
  component: () =>
    import('../views/Cart.vue')
},
{
  path: '/checkout',
  name: 'checkout',
  component: () =>
    import('../views/Checkout.vue')
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
