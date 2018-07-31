// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VideoPlayer from 'vue-video-player'
import MintUI from 'mint-ui'
import VueCookies from 'vue-cookies'
import 'mint-ui/lib/style.css'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
fastclick.attach(document.body)
Vue.use(MintUI)
Vue.use(require('vue-wechat-title'))
Vue.use(VideoPlayer)
Vue.config.productionTip = false
Vue.use(VueCookies)



router.beforeEach((to,from,next)=>{
    // let token = window.localStorage.getItem("phone_token");
    // if(to.path == '/author'){ // && store.state.user.id
    //     // 用户使用后退返回到授权页，则默认回到首页
    //     next('/firstPage')
    //     return false
    // }

    // if(!token && to.path != "/author"){
    // console.log(to.fullPath);
    // VueCookies.set("beforeLoginUrl",to.fullPath);
    // next("/author");
    // return false;
    // }
    next();
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
