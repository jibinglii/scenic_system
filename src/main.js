// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import http from './utils/http'
import Vue from 'vue'
import store from './vuex/index'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'

import './assets/css/common.scss'

Vue.prototype.$http = http
Vue.prototype.$toast = Toast
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
