import Vue from 'vue'
import Vuex from 'vuex'
import todo from '../modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            login: '1',
            password: '1'
        },
        session: "none"
    },
    getters: {
        isSession(state) {
            return state.session
        },
        userLogin(state) {
            return state.user.login
        }
    },
    actions: {
        async checkUser(context, user) {
            context.commit('checkUser', user)
        },
        async logout(context) {
            context.commit('logout')
        }
    },
    mutations: {
        checkUser(state, user) {
            if (!user.login.trim() || !user.password.trim())
                return state.session = "empty"
            if (user.login === state.user.login && user.password === state.user.password)
                state.session = "ok"
            else
                state.session = "error"
            return state.session
        },
        logout(state) {
            state.session = "none"
        }
    },
    modules: {
        todo
    }
})