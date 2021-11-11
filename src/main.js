import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import status from './status.vue'
import user from './components/user.vue'
import userdetail from './components/userdetail.vue'
import userindex from './components/userindex.vue'





Vue.component('status', status)
Vue.component('user', user)
Vue.component('userdetail', userdetail)
Vue.component('userindex', userindex)






Vue.config.productionTip = false

export const eventbus = new Vue({
  methods: {
   edit(date) {
     this.$emit('edit', date)
   } 
  },
})




new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
