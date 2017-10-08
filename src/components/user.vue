<template>
  <div class="user">
    <div class="container">
      <div class="row">
        <div class="user_wrapper">
          <div class="user_title">
            {{user.first_name}} {{user.last_name}} {{user.phone}}
          </div>

          <div class="user_content">
            <!-- First Name -->
            <div class="form-group">
              <label>Имя</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.first_name" placeholder="First Name" aria-label="First Name" aria-describedby="sizing-addon1">
              </div>
            </div>

            <!-- Last Name -->
            <div class="form-group">
              <label>Фамилия</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.last_name" placeholder="Last Name" aria-label="Last Name" aria-describedby="sizing-addon1">
              </div>
            </div>

            <!-- Email -->
            <div class="form-group">
              <label>Email</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.email" placeholder="Email" aria-label="Email" aria-describedby="sizing-addon1">
              </div>
            </div>

            <!-- Avatar-->
            <div class="form-group">
              <label for="last_name">URL картинки</label>
              <div class="avatar_wrap">
                <img :src="user.picture" alt="" class="avatar">                
              </div>
              <div class="input-group input-group-lg">
                <button type="button" class="btn btn-primary avatar">Выбрать новую</button>
                <input type="text" class="form-control" v-model="user.picture" placeholder="Avatar" aria-label="Username" aria-describedby="sizing-addon1">
              </div>
            </div>

            <!-- Age -->
            <div class="form-group">
              <label for="last_name">Возраст</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.age" placeholder="Age" aria-label="Username" aria-describedby="sizing-addon1">
              </div>
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
                <input type="text" class="form-control" v-model="user.balance" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
              </div>
            </div>

            <!-- Phone -->
            <div class="form-group">
              <label for="last_name">Телефон</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.phone" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
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
              <textarea class="form-control" v-model="user.about" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <!-- Company -->
            <div class="form-group">
              <label for="last_name">Дата регистрации</label>
              <div class="input-group input-group-lg">
                <input type="text" class="form-control" v-model="user.registered" placeholder="Username" aria-label="Username" aria-describedby="sizing-addon1">
              </div>
            </div>

            <hr>

            <div class="json">
              <pre>{{ user }}</pre>
            </div>

            <button type="button" class="btn btn-success save">Сохранить изменения</button>
            <button type="button" class="btn btn-danger">Удалить пользователя</button>

          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from '../assets/data.json'

export default {
  name: 'user',

  data: () => ({
    user: users[0]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user_wrapper {
  margin: 60px 0 100px;
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
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

hr {
  margin: 30px 0;
}

.json {
  padding: 10px;
  background: #f5f5f5;
  border: 1px solid #cccccc;
  border-radius: 4px;
  margin-bottom: 20px;
}

button.save {
  margin-right: 10px;
}

button:active {
  transform: translate(1px, 1px);
}

</style>
