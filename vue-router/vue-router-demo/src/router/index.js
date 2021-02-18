import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import AboutChildren1 from '../views/About/AboutChildren1.vue'
import AboutChildren2 from '../views/About/AboutChildren2.vue'
import HomeChildren1 from '../views/Home/HomeChildren1.vue'
import HomeChildren2 from '../views/Home/HomeChildren2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: "/Home/HomeChildren1",
        component: HomeChildren1
      },
      {
        path: "/Home/HomeChildren2",
        component: HomeChildren2
      }

    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: "/About/AboutChildren1",
        component: AboutChildren1
      },
      {
        path: "/About/AboutChildren2",
        component: AboutChildren2
      }
    ]
  },
  //重定向, * 表示匹配所有，当上面的路径都不符合时,重定向到 /Home
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
