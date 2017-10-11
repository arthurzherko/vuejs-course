<template>
  <div class="user_wrapper" v-if="value">
    <div class="user_title">
      {{value.firstName}} {{value.lastName}} {{value.phone}}
    </div>

    <div class="user_content">
      <!-- First Name -->
      <div class="form-group">
        <label>Имя</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.firstName" placeholder="First Name" aria-label="First Name" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Last Name -->
      <div class="form-group">
        <label>Фамилия</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.lastName" placeholder="Last Name" aria-label="Last Name" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>Email</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.eemail" placeholder="Email" aria-label="Email" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Avatar-->
      <div class="form-group">
        <label for="last_name">URL картинки</label>
        <div class="avatar_wrap">
          <img :src="value.picture" v-if="value.picture" alt="" class="avatar">
          <div v-else>У юезра нет аватара</div>
        </div>
        <div class="input-group input-group-lg">
          <button type="button" class="btn btn-primary avatar">Выбрать новую</button>
          <input type="text" class="form-control" v-model="value.picture" placeholder="Avatar" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Age -->
      <div class="form-group">
        <label for="last_name">Возраст</label>
        <div class="input-group input-group-lg">
          <input type="number" class="form-control" v-model.number="value.age" placeholder="Age" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- isActive -->
      <div class="form-group">
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" v-model="value.isActive" class="form-check-input">
            Активный
          </label>
        </div>
      </div>

      <!-- Balance -->
      <div class="form-group">
        <label for="last_name">Баланс</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.balance" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label for="last_name">Телефон</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.phone" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Address -->
      <div class="form-group">
        <label for="last_name">Адрес</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.address" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- Company -->
      <div class="form-group">
        <label for="last_name">Компания</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.company" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

      <!-- About -->
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Биография</label>
        <textarea class="form-control" v-model="value.about" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <!-- Company -->
      <div class="form-group">
        <label for="last_name">Дата регистрации</label>
        <div class="input-group input-group-lg">
          <input type="text" class="form-control" v-model="value.registered" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    value: {
      required: true
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

label {
  font-weight: 600;
  font-size: 14px;
}

img.avatar {
  margin-bottom: 20px;
}

textarea, input {
  font-size: 14px;
}

button.avatar {
  display: block;
  margin-right: 10px;
}

</style>
