<template>
  <div>
    <div v-if="isSession === 'ok'">
      <TodoForm />
      <p v-if="validTodoList.length === 0">Список пуст</p>
      <div v-else>
        <transition-group name="list-fade" tag="ol" class="todo-list">
          <li
            class="listItem list-fade-item"
            v-for="(todo, index) in validTodoList"
            :key="todo.id"
            :class="{ completed: todo.completed }"
            @click="todo.completed = !todo.completed"
          >
            <h2 class="itemText">{{ todo.title }}</h2>
            <button class="itemRemove" @click="deleteTodo(index)">&times;</button>
          </li>
        </transition-group>
        <br />
        <button class="clear" @click="deleteAllTodos()">Очистить</button>
      </div>
    </div>
    <div v-else>
      <h3>Нет доступа</h3>
      <p>
        Пожалуйста,
        <router-link to="/">авторизуйтесь</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TodoForm from "./TodoForm";
export default {
  name: "TodoMain",
  computed: mapGetters([
    "validTodoList",
    "isAllTodos",
    "isDoneTodos",
    "isProcessTodos",
    "isSession"
  ]),
  methods: mapActions(["fetchTodos", "deleteTodo", "deleteAllTodos"]),
  components: { TodoForm },
  async mounted() {
    //this.fetchTodos(8);
  }
};
</script>

<style scoped>
.listItem {
  position: relative;
  margin: 0px auto;
  width: 500px;
  font-size: 20px;
  background: #ccc;
  padding: 5px 10px;
}

.listItem:nth-child(odd) {
  background: #eee;
}

.listItem:hover {
  cursor: pointer;
  background: #999 !important;
}

.todo-list {
  border: 0px solid black;
  margin: 0 auto;
  padding: 0;
  width: 500px;
  background: #eee;
}

.completed {
  background: #9e9 !important;
  color: #333;
}

.completed:nth-child(odd) {
  background: #ccffcc !important;
  color: #333;
}

.completed .itemText {
  text-decoration: line-through;
}

.completed:nth-child(odd) .itemText {
  text-decoration: line-through;
}
.completed:hover {
  background: #7b7 !important;
}
.completed:nth-child(odd):hover {
  background: #5a5 !important;
}

.itemText {
  max-width: 500px;
  word-wrap: break-word;
}

.itemRemove {
  float: right;
  position: absolute;
  top: 0;
  right: -70px;
  border: 0;
  outline: none;
  background: transparent;
  padding: 10px 7px;
  width: 70px;
  height: 100%;
  margin: 0;
  cursor: pointer;
  font-size: 30px;
  color: #999;
}

.itemRemove:hover {
  color: #000;
  background: #ffeeee;
}
.clear {
  height: 40px;
  margin-left: 20px;
  padding: 10px 20px;
}
.list-fade-item {
  transition: all 0.3s;
}
.list-fade-enter,
.list-fade-leave-to {
  transition: 0.5s;
  opacity: 0;
}
.list-fade-leave-active {
  position: absolute;
}
</style>