<template>
    <div class="MyPage">
        <h3>프로필 수정</h3>
        <my-profile @submit:onSubmit="onEdit" :profile="me"></my-profile>
    </div>
</template>

<script>
import MyProfile from '../components/MyProfile'
import {mapState} from 'vuex'
import api from '@/api'
export default {
        name:'MyPage',
        components:{
            'MyProfile':MyProfile,
        },
        computed:{
            ...mapState(['me'])
        },
        methods:{
            onEdit(payload){
                //console.log(payload)
                api.patch('/api/user/myProfile',payload)
                    .then(res=>{
                        alert(res.data.message)
                        this.$router.push({name:'Home'})
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
            }
        }


    }
</script>

<style scoped>
.MyPage{
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
.MyPage button{
    height:34px;
}
.MyPage h3{
    text-align:left;
}
.MyPage .notice-footer{
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