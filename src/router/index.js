import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Category from '@/components/category'
import ShopCar from '@/components/shopcar'
import User from '@/components/user'
import addCart from '@/components/addCart'
import Test from '@/components/test'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: ShopCar
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/detail',
      name: 'detail',
      component: addCart
    },
      {
          path: '/test',
          name: 'test',
          component: Test
      }
  ]
})
