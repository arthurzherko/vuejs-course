<template>
  <div class="home">
    <!-- <h2>Home Page of VueJs Course</h2>
    <img src="./../assets/logo.png" alt=""> -->

    <pre>{{users}}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data: () => ({
    users: [],
    group_id: 'chop.choppp',
    newusers: []
  }),

  mounted () {
    this.loadData()
  },

  methods: {

    loadData () {
      axios.get('https://api.vk.com/method/groups.getMembers?group_id=chop.choppp&fields=city,sex')
        .then(res => res.data)
        .then(res => {
          this.users = res
          this.filterUser()
        })
    },

    filterUser () {
      console.log(this.users.users.length)
      this.newusers = this.users.users
        .filter(item => item.city === 281)
        .filter(item => item.sex === 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2 {
  text-align: center;
  margin: 60px 0 20px;
}

img {
  display: block;
  margin: 0 auto;
}

</style>
