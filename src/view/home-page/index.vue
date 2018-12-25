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
         ---{{ baseURL }}
         <p class="text_c">国际化：{{ $t('header.a') }}</p>
         <div class="text_c">
              <Button type="primary" @click="setZh">zh-CN</Button>
              <Button type="primary" @click="setEn">en-US</Button>
         </div>
        <Box v-for="(item,index) in data" :key="index" @changes="getBox" :value="item.value" :name="item.name"  :checked="item.checked"></Box>
        <hr/>
        <div class="row text_c" id="pdfDom" style="padding: 55px;background-color:#fff; tet">
            给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分,前言本文整理自《大型网站技术架构核心原理与案例分析》一书，这本书应该算一本很强的内功秘籍，虽然没有实战教学，但是基础理论扎实了是很重要的，书中观点明确，设计的问题域有针对性和全面性，对知识点的广度和深度都进行了拓展，包含了架构设计的方方面面。概述模式：每一个模式描述了一个在我们周围不断重复发生的问题及该问题解决方案的核心。这样，你就能一次又一次地使用该方案而不必做重复工作。网站架构模式：大型互联网
        </div>
        <div class="text_c">
            <Button type="primary" class="btn btn-primary"v-on:click="getPdf">导出PDF</Button>
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { baseURL } from '../../util/axios.js'
import { htmlToCanvas, jsToPdf } from '../../util/htmlToPdf.js'
import Cookies from 'js-cookie'
import Box from '../check-box'
export default {
  name: 'HelloWorld',
  data () {
    return {
      htmlTitle: '页面导出PDF文件名',
      msg: 'Welcome to Your Vue.js App',
      baseURL,
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
  mounted () {

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
    },
    async getPdf () {
      let canvas = await htmlToCanvas({el: 'pdfDom'})
      jsToPdf({canvas, 'title': '测试PDF下载'})
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
