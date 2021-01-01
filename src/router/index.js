import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
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
import PostEditPage from '../pages/PostEditPage'
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
  },
  {
    path:'/board',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:NoticePage,
      footer:FooterPage
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
    path:'/board/edit/:postId',
    name:'editPage',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:PostEditPage,
      footer:FooterPage
    },
    props:{
      content:true},
    beforeEnter(to, from, next){
      const {isAuthorized} = store.getters
      if(!isAuthorized){
        alert('로그인이 필요합니다.')
        next({name:'Signin'})
        return false;
      }
      // 게시물이 아닌 주소창으로 접근할 경우
      // board/notice/28 : fullPath
      // to에 props 따올것.
      if(from.fullPath != ('/board/notice/'+to.params.postId)){
        alert('수정하기 버튼을 통해 접근해주세요.')
        next(from)
        return false;
      }
      // fetchpost 엑션을 재 활용
      store.dispatch('fetchPost', to.params.postId)
        .then(()=>{
          // author가 일치하는지 에러 구분, admin인 경우 허용. backend에서 검사후 front에서 재검사
            const isAuthor = (store.state.post.author_userid === store.state.me.user_id)|| store.state.me.is_admin
            if(!isAuthor){
              alert('관리자 또는 자신의 글만 수정가능합니다.')
              next(from)
            }
          // 게시물 데이터 요청이 성공했다면 다음 라우트로 이동.
          next()
        })
        .catch(err => {
          //에러메세지 확인필요.

         
          alert(err.response.data.msg)
          next(from)
        })

      

    }
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
