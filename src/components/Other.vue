<template>
  <div>
    <h1>Просто статистика</h1>
    <div v-if="isSession === 'ok'">
      <span class="count">Всего: {{ isAllTodos }}</span>
      <span class="count">Сделано: {{ isDoneTodos }}</span>
      <span class="count">В Работе: {{ isProcessTodos }}</span>
    </div>
    <p v-else>
      Пожалуйста, 
      <router-link to="/">авторизуйтесь</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters([
    "isAllTodos",
    "isDoneTodos",
    "isProcessTodos",
    "isSession"
  ])
};
</script>

<style scoped>
.count {
  font-size: 24px;
  font-weight: bold;
  padding: 5px;
  border: 5px solid #ccc;
}
</style>