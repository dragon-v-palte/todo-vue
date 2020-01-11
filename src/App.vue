<template>
  <div id="app">
    <ul class="menu">
      <router-link to="/" class="menu-item">Главная</router-link>
      <router-link to="/todo" class="menu-item">Список</router-link>
      <router-link to="/other" class="menu-item">Статистика</router-link>
    </ul>
    <transition name="app-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: "app"

};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  display: flex;
  flex-direction: row;
  width: 560px;  
  margin: 0 auto 20px;
  padding: 0;
}
.menu-item {
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  margin: 0;
  padding: 15px 20px;
  background: rgb(35, 127, 202);
  list-style: none;
  cursor: pointer;
}
.menu-item:hover {
  background: rgb(85, 167, 252);
  font-weight: bold;
}
a.menu-item {
  text-decoration: none;
  color: inherit;
}
.app-fade-enter-active, .app-fade-leave-active {
  transition: opacity .2s;
}
.app-fade-enter, .app-fade-leave-to {
  opacity: 0;
}
</style>
