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