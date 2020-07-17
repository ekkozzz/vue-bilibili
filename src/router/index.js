import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    meta: { isLogin: true },
    component: () => import('../views/UserInfo.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    meta: { isLogin: true },
    component: () => import('../views/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    !localStorage.getItem('Token') &&
    !localStorage.getItem('id') &&
    to.isLogin === true
  ) {
    router.push('/login')
    return
  }
  next()
})

export default router
