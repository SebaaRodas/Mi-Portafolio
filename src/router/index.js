import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/certificaciones',
    name: 'certificaciones',
    component: () => import(/* webpackChunkName: "certificaciones" */ '../views/Certificaciones.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/Proyectos.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/Contacto.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
