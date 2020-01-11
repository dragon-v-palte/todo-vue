<template>
  <div>
    <transition name="login-fade" mode="out-in">
      <div key="welcome" v-if="isSession === 'ok'">
        <div>
          <h2>Добро пожаловать, {{ userLogin }}</h2>
          <button class="btn-logout" @click="logout">Выйти</button>
        </div>
      </div>

      <div key="unlogin" v-else>
        <h1>Введите 1 логин и 1 пароль для входа</h1>
        <form @submit.prevent="submit">
          <input
            type="text"
            placeholder="Имя пользователя"
            :class="{ loginError: isSession === 'error' , loginEmpty: isSession === 'empty' }"
            v-model="login"
          />
          <input
            type="password"
            placeholder="Пароль"
            :class="{ loginError: isSession === 'error' , loginEmpty: isSession === 'empty' }"
            v-model="password"
          />
          <p v-show="isSession === 'empty'">Заполните поля</p>
          <p v-show="isSession === 'error'">Неправильный логин или пароль. Попробуйте еще раз</p>
          <button type="submit">Войти</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  computed: {
      ...mapGetters(["isSession", "userLogin"])
    },
  methods: {
    ...mapMutations(["checkUser", "logout"]),
    submit() {
      this.checkUser({
        login: this.login,
        password: this.password
      })
      if (this.isSession === "ok")
        this.login = this.password = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
}
input,
button {
  width: 100%;
  margin: 5px 0;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  padding: 5px 10px;
  outline: none;
}
.btn-logout {
  width: auto;
}
.loginError {
  border: 2px solid red;
}
.loginEmpty {
  border: 2px solid royalblue;
}
.login-fade-enter-active,
.login-fade-leave-active {
  transition: 0.5s ease;
}

.login-fade-enter,
.login-fade-leave-to {
  transition: 0.5s;
  opacity: 0;
  transform: scale(0.1);
}
</style>