<template>
    <div class="SigninForm">
        <h3>로그인</h3>
        <form @submit.prevent="onLogin">
            <div class="idpw"><input type="text" v-model="id" placeholder="아이디를 입력해주세요." class="search-default"/></div>
            <div class="idpw"><input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." class="search-default"/></div>
            <div class="idpw"><button type="submit" class="btn-default submit">로그인</button></div>
            <div class="signup">
                <p>아직 회원이 아니신가요?</p>
                <router-link :to="{name:'SignupPage'}">회원가입 하러가기</router-link>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name:'SigninForm',
        data(){
            return{
                id:'',
                password:''
            }
        },
        methods:{
            onLogin(){
                const {id,password} =this
                this.$emit('signin:submit',{id,password})
            },
        }
    }
</script>

<style scoped>
.SigninForm{
    position: absolute;
    box-sizing:border-box;
    left: 50%;
    top:50%;
    width:456px;
    height:300px;
    margin: -186px 0 0 -228px;
    padding: 30px 40px 30px;
    background-color: rgba(377,377,377,.9);
    border:1px solid #ededed;
}
.SigninForm h3{
    font-size:larger;
    text-align: left;
    margin-top: 0px;
}
.SigninForm .idpw{

    margin-bottom: 10px;
}
.SigninForm .idpw input{
    width:100%;
}
.SigninForm .submit{
    color:white;
    width:100%;
    background: rgb(52, 152, 219);
}
</style>