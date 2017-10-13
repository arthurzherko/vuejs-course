<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <user-form v-model="user"></user-form>

        <div class="actions">
          <hr>
          <div class="json">
            <pre>{{ user }}</pre>
          </div>

          <button type="button" class="btn btn-success save" @click="save">
            <preloader :width="18" :height="18" v-if="preloader"></preloader>
            <span v-else>Сохранить изменения</span>
          </button>
          <button type="button" class="btn btn-danger" @click="deleteUser">Удалить пользователя</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user-edit',
  props: {
    id: String,
    required: true
  },

  components: {
    userForm: () => import('./user-form'),
    Preloader: () => import('@/components/common/preloader')
  },

  data: () => ({
    user: null,
    restUrl: 'http://localhost:3004/users/',
    preloader: false
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

    save () {
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

.actions {
  flex: 0 0 100%;
}

</style>
