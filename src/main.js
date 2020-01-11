import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'
import Todo from './components/TodoMain'
import Home from './components/Home'
import Other from './components/Other'

Vue.use(VueRouter)
Vue.config.productionTip = false

const  routes = [
    { path: "/", component: Home },
    { path: "/todo", component: Todo },
    { path: "/other", component: Other }
  ]
const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
