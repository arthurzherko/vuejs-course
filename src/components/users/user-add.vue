<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <user-form v-model="user"></user-form>

        <button type="button" @click="save" class="btn btn-success save">Сохранить изменения</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import userForm from './user-form'

const date = new Date()
const defaultUser = {
  id: null,
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  eemail: '',
  phone: '',
  address: '',
  about: '',
  registered: date.toLocaleString()
}

export default {
  name: 'user-add',

  components: {
    userForm
  },

  data: () => ({
    user: defaultUser,
    restUrl: 'http://localhost:3004/users/'
  }),

  watch: {
    user: () => {
      console.log('chnaged')
    }
  },

  methods: {
    save () {
      console.log(this.user, defaultUser)
      axios.post(this.restUrl, this.user)
        .then(res => res.data)
        .then((res) => {
          alert('saved')
        })
    }
  }
}
</script>

<style>

.user {
  padding-bottom: 100px;
}

</style>
