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
                Пользователей в базе - {{ usersCount }}
              </div>
              <button type="button" class="update" @click="loadData">
                Обновить таблицу
              </button>
            </div>
            <rows-per-page v-model.number="perPage"></rows-per-page>
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
                  <th>Зарегистрирован</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in filteredUsers" :key="item.id">
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
          <rows-paginator :per-page="perPage"
                          :length="usersCount"
                          v-model.number="pageNumber">
          </rows-paginator>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'users-list',

  components: {
    RowsPerPage: () => import('@/components/pagination/rows-per-page'),
    RowsPaginator: () => import('@/components/pagination/rows-paginator')
  },

  data: () => ({
    users: null,
    perPage: 5,
    pageNumber: 1,
    restUrl: 'http://localhost:3004/users/'
  }),

  mounted () {
    this.loadData()
  },

  computed: {
    filteredUsers () {
      if (this.users) {
        return this.users.filter((item, index) =>
          index < this.pageNumber * this.perPage &&
          index >= this.pageNumber * this.perPage - this.perPage
        )
      }
    },

    usersCount () {
      if (this.users) return this.users.length
    }
  },

  methods: {
    loadData () {
      axios.get(this.restUrl)
        .then(res => res.data)
        .then(res => {
          console.log(res)
          this.users = res
        })
    }
  }
}
</script>

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

</style>
