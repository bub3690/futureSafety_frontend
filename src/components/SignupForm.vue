<template>
    <div class="SignupForm">
        <router-link :to="{name:'SigninPage'}" class="btn-default login" tag="button"><i class="fas fa-chevron-left"></i>  로그인 하기</router-link>
        <form @submit.prevent="onSubmit">
            <h3><i class="fas fa-user"></i> 회원가입</h3>
            <div><input type="text" v-model="id" placeholder="아이디를 입력해주세요." class="search-default"/></div>
            <div><input type="password" v-model="password" placeholder="비밀번호를 입력해주세요." class="search-default"/></div>
            <div>
                <input type="password" v-model="passwordConfirm" placeholder="비밀번호를 다시 입력해주세요." class="search-default"/>
            </div>
            <div>
                <input type="email" v-model="email" placeholder="이메일을 입력해주세요." class="search-default"/>
            </div>
            <div class="oneline">
                <input type="text" v-model="name" placeholder="이름을 입력해주세요." class="search-default small"/>
                <input type="text" v-model="company" class="search-default small" placeholder="회사명을 입력해주세요."/>
            </div>
            <button type="submit" class="btn-default submit">회원가입</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'SignupForm',
        data(){
            return{
                id:'',
                company:'',
                name:'',
                email:'',
                password:'',
                passwordConfirm:'',
            }
        }
        ,
        methods:{
            onSubmit(){
                const {id,company,name,email,password,passwordConfirm} = this
                if(!id|| !email || !password || !passwordConfirm || !name || !company){
                    alert('모든 항목을 입력해주세요.')
                    return
                }
                if(password !== passwordConfirm){
                    alert('비밀번호가 일치하지 않습니다.')
                    return
                }
                this.$emit('signup:submit',{id,company,name,email,password,passwordConfirm})
            }
        }
    }
</script>

<style scoped>
/*회원가입 폼 관련 css*/
.SignupForm{
    position: absolute;
    box-sizing:border-box;
    left: 50%;
    top:50%;
    width:456px;
    height:372px;
    margin: -186px 0 0 -228px;
    padding: 30px 40px 30px;
    background-color: rgba(377,377,377,.9);
    border:1px solid #ededed;
}
.SignupForm h3{
    font-size:larger;
    margin-top: 0px;
}
.SignupForm h3 i{
    font-size:smaller;
}
.SignupForm input{
    margin-bottom: 10px;
    width:220px;
}
.SignupForm .oneline .small{
    width:170px;
    margin-left:10px;
    
}
.SignupForm .submit{
    color:white;
    width:220px;
    background: rgb(52, 152, 219);
}
.SignupForm .login{
    color:rgb(131, 131, 131);
    font-size:12px;
    position:absolute;
    top:20px;
    left:30px;
    background:rgb(230, 230, 230);

}
</style>