<template>
 <div>  
<h1>我是一</h1>
    <a href="/#/ceshi_two">跳转</a>
    <!-- <span v-on:click="getTime()">你好</span> -->
    <span v-on:click="tz()"> 跳转</span>

 </div>
    
</template>
<script>
export default {
  data() {
    return {
        time1:0,
        time2:0
    };
  },
  computed: {

  },
    beforeCreate (){
        // 页面进来
        this.$nextTick(function () {
                let timestamp = (new Date()).getTime();
                this.time1 = timestamp
                alert(timestamp); 
                 })
    },
    destroyed(){   
            // 页面关闭 或 跳转  页面  生命周期最后一步
    },
        methods: {
                tz:function(){
                    let timestamp = (new Date()).getTime();
                        this.time2 = timestamp
                        alert(timestamp); 
                        alert(`我呆了${(this.time2-this.time1)/1000}秒`)
                        location.href="/#/ceshi_two"
                },
        },
        mounted() {
                   
            },
        created:{
                
        },
        
};


</script>

</style>
