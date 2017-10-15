<template>
  <div class="user">
    <div class="container">
      <div class="row">
          <user-form v-model="user"></user-form>

          <div class="d-flex-12">
            <span v-show="errors.all()" class="form-text text-danger" v-for="item in errors.all()" :key="item">*{{ item }}</span>

            <button type="button" class="btn btn-success save" @click="saveUser">Добавить пользователя</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import userForm from '@/components/users/user-form'

const date = new Date()
const defaultUser = {
  id: null,
  isActive: false,
  balance: '',
  picture: 'https://placehold.it/128x128',
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
    saveUser () {
      this.$validator.validateAll()
      if (this.errors.any()) {
        return
      }

      axios.post(this.restUrl, this.user)
        .then(res => res.data)
        .then((res) => {
          this.$router.push(`edit/${res.id}`)
        })
    }
  }
}
</script>

<style scoped>

button.save {
  display: block;
  margin-top: 20px;
}
</style>
