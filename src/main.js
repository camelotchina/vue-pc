import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import { HTTP } from './util/axios'
import store from './store'
import i18n from '@/locale'
import '@/theme/index.less'
import '@/assets/style/base.css'

Vue.config.productionTip = false
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.$http = HTTP

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  render: h => h(App)
})
