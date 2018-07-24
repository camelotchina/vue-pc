import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component:  resolve => require(['@/view/home-page/index.vue'], resolve)
    },
  ]
})


router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)  
  next()

})

export default router
