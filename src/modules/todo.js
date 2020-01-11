export default {
    state: {
        todoList: []
    },
    getters: {
        validTodoList(state) {
            return state.todoList.filter(p => { return p.title })
        },
        allTodos(state) {
            return state.todoList
        },
        isAllTodos(state, getters) {
            return getters.validTodoList.length
        },
        isDoneTodos(state, getters) {
            return getters.validTodoList.filter(p => { return p.completed }).length
        },
        isProcessTodos(state, getters) {
            return getters.validTodoList.filter(p => { return !p.completed }).length
        }
    },
    actions: {
        async fetchTodos(context, limit = 5) {
                const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=" + limit)
                const list = await res.json()   
            /*const posts =
            [
                { id: 1, title: "One", completed: true },
                { id: 2, title: "Two", completed: true },
                { id: 3, title: 'Three', completed: false },
                { id: 4, title: 'Four', completed: false }
            ]*/

            context.commit('updateTodoList', list)
        },

        async deleteTodo(context, index) {
            context.commit('deleteTodo', index)
        },
        async deleteAllTodos(context) {
            context.commit('deleteAllTodos')
        }
    },
    mutations: {
        updateTodoList(state, todoList) {
            state.todoList = todoList
        },
        createTodo(state, newTodo) {
            state.todoList.push(newTodo)
        },
        deleteTodo(state, index) {
            state.todoList.splice(index, 1)
        },
        deleteAllTodos(state) {
            state.todoList.splice(0, state.todoList.length)
        }
    }
}