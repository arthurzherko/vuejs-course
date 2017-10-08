<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <user-form v-model="user"></user-form>

        <hr>

        <div class="json">
          <pre>{{ user }}</pre>
        </div>

        <button type="button" @click="save" class="btn btn-success save">Сохранить изменения</button>
        <button type="button" class="btn btn-danger">Удалить пользователя</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import userForm from './user-form'

export default {
  name: 'user-edit',
  props: {
    id: String
  },

  components: {
    userForm
  },

  data: () => ({
    user: null,
    restUrl: 'http://localhost:3004/users/'
  }),

  watch: {
    $route: 'test'
  },

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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button.save {
  margin: 0 10px 0 0;
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

</style>
