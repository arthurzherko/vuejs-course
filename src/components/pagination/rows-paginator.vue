<template>
  <div class="paginator">
    <div class="title">
      Выбрана страница - {{ value }}
    </div>
    <button type="button" :disabled="disPrev" class="prev" @click="prev">
      <i class="fa fa-angle-double-left" aria-hidden="true"></i>
    </button>
    <button type="button" v-for="item in totalPages" :key="item" :class="isActive(item)" @click="moveTo(item)">
      {{ item }}
    </button>
    <button type="button" :disabled="disNext" class="next" @click="next">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'rowsPaginator',

  props: {
    value: {
      type: Number,
      required: true
    },

    length: {
      type: Number,
      required: true,
      default: 0
    },

    perPage: {
      type: Number,
      required: true
    }
  },

  computed: {
    totalPages () {
      return Math.ceil(this.length / this.perPage)
    },

    disPrev () {
      return this.value === 1
    },

    disNext () {
      return this.value === this.totalPages
    }
  },

  watch: {
    perPage () {
      this.$emit('input', 1)
    }
  },

  methods: {
    prev () {
      if (this.value > 1) this.moveTo(this.value - 1)
    },

    next () {
      if (this.value < this.totalPages) this.moveTo(this.value + 1)
    },

    moveTo (index) {
      this.$emit('input', index)
    },

    isActive (item) {
      if (item === this.value) return 'active'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.paginator {
  margin: 0 15px 15px;
  width: calc(100% - 30px);
  overflow: hidden;
}

.title {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 14px;
}

button {
  float: left;
  display: block;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-left: none;
  background: #ffffff;
  margin: 0 0 10px;
  padding: 5px 10px;
  color: #44586a;
  font-weight: 600;
}

button.active {
  background: #a2b4c3;
  color: #ffffff;
}

button[disabled] {
  cursor: not-allowed;
  opacity: .5;
}

button.prev {
  border-left: 1px solid #ccc;
  border-radius: 2px 0 0 2px;
}

button.next {
  border-radius: 0 2px 2px 0;
}

</style>
