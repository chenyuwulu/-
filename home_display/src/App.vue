<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
  import { 
    reactive,
    computed,
    getCurrentInstance
  } from 'vue'
  import { useRouter } from 'vue-router'
  import mitt from "mitt"
  const mitts = mitt()
  export default {
    setup() {
      const { ctx } = getCurrentInstance()
      const router = useRouter()
      const state = reactive({
        count: 0,
        double: computed(() => state.count * 2),
        banner_flag:1,//当前banner图显示的
        content_flag:0,//当前显示的内容
        view_flag:true,//true为桌面，flase为移动端
        class_value:{
          color:"#FFFFFF",
          "font-weight":900,
          left:"2rem",
          top:"2rem",
          "font-size":"0.24rem"
        }
      })

      function change_content(index){
        state.content_flag = index
        console.log(state.content_flag)
      }
      function gaibian(index){
        if(index<2){
          state.banner_flag++
        } else {
          state.banner_flag=1
        }
        console.log(index,state.banner_flag)
      }

      function increment() {
        state.count++
      }
      
      function navigateTo(){
        router.push("/about")
      }

      // function get(){
      //   ctx.$axios.get("http://dev.chargefrog.com:3000/mock/15/msapi/hr/reminder/findReminder").then(res=>{
      //     console.log("这是返回的res",res)
      //   })
      // }
      function platform(windows){
        if(windows.innerWidth>=windows.innerHeight){
          state.view_flag=true
        } else {
          if(document.documentElement.clientWidth<750){
            document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'
          }
          
          state.view_flag=false
        }
      }
      return {
        state,
        increment,
        change_content,
        gaibian,
        navigateTo,
        platform,
        ctx
      }
    },
    created(){
      setTimeout(() => {
        window.onresize = ()=>{
          // this.platform(window)
        }
        // this.platform(window)
      },0)
      this.ctx.$axios.get("http://dev.chargefrog.com:3000/mock/15/msapi/hr/reminder/findReminder").then(res=>{
        console.log(res)
      })
      mitts.on("ceshi",()=>{
        // console.log(1111)
      })
      setTimeout(()=>{
        mitts.emit("ceshi")
      })
    },
    method:{

    }
  }
</script>

<style lang="scss">
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
