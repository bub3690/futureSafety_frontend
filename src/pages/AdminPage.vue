<template>
    <div class="AdminPage">
        <h3>관리자 페이지</h3>
        <useradmin-component :list="user_list"></useradmin-component>
    </div>
</template>

<script>
import UseradminComponent from '../components/UseradminComponent.vue'
import {mapActions, mapState} from 'vuex'
export default {
        name:'AdminPage',
        components: { UseradminComponent },
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
            
            ...mapActions(['setUserList'])
        },
        computed:{
            ...mapState(['user_list'])
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
    padding: 32px 40px;
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