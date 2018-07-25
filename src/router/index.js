import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/pages/home'
import firstPage from '@/components/firstPage'
import dongTai from '@/components/dongtai'
import center from '@/components/center'
import projectDetail from '@/components/project-detail'
import cropper from '@/components/cropper/cropper'
import upload from '@/components/formdata/upload'
import pdf from '@/components/pdf/pdf'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {path:"/",redirect:"/firstPage",
          meta: {
            title: '首页'
          }
        },
        {path:"/firstPage",name:"firstPage",component:firstPage,
          meta:{
            title: '首页'
          }
        },
        {path:"/dongTai",name:"dongTai",component:dongTai,
          meta:{
            title: '动态'
          }
        },
        {path:"/center",name:"center",component:center,
          meta:{
            title: '个人中心'
          }
        }
      ]
    },
    {path:'/cropper', name:'cropper', component:cropper,
      meta:{
        title: '图片剪裁上传'
      }
    },
    {path:'/projectDetail/:id', name:'projectDetail', component:projectDetail,
      meta:{
        title: '项目详情'
      }
    },
    {path:'/pdf', name:'pdf', component:pdf,
      meta:{
        title: 'pdf'
      }
    },
    {path:'/upload', name:'upload', component:upload},
  ]
})
