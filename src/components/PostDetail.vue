<template>
    <div class="PostDetail">
        <post-view v-if="post" :post="post"></post-view>
        <p v-else>게시글을 불러오는 중...</p>
        <post-navigation v-if="post" :prev="post.post_prev" :next="post.post_next"></post-navigation>
    </div>
</template>
<script>
import PostView from './PostView'
import PostNavigation from './PostNavigation'

import {mapActions,mapState,mapMutations} from 'vuex'
import store from '../store'
    export default {
        name:'PostDetail',
        components:{PostView, PostNavigation},
        props:{
            postId:{
                type:String,
                required: true
            },
        },
        computed:{
            ...mapState(['post','boardTitle'])
        },
        methods:{
            ...mapActions(['fetchPost']),
            ...mapMutations(['SET_POST_NULL'])
        },
        beforeRouteEnter (to, from, next){
            //데이터 받아오는것 여기 쓰기 . /board/notice/6
            console.log('enter')
            var dataArray = to.fullPath.split('/')
            console.log(dataArray)
            //0번 빈칸, 1번 board, 2번 notice
            store.dispatch('fetchPost',dataArray[3])
            .then( ()=>{
                next()
            })
            .catch(
                err=>{
                    if(err.response.status === 401){
                        alert('로그인이 필요합니다.')
                        next({name:'SigninPage'})
                        return
                    }else if(err.response.status === 403){
                        alert('인증된 회원만 글을 읽을 수 있습니다. 관리자에게 권한 요청해주세요.')
                        next({name:'Home'})
                    }else{
                        alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data.message)
                        next({name:'Home'})
                    }
                    
                }
            )
        },
        beforeRouteUpdate(to,from,next){
            console.log('update')
            var dataArray = to.fullPath.split('/')
            console.log(dataArray)
            store.dispatch('setPostNull')
                .then(()=>{
                store.dispatch('fetchPost',dataArray[3])
                    .then( ()=>{
                        next()
                    })
                    .catch(
                        err=>{
                            if(err.response.status === 401){
                                alert('로그인이 필요합니다.')
                                next({name:'SigninPage'})
                                return
                            }else if(err.response.status === 403){
                                alert('인증된 회원만 글을 읽을 수 있습니다. 관리자에게 권한 요청해주세요.')
                                next({name:'Home'})
                            }else{
                                alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data.message)
                                next({name:'Home'})
                            }
                        
                        }
                    )
                })
        },
        created(){
            //console.log(this.postId)
        },

    }
</script>

<style scoped>

</style>