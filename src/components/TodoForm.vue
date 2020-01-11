<template>
    <form class="todo-form" @submit.prevent="submit">
        <input type="text" class="input-field" placeholder="Введите текст..." v-model="title"/>
        <button type="submit" class="btn-add">Добавить</button>
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapMutations(['createTodo']),
        submit() {
            if (this.title.trim())
            this.createTodo({
                id: Date.now(),
                title: this.title,
                completed: false
            })
            this.title = ''
        }
    }
}
</script>

<style scoped>
.todo-form {
    margin-bottom: 20px;
}
	.input-field {
		font-size: 20px;
		width: 430px;
        padding: 5px;
        border-radius: 4px;
		}
    .input-field:focus {
        outline: none;
    }
		
	.btn-add {
        height: 40px;
        margin-left: 20px;
        padding: 10px 20px;
		}
</style>