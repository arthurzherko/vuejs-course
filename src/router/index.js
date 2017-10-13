import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/home')
const Users = () => import('@/components/users/users')
const UsersList = () => import('@/components/users/users-list')
const UserEdit = () => import('@/components/users/user-edit')
const AddUser = () => import('@/components/users/user-add')

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
