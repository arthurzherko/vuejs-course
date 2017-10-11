<template>
  <div class="home">
    <!-- <h2>Home Page of VueJs Course</h2>
    <img src="./../assets/logo.png" alt=""> -->
    <button @click="openUsers">open next user</button>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',

  data: () => ({
    users: [],
    group_id: 'chop.choppp',
    group_id2: 'freedump',
    offset: 100,
    all: [],
    counter: 0
  }),

  mounted () {
    // setInterval(() => {
    //   this.loadData()
    //   this.offset += 1000
    //   if (this.filteredUser) {
    //     this.counter += this.filteredUser.length
    //     console.log(this.counter, this.offset)
    //     this.saveTelok()
    //   }
    // }, 1000)
    this.loadData()
  },

  computed: {
    // filteredUser () {
    //   if (this.users) {
    //     const f = this.users
    //       .filter(item => item.city === 281)
    //       .filter(item => item.sex === 1)
    //     return f
    //   }
    // }
  },

  methods: {

    // loadData () {
    //   this.$jsonp('https://api.vk.com/method/groups.getMembers', {
    //     group_id: 'chop.choppp',
    //     fields: 'city,sex',
    //     offset: this.offset
    //   })
    //     .then(json => {
    //       this.users = json.response.users
    //     })
    // },

    // saveTelok () {
    //   axios.post('http://localhost:3004/users', this.filtered)
    //     .then(res => res.data)
    // },

    loadData () {
      axios.get('http://localhost:3004/users')
        .then(res => res.data)
        .then(res => {
          this.users = res
        })
    },

    openUsers () {
      window.open(`http://vk.com/${this.users[this.counter]}`)
      console.log(this.counter, this.users[this.counter])
      this.counter += 1
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

button {
  display: block;
  margin: 70px auto;
  height: 50px;
  width: 300px;
}

</style>
