import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import Kigali from '../views/Kigali.vue'
import NorthP from '../views/NorthP.vue'
import SouthP from '../views/SouthP.vue'
import WestP from '../views/WestP.vue'
import EastP from '../views/EastP.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/WestP',
    name: 'WestP',
    component: WestP,
  },
  {
    path: '/EastP',
    name: 'EastP',
    component: EastP,
  },
  {
    path: '/NorthP',
    name: 'NorthP',
    component: NorthP,
  },
  {
    path: '/Kigali',
    name: 'kigali',
    component: Kigali,
  },
  {
    path: '/SouthP',
    name: 'Southp',
    component: SouthP,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router