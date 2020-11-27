import Vue from 'vue'
import VueRouter from 'vue-router'

//페이지
import AppHeader from '../pages/AppHeader'
import LeftPage from '../pages/LeftPage'
import ContentPage from '../pages/ContentPage'  
import NoticePage from '../pages/NoticePage'
import PostDetail from '../components/PostDetail'
import PostList from '../components/PostList'
import FooterPage from '../pages/FooterPage'
import PostCreatePage from '../pages/PostCreatePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import bus from '../utils/bus'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:ContentPage,
      footer:FooterPage
    },
    beforeEnter:(to,from,next)=>{
      bus.$emit('start:spinner');
      next()
  },
  },
  {
    path:'/board',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:NoticePage,
      footer:FooterPage
    },
    beforeEnter:(to,from,next)=>{
        bus.$emit('start:spinner');
        next()
    },
    children:[
      {
        path:'/board/notice',
        name:'notice',
        component:PostList
      },
      {
        path:'/board/notice/:postId',
        name:'NoticeDetail',
        component:PostDetail,
        props:true,
      },
      {
        path:'/board/safety',
        name:'safety',
        component:PostList
      },
      {
        path:'/board/safety/:postId',
        name:'SafetyDetail',
        component:PostDetail,
        props:true,
      }
    ]
  },
  {
    path:'/board/create',
    name:'createPage',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:PostCreatePage,
      footer:FooterPage
    },
  },
  {
    path:'/signup',
    name:'SignupPage',
    components:{
    default:SignupPage,
    header:AppHeader},
  },
  {
    path:'/signin',
    name:'SigninPage',
    components:{
    default:SigninPage,
    header:AppHeader},
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
