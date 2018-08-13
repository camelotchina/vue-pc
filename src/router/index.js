import Vue from 'vue'
import Router from 'vue-router'
import CeShi_one from '@/view/CeShi/CeShi_one.vue'
import CeShi_two from '@/view/CeShi/CeShi_two.vue'
let _startTime = 0
window.addEventListener("beforeunload",() => {
  let sj  = (new Date().getTime()-localStorage.getItem('time'))/1000
  localStorage.setItem("sjj",sj)
})
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/ww',
      name: 'HomePage',
      // component:  resolve => require(['@/view/home-page/index.vue'], resolve)
    },
    {
      path: '/',
      component: CeShi_one,
      name: '测试1',
      meta: {
          title: '测试1'
      },
    },
    {
      path: '/ceshi_two',
      component: CeShi_two,
      name: '测试2',
      meta: {
          title: '测试2'
      },
  }
  
  ]
})

router.beforeEach((to, from, next) => {
  _startTime = new Date().getTime()
  // ocalStorage.setItem("time",_startTime)
  
  // localStorage.setItem('time',(new Date().getTime() - _startTime)/1000)
    if(localStorage.getItem("time")==null){
      localStorage.setItem('time',new Date().getTime())
    console.log("第一次进来")
    }else{
       console.log(new Date().getTime()+"现在时间")
       console.log(localStorage.getItem('time')+"页面一进来时间")
       console.log((new Date().getTime()-localStorage.getItem('time'))/1000+"相－时间")
       let sj  = (new Date().getTime()-localStorage.getItem('time'))/1000
       localStorage.setItem('time',new Date().getTime())
       localStorage.setItem("sj",sj)
    }
  window.scrollTo(0, 0)  
  next()
})

router.beforeResolve((to,from,next) => {
  next()
})

export default router
