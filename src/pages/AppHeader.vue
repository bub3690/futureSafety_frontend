<template>
    <div class="app-header">
        <a class="logo" href="http://localhost:8080/">
        </a>
        <div class="separator"></div>
        <div class="explain">
            <p>노동부 지정 안전관리 전문기관</p>
            <p>유해 위험방지계획서  / 위험성평가</p>
        </div>
        <div class="navbar">
            <ul v-if="isAuthorized" class="after-login">
                <li :class="{'dropdown':true,'dropdownActive':dropdownActive}">
                    <a class="profile" @click="listClick">
                            <span>{{me.name}}님</span>
                            <i class="fas fa-angle-down"/>
                    </a>
                    <ul class="dropdown-content">
                        <li>
                            <a :href="$router.resolve({name:'profilePage'}).href">
                                프로필 변경
                            </a>
                        </li>
                        <li v-if="me.is_admin" class="divide-bar"/>
                        <li v-if="me.is_admin">
                            <a :href="$router.resolve({name:'adminPage'}).href">
                                홈페이지 관리
                            </a>
                        </li>
                        <li class="divide-bar"/>
                        <li>
                            <a  @click="call_logout">로그아웃</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <div v-else class="before-login">
                <router-link :to="{name:'SignupPage'}" tag="a">회원가입</router-link>
                <router-link :to="{name:'SigninPage'}" tag="a">로그인</router-link>
                <!--<a @click="call_logout">ddd</a>-->
            </div>  
        </div>

    </div>
</template>

<script>
import {mapGetters,mapState,mapActions} from 'vuex';

export default {
    name:'AppHeader',
    data(){
        return{
            dropdownActive:false,
        }
    },
    computed:{
        ...mapGetters(['isAuthorized']),
        ...mapState(['me'])
    },
    methods:{
        listClick(){
            this.dropdownActive = !this.dropdownActive;
        },
        call_logout(){
            this.logout()
            this.dropdownActive = false
            this.$router.resolve({name:'Home'})
        },
        ...mapActions(['logout'])
    }
}
</script>

<style scoped>
.app-header{
    height:54px;
    width:100%;
    background: rgb(52 142 219);
    color:white;
    font-family: 'Han Sans',본고딕;
}
.app-header .navbar{
    width:200px;
    height:100%;
    padding-right:80px;
    float:right;
    position: relative;
}
.app-header a.logo{
    background:url('/static/comlogo2.png') no-repeat;
    background-size:contain;
    margin-left:10px;
    width:120px;
    height:54px;
    float:left;
}
div.separator{
    margin-top: 6px;
    margin-left:3px;
    box-sizing:border-box;
    float: left;
    height:40px;
    width:20px;
    border-left:1px solid #d9dbdb;
}
div.explain{
    margin-top: 5px;
    float:left;

}



/* 오른쪽 로그인 전 ui */
.navbar > div.before-login{
    width:100%;
    height:100%;
    display:flex;
    float: right;
    margin:0 25px;
}
.navbar > div.before-login> a{
    font-size:16px;
    margin-right: 10px;
    height: 100%;
    display:flex;
    align-items: center;
    font-family: 'Han Sans',본고딕;
    color:white;
    cursor:pointer;
}
a{
    
    text-decoration: none;
    outline:none;
}
a:visited{
    text-decoration: none;
    color:black;
}


/*dropdown */
.dropdownActive .dropdown-content{
    display:block;
}
.dropdownActive{
    background: rgb(52 134 219);
}

.dropdown-content{
  display: none;
  position: absolute;
  background-color: rgba(255,255,255,.95);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
  padding:0px;
  color:black;
  text-decoration: none;
  float:left;
}
.dropdown{
    height:100%;
    box-sizing:border-box;
}
.after-login{
    margin:0px;
    height:100%;
    box-sizing:border-box;
}

.dropdown a.profile{
    height:100%;
    display: block;
    padding:15px 15px;
    box-sizing:border-box;
}
.dropdown-content li:hover{
    background: #ededed;
}
.dropdown-content li.divide-bar{
    height:1px;
    background-color:#e5e5e5;
    padding:0px;
    margin:9px 0;
    overflow: hidden;
}
.dropdown-content li a{
    display: block;
    padding: 10px 10px;
    cursor: pointer;
}
img.profile-img{
    height: 40px;
    width: 40px;
    border-radius: 70%;
}
</style>