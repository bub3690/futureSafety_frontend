<template>
    <div class="post-create-page">
        <h2>게시물 작성하기</h2>
        <post-create-form @submit="onSubmit" ></post-create-form>
    </div>
</template>

<script>
import api from '@/api'
import PostCreateForm from '../components/PostCreateForm'
import store from '../store'
    export default {
        name:'PostCreatePage',
        components:{
            'PostCreateForm':PostCreateForm
        },
        methods:{
            onSubmit(payload){
                const fd = new FormData();
                //token은 header와 함께 보낸다. 그 후 author 인증함.
                const category ={
                    '공지사항':'A',
                    '안전 자료실':'B'
                }
                const goCategory ={
                    '공지사항':'notice',
                    '안전 자료실':'safety'
                }
                const post_data={
                    'board_id':category[payload.category],
                    'title':payload.title,
                    'body':payload.html,
                    'is_important':payload.check,
                    'image_datas':payload.image_datas
                }
                fd.append('board_id',category[payload.category])
                fd.append('title',payload.title)
                fd.append('body',payload.html)
                fd.append('is_important',payload.check)

                // multiple images
                if(payload.image_datas.length!=0){
                    post_data['image_datas']=payload.image_datas
                    for(var i=0; i<payload.image_datas.length; i++){
                        fd.append('image_datas',payload.image_datas[i])
                    }
                }else{
                    fd.append('image_datas',null)
                }

                // multiple files
                console.log("파일:",payload.files)
                if(payload.files.length!=0){
                    post_data['post_files']=payload.files
                    for(var i=0; i<payload.files.length; i++){
                        fd.append('post_files',payload.files[i])
                    }
                }else{
                    fd.append('post_files',null)
                }

                api.post('https://futuresafeyhome123.run.goorm.io/api/board/create/',fd)
                    .then(res=>{
                        alert('게시물이 성공적으로 '+payload.category+'에 작성되었습니다.')
                        this.$router.push({
                            name:goCategory[payload.category]
                        })
                    })
                    .catch(err=>{
                        //게시물 작성이 실패한 경우
                        if(err.response.status === 401){
                            alert('로그인이 필요합니다.')
                            return false;
                            //this.$router.push({name:'SigninPage'})
                        }else if(err.response.status === 403){
                            alert('홈페이지 관리자만 글을 작성할 수 있습니다.')
                            return false;
                            /*
                            this.$router.push({
                                name:goCategory[payload.category]
                            })
                            */
                        }else{
                            alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data.message)
                            return false;
                            /*
                            this.$router.push({
                                name:goCategory[payload.category]
                            })
                            */
                        }

                    })


            }
        },
        beforeRouteEnter(to, from, next){
            const {isAuthorized} = store.getters
            if(!isAuthorized){
                alert('로그인이 필요합니다.')
                next({name:'SigninPage'})
                return false;
            }
            const {isAdmin} = store.state.me.is_admin
            if(!isAdmin){
                alert('홈페이지 운영자만 작성할 수 있습니다.')
                next({name:'Home'})
                return false;
            }
            next()
        }
    }
</script>

<style scoped>
.post-create-page{   
    background: #f7f9fa;
    box-sizing: border-box;
    position:relative;
    min-height:668px;
    width:calc(100% - 190px);
    float:left;
    overflow: hidden;
    padding: 32px 40px;
    font-family: NanumGothic,"나눔고딕",NanumGothic,"돋움",dotum,sans-serif;
}
.post-create-page h2{
    text-align:left;
}

</style>