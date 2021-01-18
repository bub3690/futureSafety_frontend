<template>
    <div class="MyProfile">
        <form @submit.prevent="onSubmit">
            <fieldset>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="userid">아이디</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" disabled v-model="user_id" id="userid" type="text" placeholder="아이디는 수정 불가능 합니다."/>
                        <span class="description-userid">아이디는 수정 불가능 합니다. 관리자에게 문의해주세요.</span>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="name">이름</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" v-model="name" id="name" type="text" placeholder="수정할 사용자의 이름을 입력해주세요."/>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="address">이메일</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" v-model="address" id="address" type="text" placeholder="수정할 사용자의 이메일을 입력해주세요."/>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="company">회사</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" v-model="company" id="company" type="text" placeholder="수정할 회사를 입력해주세요."/>
                    </div>
                </div>
            </fieldset>
            <button class="btn-default save" type="submit">저장</button>
            <button class="btn-default" type="button" @click="goBack">취소</button>
        </form>
    </div>
</template>

<script>
    export default {
        name:'MyProfile',
        props:{
            'profile':Object,
        },
        data(){
            return{
                user_id:'',
                name:'',
                company:'',
                address:'',
            }
        },
        methods:{
            onSubmit(){
                const {user_id, name, company, address} = this
                this.$emit('submit:onSubmit',{user_id, name, company, address})
            },
            goBack(){
                this.$router.push({name:'Home'})
            }
        },
        created(){
            this.user_id = this.profile.user_id
            this.name = this.profile.name
            this.company = this.profile.company
            this.address = this.profile.address
        }
    }
</script>

<style scoped>
.MyProfile{
    padding:19px;
    border:1px solid #e0e0e0;
    background-color:white;
    font-size:14px;
}
.horizontal{
    width:100%;
    border-bottom:1px solid #EEE;
    padding-bottom:10px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
.forLabel{
    box-sizing: border-box;
    display: inline-block;
    width:17%;
    text-align: right;
    margin:0;
    padding:7px 15px 0 15px;
    vertical-align: top;
}
.forLabel label{
    color:#333333;
    font-weight:700;
    line-height: 1.5;

}
.forInput{
    box-sizing: border-box;
    display: inline-block;
    text-align: left;
    width:83%;
    margin:0;
}
.forInput input{
    width:300px;
}
.forInput input:disabled{
    background:#eee;
}
.forInput input:disabled:hover + .description-userid{
    display:block;
}

.forInput .description-userid{
    display:none;
}

.forInput .check{
    
    width:50px;
}
.post-create-form button.save{
    margin-right:5px;
    background: rgb(52,152,219);
    color:white;
}


</style>