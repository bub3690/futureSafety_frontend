<template>
    <div class="post-edit-page">
        <h2>게시물 수정하기</h2>
        <post-edit-form v-if="post" @submit="onSubmit" :post="post"></post-edit-form>
        <p v-else>게시물 불러오는 중...</p>
    </div>
</template>

<script>
import api from '@/api'
import PostEditForm from '../components/PostEditForm'
import {mapState} from 'vuex'
    export default {
        name:'PostEditPage',
        components:{
            'PostEditForm':PostEditForm
        },
        props:{
            postId:{
                type:String,
                required: true
            },
        },
        computed:{
            ...mapState(['post'])
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
                    'is_important':payload.check
                }
                fd.append('board_id',category[payload.category])
                fd.append('title',payload.title)
                fd.append('body',payload.html)
                fd.append('is_important',payload.check)
                console.log("파일:",payload.files)
                if(payload.files.length!=0){
                    post_data['post_files']=payload.files
                    // mulitple file 방법 찾아야함.
                    for(var i=0; i<payload.files.length; i++){
                        fd.append('post_files',payload.files[i])
                    }
                }else{
                    fd.append('post_files',null)
                }

                api.put('https://futuresafeyhome123.run.goorm.io/api/board/'+this.postId,fd)
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
                            this.$router.push({name:'SigninPage'})
                        }else{
                            alert(err.response.data.msg)
                            console.log(err.response)
                        }

                    })


            }
        },
        
    }
</script>

<style scoped>
.post-edit-page{   
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
.post-edit-page h2{
    text-align:left;
}

</style>