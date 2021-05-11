import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/order.vue'
import profile from '../pages/profile/profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/msite'
  }, {
    path: '/msite',
    component: MSite,
    meta: {
      showFooter: true
    }
  }, {
    path: '/order',
    component: Order,
    meta: {
      showFooter: true
    }
  }, {
    path: '/profile',
    component: profile,
    meta: {
      showFooter: true
    }
  }, {
    path: '/search',
    component: Search,
    meta: {
      showFooter: true
    }
  }, {
    path: '/login',
    component: Login
  }]
})
