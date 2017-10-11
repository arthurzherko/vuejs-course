<template>
  <div>
    <zh-header></zh-header>
    <router-view/>
  </div>
</template>

<script>
import zhHeader from './components/header'

export default {
  name: 'app',

  components: {
    zhHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #414141;
}

button {
  cursor: pointer;
  outline: none !important;
}
</style>
