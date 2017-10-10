<template>
  <div class="home">
    <!-- <h2>Home Page of VueJs Course</h2>
    <img src="./../assets/logo.png" alt=""> -->

    <pre>{{users}}</pre>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    users: [],
    group_id: 'chop.choppp'
  }),

  mounted () {

  },

  methods: {
    
    loadData() {
      VK.init({
          apiId: 143693191 // ID вашего приложения VK
      });

      function getMembers(group_id) {
        VK.Api.call('groups.getById', {group_id: this.group_id, fields: 'city,sex'}, function(r) {
            if(r.response) {
              this.users = r.response
            }
        });
      }
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
