import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import list01 from '../views/list01.vue'
import list02 from '../views/list02.vue'
import list03 from '../views/list03.vue'
import list04 from '../views/list04.vue'
import list05 from '../views/list05.vue'
import list06 from '../views/list06.vue'
import list07 from '../views/list07.vue'
import list08 from '../views/list08.vue'
import list09 from '../views/list09.vue'
import list10 from '../views/list10.vue'
import list11 from '../views/list11.vue'
import list12 from '../views/list12.vue'
import list13 from '../views/list13.vue'
import list14 from '../views/list14.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'index', component: index },
  { path: '/list01', name: 'list01', component: list01 },
  { path: '/list02', name: 'list02', component: list02 },
  { path: '/list03', name: 'list03', component: list03 },
  { path: '/list04', name: 'list04', component: list04 },
  { path: '/list05', name: 'list05', component: list05 },
  { path: '/list06', name: 'list06', component: list06 },
  { path: '/list07', name: 'list07', component: list07 },
  { path: '/list08', name: 'list08', component: list08 },
  { path: '/list09', name: 'list09', component: list09 },
  { path: '/list10', name: 'list10', component: list10 },
  { path: '/list11', name: 'list11', component: list11 },
  { path: '/list12', name: 'list12', component: list12 },
  { path: '/list13', name: 'list13', component: list13 },
  { path: '/list14', name: 'list14', component: list14 },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
