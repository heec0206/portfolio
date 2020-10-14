import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: 'index',
      metaTags: [{ name: 'description', content: 'index'}]
    }
  },
  {
    path: '/sub',
    name: 'sub',
    component: () => import(/* webpackChunkName: "sub" */ '../views/sub.vue'),
    meta: {
      title: 'sub',
      metaTags: [{ name: 'description', content: 'sub'}]
    }
  },
  {
    path: '/list01',
    name: 'list01',
    component: () => import(/* webpackChunkName: "list01" */ '../views/list01.vue'),
    meta: {
      title: 'list01',
      metaTags: [{ name: 'description', content: 'list01'}]
    }
  },
  {
    path: '/list02',
    name: 'list02',
    component: () => import(/* webpackChunkName: "list02" */ '../views/list02.vue'),
    meta: {
      title: 'list02',
      metaTags: [{ name: 'description', content: 'list02'}]
    }
  },
  {
    path: '/list03',
    name: 'list03',
    component: () => import(/* webpackChunkName: "list03" */ '../views/list03.vue'),
    meta: {
      title: 'list03',
      metaTags: [{ name: 'description', content: 'list03'}]
    }
  },
  {
    path: '/list04',
    name: 'list04',
    component: () => import(/* webpackChunkName: "list04" */ '../views/list04.vue'),
    meta: {
      title: 'list04',
      metaTags: [{ name: 'description', content: 'list04'}]
    }
  },
  {
    path: '/list05',
    name: 'list05',
    component: () => import(/* webpackChunkName: "list05" */ '../views/list05.vue'),
    meta: {
      title: 'list05',
      metaTags: [{ name: 'description', content: 'list05'}]
    }
  },
  {
    path: '/list06',
    name: 'list06',
    component: () => import(/* webpackChunkName: "list06" */ '../views/list06.vue'),
    meta: {
      title: 'list06',
      metaTags: [{ name: 'description', content: 'list06'}]
    }
  },
  {
    path: '/list07',
    name: 'list07',
    component: () => import(/* webpackChunkName: "list07" */ '../views/list07.vue'),
    meta: {
      title: 'list07',
      metaTags: [{ name: 'description', content: 'list07'}]
    }
  },
  {
    path: '/list08',
    name: 'list08',
    component: () => import(/* webpackChunkName: "list08" */ '../views/list08.vue'),
    meta: {
      title: 'list08',
      metaTags: [{ name: 'description', content: 'list08'}]
    }
  },
  {
    path: '/list09',
    name: 'list09',
    component: () => import(/* webpackChunkName: "list09" */ '../views/list09.vue'),
    meta: {
      title: 'list09',
      metaTags: [{ name: 'description', content: 'list09'}]
    }
  },
  {
    path: '/list10',
    name: 'list10',
    component: () => import(/* webpackChunkName: "list10" */ '../views/list10.vue'),
    meta: {
      title: 'list10',
      metaTags: [{ name: 'description', content: 'list10'}]
    }
  },
  {
    path: '/list11',
    name: 'list11',
    component: () => import(/* webpackChunkName: "list11" */ '../views/list11.vue'),
    meta: {
      title: 'list11',
      metaTags: [{ name: 'description', content: 'list11'}]
    }
  },
  {
    path: '/list12',
    name: 'list12',
    component: () => import(/* webpackChunkName: "list12" */ '../views/list12.vue'),
    meta: {
      title: 'list12',
      metaTags: [{ name: 'description', content: 'list12'}]
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
