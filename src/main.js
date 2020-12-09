import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { router } from './router'
// import 'lib-flexible/flexible'
require('../public/static/flexible.js')

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
