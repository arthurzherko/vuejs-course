<template>
  <select :value="value" @input="changed">
    <option v-for="item in list" :key="item" :value="item">
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'rowsPerPage',

  props: {
    value: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    list: [2, 5, 10, 100, 400]
  }),

  methods: {
    changed (event) {
      this.$emit('input', Number(event.target.value))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

select {
  margin: 15px 20px;
  min-width: 130px;
  height: 35px;
  outline: none;
}

</style>
