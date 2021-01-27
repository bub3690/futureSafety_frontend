import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
//페이지
import AppHeader from '../pages/AppHeader'
import LeftPage from '../pages/LeftPage'
import ContentPage from '../pages/ContentPage'  
import NoticePage from '../pages/NoticePage'
import FooterPage from '../pages/FooterPage'
import PostCreatePage from '../pages/PostCreatePage'
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage'
import PostEditPage from '../pages/PostEditPage'
import AdminPage from '../pages/AdminPage'
import MyPage from '../pages/MyPage'
import BusinessPage from '../pages/BusinessPage'
import bus from '../utils/bus'

//컴포넌트
import PostDetail from '../components/PostDetail'
import PostList from '../components/PostList'

//카테고리
import CategoryComponent3 from '../components/category/CategoryComponent3'
import CategoryComponent2 from '../components/category/CategoryComponent2'
import CategoryComponent1 from '../components/category/CategoryComponent1'

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
    path:'/business',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:BusinessPage,
      footer:FooterPage
    },
    children:[
	{
        path:'/business/category1',
        name:'category1',
        component:CategoryComponent1
	},
	{
        path:'/business/category2',
        name:'category2',
        component:CategoryComponent2
	},
	{
        path:'/business/category3',
        name:'category3',
        component:CategoryComponent3
      },
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
        next({name:'SigninPage'})
        return false;
      }
      // 게시물이 아닌 주소창으로 접근할 경우
      // board/notice/28 : fullPath
      // to에 props 따올것.
      console.log(from.fullPath != '/board/safety/'+to.params.postId)
      if(from.fullPath != '/board/notice/'+to.params.postId && from.fullPath != '/board/safety/'+to.params.postId ){
        alert('수정하기 버튼을 통해 접근해주세요.')
        next(from)
        return false;
      }
      // fetchpost 엑션을 재 활용 (detailview)
      store.dispatch('fetchPost', to.params.postId)
        .then(()=>{
          // author가 일치하는지 에러 구분, admin인 경우 허용. backend에서 검사후 front에서 재검사
          // edit가 아니라, detailview로 요청하기 때문에 발생.
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
            if(err.response.status === 401){
              alert('로그인이 필요합니다.')
              next({name:'SigninPage'})
              return false;
            }else if(err.response.status === 403){
                alert('인증된 회원만 글을 읽을 수 있습니다. 관리자에게 권한 요청해주세요.')
                next({name:'Home'})
                return false;
            }else{
                alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data.message)
                next({name:'Home'})
                return false;
            }
        })

      

    }
  },
  {
    path:'/signup',
    name:'SignupPage',
    components:{
    content:SignupPage,
    header:AppHeader},
  },
  {
    path:'/signin',
    name:'SigninPage',
    components:{
    content:SigninPage,
    header:AppHeader},
  },
  {
    path:'/adminSite',
    name:'adminPage',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:AdminPage,
      footer:FooterPage, 
    }
  },
  {
    path:'/profile',
    name:'profilePage',
    components:{
      header:AppHeader,
      aside:LeftPage,
      content:MyPage,
      footer:FooterPage,   
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
