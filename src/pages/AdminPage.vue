<template>
    <div class="AdminPage">
        <h3>관리자 페이지</h3>
        <admin-component v-if="!editing" :list="user_list" @edit:submit="gotoEdit"></admin-component>
        <usermange-component :profile="userProfileAdmin" @submit:onSubmit="save" @submit:goBack="goBack" v-if="editing"></usermange-component>
    </div>
</template>

<script>
import AdminComponent from '../components/AdminComponent.vue'
import api from '@/api'
import {mapActions, mapState} from 'vuex'
import UsermangeComponent from '../components/UsermangeComponent.vue'
export default {
        components: { AdminComponent, UsermangeComponent },
        name:'AdminPage',
        data(){
            return {
                editing : false,
            }
        },
        methods:{
            getData(){
                this.setUserList()
                    .catch(
                        err=>{
                            if(err.response.status ===401){
                                alert('로그인 후 이용해주세요.')
                                this.$router.push({name:'SigninPage'})
                                return false;
                            }else if(err.response.status ===403){
                                alert('운영자가 아니면 접근할 수 없습니다.')
                                this.$router.push({name:'Home'})
                                return false;
                            }else{
                                alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data)
                                return false;
                            }           

                        }
                    )
            },
            save(payload){
                //console.log(payload)
                api.patch('/api/user/me',payload)
                    .then(res=>{
                        alert(res.data.message)
                        this.editing = false
                        this.setUserproifileAdminNull()
                        this.getData()
                    })
                    .catch(
                        err=>{
                            if(err.response.status === 401){
                                alert('로그인이 필요합니다.')
                                return false;                                
                            }
                            else if(err.response.status === 403){
                                alert('홈페이지 관리자만 수정할 수 있습니다.')
                                return false;

                            }else{
                                alert('알 수 없는 오류입니다. 해당사항을 관리자에게 알려주세요.'+'\n'+err.response.data.message)
                                alert(err.response.data.message_detail)
                                return false;
                            }
                        }
                    )
                // action 보내고 성공 후

            },
            goBack(){
                this.editing = false
                this.setUserproifileAdminNull()
            },
            gotoEdit(item){
                // item: user_id, admin_page
                this.getUserprofileAdmin(item)
                .then(
                    ()=>{
                        this.editing = true

                    }
                )
                .catch(
                    err=>{
                        alert(err.response.data.message)
                        return false
                    }
                )
            },
            ...mapActions(['setUserList','getUserprofileAdmin','setUserproifileAdminNull'])
        },
        computed:{
            ...mapState(['user_list','userProfileAdmin'])
        },
        created(){
            this.getData()
        }

    }
</script>

<style scoped>
.AdminPage{
    background: #f7f9fa;
    box-sizing: border-box;
    position:relative;
    min-height:668px;
    width:calc(100% - 190px);
    float:left;
    overflow: hidden;
    padding: 32px 60px;
    font-family: NanumGothic,"나눔고딕",NanumGothic,"돋움",dotum,sans-serif;
}
.AdminPage button{
    height:34px;
}
.AdminPage h3{
    text-align:left;
}
.AdminPage .notice-footer{
    margin-top:30px;
}
.fieldset input,select{
    margin-right: 5px;
}

.button-area{
    margin-bottom:30px;
    text-align:left;
}

.button-area .right{
    float:right;
}

</style>