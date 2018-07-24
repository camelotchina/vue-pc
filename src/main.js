import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import { HTTP } from './util/axios'
import store from './store'

import '@/theme/index.less'
import '@/assets/style/base.css'

Vue.config.productionTip = false


Vue.use(iView)
Vue.prototype.$http = HTTP

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
