import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import UsersList from '@/components/users/users-list'
import AddUser from '@/components/users/user-add'
import UserEdit from '@/components/users/user-edit'
import Users from '@/components/users/users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/users/',
      component: Users,
      children: [
        { path: '', component: UsersList },
        { path: 'edit/:id', component: UserEdit, props: true },
        { path: 'add', component: AddUser }
      ]
    }
  ]
})
