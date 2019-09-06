import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/pages/index.vue' 
import changeCity from '@/pages/changeCity.vue' 
import goodList from '@/pages/goodList.vue' 
import Login from '@/pages/login.vue'
import Register from '@/pages/register.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: goodList
        },
        {
          path: '/index',
          name: 'index',
          component: Index
        },
        {
          path: '/changecity',
          name: 'changecity',
          component: changeCity
        }
      ]
    },
    , 
    {
      path: '/blank',
      name: 'blank',
      component: blankPage,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
