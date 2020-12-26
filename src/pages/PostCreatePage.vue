<template>
    <div class="post-create-page">
        <h2>게시물 작성하기</h2>
        <post-create-form @submit="onSubmit"></post-create-form>
    </div>
</template>

<script>
import api from '@/api'
import PostCreateForm from '../components/PostCreateForm'
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
                    'is_important':payload.check
                }
                fd.append('board_id',category[payload.category])
                fd.append('title',payload.title)
                fd.append('body',payload.html)
                fd.append('is_important',payload.check)
                if(payload.files){
                    // mulitple file 방법 찾아야함.
                    post_data['file']=payload.files
                    fd.append('file',payload.files[0])
                }
                
                for(var key of fd.keys()){
                    console.log(key)
                }
                for (var value of fd.values()) {
                console.log(value);
                }
                api.post('https://futuresafeyhome123.run.goorm.io/board/create/',fd)
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