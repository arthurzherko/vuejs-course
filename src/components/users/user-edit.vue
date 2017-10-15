<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <user-form v-if="user" v-model="user"></user-form>

        <div class="json-wrap">
          <hr>
          <div class="json">
            <pre>{{ user }}</pre>
          </div>

          <span v-show="errors.all()" class="form-text text-danger" v-for="item in errors.all()" :key="item">*{{ item }}</span>

          <div class="buttons-group">
            <button type="button" class="btn btn-success save" @click="saveUser">
              <preloader :width="18" :height="18" v-if="preloader"></preloader>
              <span v-else>Сохранить изменения</span>
            </button>
            <button type="button" class="btn btn-danger" @click="deleteUser">Удалить пользователя</button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import userForm from '@/components/users/user-form'

export default {
  name: 'user-edit',

  props: {
    id: String,
    required: true
  },

  components: {
    userForm,
    Preloader: () => import('@/components/common/preloader')
  },

  data: () => ({
    user: null,
    restUrl: 'http://localhost:3004/users/',
    preloader: false,
    veeErrors: []
  }),

  mounted () {
    this.loadData()
  },

  computed: {
    url () {
      return `${this.restUrl}${this.id}`
    }
  },

  methods: {
    loadData () {
      axios.get(this.url)
        .then(res => res.data)
        .then(res => {
          this.user = res
        })
    },

    saveUser () {
      this.$validator.validateAll()
      if (this.errors.any()) {
        return
      }

      this.preloader = true
      axios.put(this.url, this.user)
        .then(res => res.data)
        .then((res) => {
          this.preloader = false
        })
    },

    deleteUser () {
      axios.delete(this.url)
        .then(res => res.data)
        .then((res) => {
          this.$router.push('/users')
        })
    }
  }
}
</script>

<style scoped>

button.save {
  margin: 0 10px 0 0;
  min-width: 155px;
}

button:active {
  transform: translate(1px, 1px);
}

hr {
  margin: 30px 0;
}

.json {
  padding: 10px;
  background: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

.json pre {
  padding-bottom: 20px;
}

.buttons-group {
  margin-top: 20px;
}

</style>
