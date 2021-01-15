<template>
    <div class="UsermangeComponent">
        <form @submit.prevent="onSubmit">
            <fieldset>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="userid">아이디</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" disabled v-model="user_id" id="userid" type="text" placeholder="아이디는 수정 불가능 합니다."/>
                        <span class="description-userid">아이디는 수정 불가능 합니다. 개발자에게 문의해주세요.</span>
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
                        <label for="company">회사</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default" v-model="company" id="company" type="text" placeholder="수정할 회사를 입력해주세요."/>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="is_admin">권한</label>
                    </div>
                    <div class="forInput">
                        <select id="is_admin" class="select-default" v-model="is_admin">
                            <option :value="false">일반회원</option>
                            <option :value="true">관리자</option>
                        </select>
                    </div>
                </div>
                <div class="horizontal">
                    <div class="forLabel">
                        <label for="is_active">로그인 허용</label>
                    </div>
                    <div class="forInput">
                        <input class="search-default check" v-model="is_active" id="is_active" type="checkbox"/>
                    </div>
                </div>
            </fieldset>
            <button class="btn-default save" type="submit">저장</button>
            <button class="btn-default" type="button" @click="goBack()">취소</button>
        </form>        
    </div>
</template>

<script>
    export default {
        name:'UsermangeComponent',
        props:{
            profile:Object,
        },
        data(){
            return{
                user_id:'',
                name:'',
                company:'',
                before_isadmin:false,
                is_admin:false,
                is_active:false,
            }
        },
        methods:{
            goBack(){
                this.$emit('submit:goBack')
            },
            onSubmit(){
                var testing_confirm = true
                const {user_id, name, company, is_admin, is_active} = this
                if(this.is_admin && !this.before_isadmin){
                    testing_confirm = confirm(""+this.name+"님을 관리자로 설정하시겠습니까?");
                }
                if(!testing_confirm){
                    alert('수정이 취소 되었습니다.')
                    return
                }
                this.$emit('submit:onSubmit',{user_id, name, company, is_admin, is_active})
            }

        },
        created(){
            console.log(this.profile)
            const profile = this.profile
            this.user_id = profile.user_id
            this.name = profile.name
            this.company = profile.company
            this.is_active = profile.is_active
            this.is_admin = profile.is_admin
            this.before_isadmin = profile.is_admin
        }
    }
</script>

<style scoped>
.UsermangeComponent{
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