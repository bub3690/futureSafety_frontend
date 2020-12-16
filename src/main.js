import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
Vue.config.productionTip = false

const savedToken = Cookies.get('accessToken')
if(savedToken){
  store.dispatch('signinByToken', savedToken)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
