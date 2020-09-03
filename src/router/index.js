// 导入下载好的vue-router
import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入登陆组件
import Login from '@/views/login'
import Home from '@/views/home'

// 使用vue-router
Vue.use(VueRouter)

// 创建一个对象
const router = new VueRouter({
  routes: [{
    //   登录组件
    path: '/login',
    component: Login
  }, {
    //   登录组件
    path: '/',
    component: Home
  }]
})

// 导出router
export default router
