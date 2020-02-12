import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/pages/main/MainPage'
import ResumePage from '@/pages/resume/ResumePage'

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
      path: '/resume',
      name: 'ResumePage',
      component: ResumePage,
      meta: {
        title: 'Resume'
      }
    }
  ]
})
