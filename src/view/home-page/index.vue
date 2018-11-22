<template>
    <div class="hello">
        <header class="header">
            <h1>{{ msg }}</h1>
        </header>
        <h5 class="text_c">vuex</h5>
        <div class="box">
            <Button type="primary" @click="reduceCont">-</Button>
            <p>{{ getCont}}</p>
            <Button type="primary" @click="addCont">+</Button>
        </div>
        <Icon type="ios-alarm-outline" />
        <div class="text_c">
            <p v-for="(item,index) in getList" :key="index">{{ item.a }}</p>
            <p>数量：{{ getListLength }}</p>
        </div>
          <hr></hr>  
         <p class="text_c">国际化：{{ $t('header.a') }}</p>
         <div class="text_c">
              <Button type="primary" @click="setZh">zh-CN</Button>
              <Button type="primary" @click="setEn">en-US</Button>
         </div>
        <Box v-for="(item,index) in data" :key="index" @changes="getBox" :value="item.value" :name="item.name"  :checked="item.checked"></Box>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import Box from '../check-box'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      twitter: '',
      data: [
        {
          value: '111',
          name: '测试',
          checked: true
        },
        {
          value: '111',
          name: '测试1',
          checked: true
        },
        {
          value: '111',
          name: '测试3',
          checked: false
        }
      ]
    }
  },
  components: {
    Box
  },
  computed: {
    getCont () {
      return this.$store.state.cont.cont
    },
    ...mapGetters(['getList', 'getListLength'])
  },
  methods: {
    ...mapActions(['addCont', 'reduceCont']),
    setZh () {
      Cookies.set('lang', 'zh-CN')
      window.location.reload()
    },
    setEn () {
      Cookies.set('lang', 'en-US')
      window.location.reload()
    },
    getBox (ev) {
      console.log(ev)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.header {
  text-align: center;
  padding: 20px 0;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 120px;
    text-align: center;
  }
}
</style>
