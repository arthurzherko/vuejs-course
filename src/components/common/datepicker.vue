<template>
  <div class="calendar" ref="datepicker">
    <input type="text" :value="value" :placeholder="placeholder" data-input>
    <button type="button" class="bt-calendar" data-toggle>
      <i class="fa fa-calendar" aria-hidden="true"></i>
    </button>
    <button type="button" data-clear>
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import flatpickr from 'flatpickr'
import { Russian } from 'flatpickr/dist/l10n/ru.js'
import 'flatpickr/dist/flatpickr.css'

export default {
  name: 'calendar',

  props: {
    value: {
      type: String,
      required: true
    },

    placeholder: {
      type: String,
      default: 'Выберите дату'
    }
  },

  data: () => ({
    fp: null
  }),

  watch: {
    value: 'updateDatepicker'
  },

  mounted () {
    this.initDatePicker()
  },

  methods: {
    updateDatepicker () {
      if (this.fp) {
        this.fp.setDate(this.value)
      }
    },

    initDatePicker () {
      this.fp = flatpickr(this.$refs.datepicker, {
        dateFormat: 'd.m.Y',
        locale: Russian,
        wrap: true,
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    },

    clear () {
      this.fp.clear()
    },

    toggle () {
      this.fp.toggle()
    }
  }
}
</script>

<style scoped>

.calendar {
  width: auto;
  overflow: hidden;
}

input {
  border-radius: .25rem;
  border: 1px solid rgba(0,0,0,.15);
  border-right: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  width: 200px;
  float: left;
}

button {
  float: left;
  height: 40px;
  background: none;
  border: 1px solid rgba(0,0,0,.15);
  padding: 0 12px;
}

button i {
  font-size: 22px;
}

button.bt-calendar {
  border-right: none;
  padding: 0 15px;
}

button.bt-calendar i {
  font-size: 17px;
}
</style>
