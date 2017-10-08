import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import UsersList from '@/components/users-list'
import AddUser from '@/components/add-user'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/users-list', name: 'users-list', component: UsersList },
    { path: '/add-user', name: 'add-user', component: AddUser },
    { path: '/user', name: 'user', component: User }
  ]
})
