<template>
  <div class="user_wrapper" v-if="user">
    <div class="user_title">
      {{user.firstName}} {{user.lastName}} {{user.phone}}
    </div>

    <div class="user_content">
      <!-- First Name -->
      <div class="form-group">
        <label>Имя</label>
        <div class="input-group input-group-lg">
          <input type="text" name="firstName" class="form-control" :class=" { 'danger-input': errors.has('firstName') } " v-validate="'required|min:3'" data-vv-as="Имя" v-model="user.firstName" placeholder="Имя" aria-label="First Name" aria-describedby="sizing-addon1">
        </div>
        <span v-show="errors.has('firstName')" class="form-text text-danger">{{ errors.first('firstName') }}</span>
      </div>

      <!-- Last Name -->
      <div class="form-group">
        <label>Фамилия</label>
        <div class="input-group input-group-lg">
          <input type="text" name="lastName" class="form-control" :class=" { 'danger-input': errors.has('firstName') } " v-validate="'required|min:3'" data-vv-as="Фамилия" v-model="user.lastName" placeholder="Фамилия" aria-label="Last Name" aria-describedby="sizing-addon1">
        </div>
        <span v-show="errors.has('lastName')" class="form-text text-danger">{{ errors.first('lastName') }}</span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>Email</label>
        <div class="input-group input-group-lg">
          <input type="text" name="email" class="form-control" :class=" { 'danger-input': errors.has('firstName') } " v-validate="'required|email'" data-vv-as="Email" v-model="user.eemail" placeholder="Email" aria-label="Email" aria-describedby="sizing-addon1">
        </div>
        <span v-show="errors.has('email')" class="form-text text-danger">{{ errors.first('email') }}</span>
      </div>

      <!-- picture-->
      <div class="form-group">
        <label for="last_name">URL картинки</label>
        <div class="picture_wrap">
          <img :src="user.picture" v-if="user.picture" alt="" class="picture">
          <div v-else>У юезра нет аватара</div>
        </div>
        <div v-show="!showDropzone" class="input-group input-group-lg">
          <input type="file" ref="picture" class="hidden" @change="uploadPicture">
          <button type="button" class="btn btn-primary picture" @click="selectNewPicture">
            <preloader :width="18" :height="18" v-if="preloader"></preloader>
            <span v-else>Выбрать новую</span>
          </button>
          <input type="text" class="form-control" v-model="user.picture" placeholder="picture" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <drop-zone v-show="showDropzone" v-model="user.picture"></drop-zone>

      <button type="button" class="btn btn-primary toggle-dropzone" @click="toggleDropzone">Изменить способ загрузки</button>

      <!-- Age -->
      <div class="form-group">
        <label for="last_name">Возраст</label>
        <div class="input-group input-group-lg">
          <input type="text" name="age" class="form-control" :class=" { 'danger-input': errors.has('firstName') } " v-validate="'numeric'" data-vv-as="Возраст" v-model.number="user.age" placeholder="Возраст" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
        <span v-show="errors.has('age')" class="form-text text-danger">{{ errors.first('age') }}</span>
      </div>

      <!-- isActive -->
      <div class="form-group">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" v-model="user.isActive" class="form-check-input">
            Активный
          </label>
        </div>
      </div>

      <!-- Balance -->
      <div class="form-group">
        <label for="last_name">Баланс</label>
        <div class="input-group input-group-lg">
          <input type="text" name="balance" class="form-control" v-validate="'decimal:2'" data-vv-as="Баланс" v-model="user.balance" placeholder="Баланс" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
        <span v-show="errors.has('balance')" class="form-text text-danger">{{ errors.first('balance') }}</span>
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label for="last_name">Телефон</label>
        <div class="input-group input-group-lg">
          <input type="text" name="phone" class="form-control" v-model="user.phone" placeholder="Телефон" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Address -->
      <div class="form-group">
        <label for="last_name">Адрес</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="user.address" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Company -->
      <div class="form-group">
        <label for="last_name">Компания</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="user.company" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- About -->
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Биография</label>
        <textarea class="form-control" :rows="30" v-model="user.about" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <!-- Company -->
      <label for="last_name">Дата регистрации</label>
      <date-picker v-model="user.registered"></date-picker>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import ru from 'vee-validate/dist/locale/ru'

Validator.addLocale(ru)
Vue.use(VeeValidate, {
  locale: 'ru'
})

export default {
  name: 'user-form',

  inject: ['$validator'],

  model: {
    prop: 'user'
  },

  props: {
    user: {
      // type: Object,
      required: true
    }
  },

  components: {
    DatePicker: () => import('@/components/common/datepicker'),
    DropZone: () => import('@/components/common/dropzone'),
    preloader: () => import('@/components/common/preloader')
  },

  data: () => ({
    showDropzone: true,
    preloader: false
  }),

  mounted () {

  },

  methods: {

    selectNewPicture () {
      this.$refs.picture.click()
    },

    uploadPicture () {
      this.preloader = true
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.picture.files[0])

      const config = {
        headers: {
          'Authorization': 'Client-ID f5ef23b782d3338'
        }
      }

      axios.post(url, data, config)
        .then(res => res.data)
        .then(res => {
          this.user.picture = res.data.link
          this.$refs.picture.value = ''
          this.preloader = false
        })
    },

    toggleDropzone () {
      this.showDropzone = !this.showDropzone
    }
  }
}
</script>

<style scoped>
.user_wrapper {
  margin: 60px 0 20px;
  width: 100%;
  border: 1px solid #44586a;
  border-radius: 4px;
}

.user_title {
  background-color: #44586a;
  color: #fff;
  padding: 10px 15px;
  font-size: 14px;
}

.user_content {
  margin: 20px 15px;
}

textarea, input {
  font-size: 14px;
}

label {
  font-weight: 600;
  font-size: 14px;
}

button.picture {
  display: block;
  margin-right: 10px;
  min-width: 140px;
}

img.picture {
  margin-bottom: 20px;
  max-width: 300px;
}

button.toggle-dropzone {
  margin: 30px 0;
}

textarea {
  min-height: 150px;
}

.hidden {
  display: none;
}

input:focus,
textarea:focus {
  border-color: #28a745;
}

input.danger-input {
  border-color: #dc3545;
}

</style>
