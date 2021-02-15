import Vue from 'vue'
import VueRouter from 'vue-router'
import FarmaciaTurno from '../views/FarmaciaTurno'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'FarmaciaTurno',
    component: FarmaciaTurno,
    meta: {
      title: 'Farmacias de Turno'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/farmaciasdeturno',
  // base: process.env.BASE_URL,
  routes
})

export default router
