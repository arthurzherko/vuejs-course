<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="logo">
          <router-link to="/" exact>Vue.js Course</router-link>          
        </div>
        <nav>
          <router-link to="/users-list" exact>Список пользователей</router-link>
          <router-link to="/add-user" exact>Добавить пользователя</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #cdd4db;
  height: 57px;
}

a {
  padding: 0 16px;
  color: #414141;
  line-height: 57px;
  -webkit-transition: all 0.17s;
  -moz-transition: all 0.17s;
  transition: all 0.17s;
  text-decoration: none;
}

nav a:hover {
  background: #a2b4c3;
  color: #ffffff;
}

nav a.router-link-active {
  background: #44586a;
  color: #ffffff;
}

.logo a {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 18px;
}

nav a {
  float: left;
  display: block;
  font-size: 14px;
}
</style>
