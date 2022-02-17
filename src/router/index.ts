import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
// createWebHistory,
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页 🏠',
      desc: '是主页呀',
      icon: ''
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于 👀',
      desc: '一些相关信息',
      icon: ''
    }
  },
  {
    path: '/table',
    name: 'Table 啊',
    component: () => import('../views/table-demo/index.vue'),
    meta: {
      title: '表格示例 🎾',
      desc: '表格和它的API',
      icon: ''
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/form-demo/index.vue'),
    meta: {
      title: '表单示例 📌',
      desc: '表单和它的API',
      icon: ''
    }
  },
  {
    path: '/showmodel',
    name: 'ShowModel',
    component: () => import('../views/three/loadmodel/index.vue'),
    meta: {
      title: 'Three.js相关 🎇',
      desc: '三维，立体，酷炫屌炸！',
      icon: ''
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user-demo/index.vue'),
    meta: {
      title: 'user 👨🏽',
      desc: '用户管理',
      icon: ''
    }
  },
  {
    path: '/datav',
    name: 'datav',
    component: () => import('../views/datav-demo/index.vue'),
    meta: {
      title: 'datav 📊',
      desc: 'datav',
      icon: ''
    }
  },
  {
    path: '/three_base',
    name: 'three_base',
    component: () => import('../views/three/base/index.vue'),
    meta: {
      title: 'threeJs基础示例 ♦',
      desc: '基础示例',
      icon: ''
    }
  },
  {
    path: '/three_animate',
    name: 'three_animate',
    component: () => import('../views/three/animate/index.vue'),
    meta: {
      title: 'threeJs 动效✨',
      desc: '好看的动画',
      icon: ''
    }
  },
  {
    path: '/three_control',
    name: 'three_control',
    component: () => import('../views/three/control/index.vue'),
    meta: {
      title: 'threeJs 控制器控制 🎮',
      desc: '控制器啊',
      icon: ''
    }
  },
  {
    path: '/three_city',
    name: 'city',
    component: () => import('../views/three/city/index.vue'),
    meta: {
      title: '智慧城市🏗',
      desc: '智慧城市',
      icon: ''
    }
  },
  {
    path: '/earth',
    name: 'Earth',
    component: () => import('../views/three/earth/index.vue'),
    meta: {
      title: 'erath 🌏',
      desc: 'a funny ball',
      icon: ''
    }
  }
]
// // history: createWebHistory(process.env.BASE_URL),
const router = createRouter({ history: createWebHashHistory(process.env.BASE_URL), routes })

export default router
