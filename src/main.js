import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import i18n from '@/locale'
import 'iview/dist/styles/iview.css'
import { HTTP } from './util/axios'
import store from './store'
import '@/theme/index.less'
import '@/assets/style/base.css'
import './assets/style/icon/iconfont.js'

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
