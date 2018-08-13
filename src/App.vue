<template>
     <router-view>
          
     </router-view>

 <!-- <div id="app">
    <div class="lbs">
            <swiper :options="swiperOption" ref="mySwiper">
           
            <swiper-slide><div class="fd_slide fd_slide1"><img src="./assets/img/img1.jpeg" alt=""></div></swiper-slide>
            <swiper-slide><div class="fd_slide fd_slide1"><img src="./assets/img/img2.jpeg" alt=""></div></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    <router-view/>
    <h1>Hello</h1>
    <div class="ab"></div>
      <Slider v-model="value" range></Slider>
      <i class="iconfont icon-ziyuan1"></i>
      <i class="iconfont icon-ziyuan"></i>
      <i class="iconfont icon-ziyuan2"></i>
      <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-ziyuan"></use>
      </svg>
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-ziyuan1"></use>
      </svg>
        <svg class="icon" aria-hidden="true">
         <use xlink:href="#icon-ziyuan2"></use>
      </svg>
  </div>  -->
</template>
<script>
 import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'App',
   data () {
            return {
                value: [20, 50],
                swiperOption: {
                    initialSlide:0,//设定初始化时slide的索引
                    direction:'horizontal',//Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
                    loop: true,  //无限滚动
                    speed:1000,//滑动速度
                    autoplay:{
                      delay:500,
                    },//自动切换的时间间隔
                    pagination:{
                      el:".swiper-pagination",
                    },
                    onSlideChangeEnd: swiper => { //滑动之后回调函数
                        //切换结束时，告诉我现在是第几个slide
                        // console.log('onSlideChangeEnd', swiper.realIndex)
                    }
                },
            }
        },

}
</script>
<style scoped lang='scss'>
  .lbs{
    width: 400px;
    height: 200px;
    margin: 30px auto;
  }
  .fd_slide{
    width: 400px;
    height: 200px;
  }
  .fd_slide1>img{
    height: 100%;
  }
</style>

