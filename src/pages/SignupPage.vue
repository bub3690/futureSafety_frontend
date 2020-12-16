<template>
    <div class="SignupPage">
        <signup-form @signup:submit='onSubmit'></signup-form>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import api from '../api/index.js'
    export default {
        name:'SignupPage',
        components:{
            'SignupForm':SignupForm,
        },
        methods:{
            onSubmit(payload){
                const post_data={
                    'user_id':payload.id,
                    'password':payload.password,
                    'password2':payload.passwordConfirm,
                    'name':payload.name,
                    'company':payload.company,
                    'address':payload.email
                }
                console.log(post_data.user_id)
                api.post('https://futuresafeyhome123.run.goorm.io/user/register',post_data)
                .then(res=>{
                    alert('회원가입이 완료되었습니다.')
                    this.$router.push({name:'SigninPage'})
                })
                .catch(err=>{
                    //오류 메세지들을 친절하게 고쳐야함.
                    const errorMSG= err.response.data
                    let sendMSG=""
                    for(let key in errorMSG){
                        sendMSG=sendMSG+key+" 오류: "+errorMSG[key]+"\n"
                    }
                    alert(sendMSG)
                })
            }
        }
    }
</script>

<style scoped>
    .SignupPage{
        width:100%; 
        height:100%;
        background:url(/static/bg1.jpg)
    }
</style>