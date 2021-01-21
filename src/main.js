//import 'es6-promise/auto'
//import '@babel/polyfill'// ie 11 action 오류때문에 첨부.
//import 'core-js/stable';
//import 'regenerator-runtime/runtime';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
Vue.config.productionTip = false

//const savedToken = Cookies.get('accessToken')
//if(savedToken){
//  store.dispatch('signinByToken', savedToken)
//}
function init(){
  const savedToken = Cookies.get('accessToken')
  if(savedToken){
    return store.dispatch('signinByToken', savedToken)
    .catch(
      err=>{
          console.log('문제있음:',err.response)
      }
    )
  }else{
    return Promise.resolve()
    
  }
}


init().then( res =>{
  new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')
})