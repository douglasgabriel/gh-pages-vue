import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/main/MainPage'
import AboutPage from '@/pages/about/AboutPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        title: 'Douglas Gabriel'
      }
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage,
      meta: {
        title: 'About'
      }
    }
  ]
})
