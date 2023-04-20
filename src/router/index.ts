import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue'
import Layout from '@/layout/index.vue'
import store from '@/store'
import axios from 'axios'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/userCenter',
    name: 'userCenter',
    component: login,
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: Layout,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/home/index',
        name: 'homeManager',
        component: () => import('@/views/homeManage/index.vue'),
        meta: {
          title: '首页管理'
        }
      },
      {
        path: '/home/child',
        name: '首页子页面',
        component: () => import('@/views/homeManage/child.vue'),
        meta: {
          title: '首页子页面'
        }
      }
    ]
  },
  {
    path: '/team',
    name: 'team',
    component: Layout,
    redirect: '/team/index',
    meta: {
      title: '团队'
    },
    children: [
      {
        path: '/team/index',
        name: 'teamManager',
        component: () => import('@/views/teamMamange/index.vue'),
        meta: {
          title: '团队管理'
        }
      },
      {
        path: '/team/child',
        name: '团队子页面',
        component: () => import('@/views/teamMamange/child.vue'),
        meta: {
          title: '团队子页面'
        }
      }
    ]
  },
  {
    path: '/media',
    name: 'media',
    component: Layout,
    redirect: '/media/index',
    meta: {
      title: '媒体'
    },
    children: [
      {
        path: '/media/index',
        name: '媒体管理',
        component: () => import('@/views/mediaManage/index.vue'),
        meta: {
          title: '媒体管理'
        }
      },
      {
        path: '/media/child',
        name: '媒体子页面',
        component: () => import('@/views/mediaManage/child.vue'),
        meta: {
          title: '媒体子页面'
        }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  console.log(to, 'to....')
  const { token } = store.state
  if (token == '1234') {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    next()
  } else {
    next('/')
  }
})
export default router
