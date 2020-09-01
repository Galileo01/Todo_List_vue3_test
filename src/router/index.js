import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //打包 部署后，index.html 重定向到 /
  {
    path: '/index.html',
    name: 'Home',
    component: Home
  },
  //部署到 github  Todo_List_vue3_test 仓库  pages 服务   
  {
    path: '/Todo_List_vue3_test/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
