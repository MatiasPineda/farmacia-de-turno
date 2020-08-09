import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FarmaciaTurno from '../components/Farmacia/FarmaciaTurno'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page - Example App',
    }
  },
  {
    path: '/',
    name: 'FarmaciaTurno',
    component: FarmaciaTurno,
    meta: {
      title: 'Farmacias de Turno'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
