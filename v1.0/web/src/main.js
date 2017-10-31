// import ElementUI from "element-ui"
// import store from './vuex/store'

import Vue from 'vue'
import App from './App.vue'
import router from './router/'

// Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})