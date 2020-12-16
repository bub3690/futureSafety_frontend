<template>
    <div class="SigninPage">
        <signin-form @signin:submit="onSubmit"></signin-form>
    </div>
</template>

<script>
    import SigninForm from '../components/SigninForm.vue'
    import api from '../api/index.js'
    import {mapActions} from 'vuex'
    export default {
        name:'SigninPage',
        components: { SigninForm },
        methods:{
            onSubmit(payload){
                const post_data={
                    'username':payload.id,
                    'password':payload.password
                }
                this.signin(post_data)
                    .then(res=>{
                        // 사용자에게 로그인이 성공됐음을 알리고, 메인 페이지로 이동
                        alert('로그인이 완료되었습니다.')
                        this.$router.push({name:'Home'})    
                    })
                    .catch(err=>{
                        //서버상에서 에러메세지 구체화 필요
                        console.log(err.response.data)
                    })
                
            },
            ...mapActions(['signin'])
        }

    }
</script>

<style scoped>
.SigninPage{
    width:100%;
    height:100%;
    background:url(/static/bg1.jpg)
}
</style>