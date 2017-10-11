<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <user-form v-model="user"></user-form>

        <button type="button" class="btn btn-success save" @click="save">Добавить юзера</button>
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

  methods: {
    save () {
      axios.post(this.restUrl, this.user)
        .then(res => res.data)
        .then((res) => {
          this.$router.push(`edit/${res.id}`)
        })
    }
  }
}
</script>
