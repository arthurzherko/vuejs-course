<template>
  <div class="users-list">
    <div class="container">
      <div class="row">
        <div class="table_wrapper col">
          <div class="table_title">
            Список пользователей
          </div>
          <div class="table_content">
            <div class="table_subtitle">
              <div class="length">
                Пользователей в базе - {{ totalLength }}
              </div>
              <button class="update" @click="loadData">
                Обновить таблицу
              </button>
            </div>
            <zh-perpage v-model.number="perPage"></zh-perpage>
            <div class="per_page">
              Выбрано элементов на страницу: {{ perPage }}
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Имя</th>
                  <th>Фамилия</th>
                  <th>Активен</th>
                  <th>Баланс</th>
                  <th>Email</th>
                  <th>Телефон</th>
                  <th>Зарегестрирован</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filtredUsers" :key="item.id">
                  <th scope="row"><router-link :to="`/users/edit/${item.id}`">#{{ item.id }}</router-link></th>
                  <td>{{ item.firstName }}</td>
                  <td>{{ item.lastName }}</td>
                  <td>{{ item.isActive }}</td>
                  <td>{{ item.balance }}</td>
                  <td>{{ item.eemail }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.registered }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <zh-paginator :per-page="perPage"
                        :length="totalLength"
                        :page-number="pageNumber"
                        v-on:changed="onChanged">
          </zh-paginator>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RowsPerPage from '../pagination/rows-per-page'
import RowsPaginator from '../pagination/rows-paginator'

export default {
  name: 'users-list',

  components: {
    'zh-perpage': RowsPerPage,
    'zh-paginator': RowsPaginator
  },

  data: () => ({
    users: [],
    perPage: 5,
    pageNumber: 1,
    restUrl: 'http://localhost:3004/users/'
  }),

  mounted () {
    this.loadData()
  },

  watch: {
    perPage () {
      this.pageNumber = 1
    }
  },

  computed: {
    filtredUsers () {
      const i = this.pageNumber * this.perPage
      return this.users.slice(i - this.perPage, i)
    },

    totalLength () {
      return this.users.length
    }
  },

  methods: {
    onChanged (page) {
      this.pageNumber = page
    },

    loadData () {
      axios.get(this.restUrl)
        .then(res => res.data)
        .then(res => {
          this.users = res
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table_wrapper {
  margin: 60px 0 100px;
  width: 100%;
  border: 1px solid #44586a;
  border-radius: 6px;
  padding: 0;
}

.table_title {
  background-color: #44586a;
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px 4px 0 0;
}

.table_content {
  margin: 15px;
  border: 1px solid #ccc;
  border-radius: 4px
}

.table_subtitle {
  padding: 10px;
  background-color: #f5f5f5;
  width: 100%;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}

.length {
  font-size: 14px;
  float: left;
}

button.update {
  float: right;
  display: block;
  background: #ffffff;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button.update:active {
  transform: translate(0, 1px);
}

.per_page {
  font-size: 14px;
  display: inline-block;
  vertical-align: top;
  margin: 15px 0;
  line-height: 35px;
}

</style>
