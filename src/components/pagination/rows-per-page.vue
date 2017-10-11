<template>
  <div>
    <select :value="value" @input="changed">
      <option v-for="item in list" :key="item" :value="item">
        {{ item }}
      </option>
    </select>

    <div class="per_page">
      Выбрано элементов на страницу: {{ value }}
    </div>
  </div>
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

.per_page {
  font-size: 14px;
  display: inline-block;
  vertical-align: top;
  margin: 15px 0;
  line-height: 35px;
}

</style>
