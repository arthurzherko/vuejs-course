<template>
  <div class="paginator">
    <div class="title">
      Выбрана страница - {{ pageNumber }}
    </div>
    <button :disabled="disPrev" @click="prev" class="prev">
      <i class="fa fa-angle-double-left" aria-hidden="true"></i>
    </button>
    <button :class="{ active: item === pageNumber }" v-for="item in totalPages" :key="item" @click="moveTo(item)">
      {{ item }}
    </button>
    <button :disabled="disNext" @click="next" class="next">
      <i class="fa fa-angle-double-right" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'rowsPaginator',

  props: {
    pageNumber: {
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
      return this.pageNumber === 1
    },

    disNext () {
      return this.pageNumber === this.totalPages
    }
  },

  methods: {
    prev () {
      if (this.pageNumber > 1) {
        this.$emit('changed', this.pageNumber - 1)
      }
    },

    next () {
      if (this.pageNumber < this.totalPages) {
        this.$emit('changed', this.pageNumber + 1)
      }
    },

    moveTo (index) {
      this.$emit('changed', index)
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
