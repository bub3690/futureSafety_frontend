<template>
    <div class="app-header">
        <a class="logo" href="http://localhost:8080/">
        </a>
        <div class="separator"></div>
        <div class="explain">
            <p>노동부 지정 안전관리 전문기관</p>
            <p>유해 위험방지계획서  / 위험성평가</p>
        </div>
                <nav class="navbar">
                    <ul>
                        <router-link :to="{name:'SignupPage'}" tag="li">회원가입</router-link>
                        <router-link :to="{name:'SigninPage'}" tag="li">로그인</router-link>
                    </ul>
                </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.app-header{
    height:54px;
    width:100%;
    background: rgb(52,152,219);
}
.app-header .navbar{
    width:200px;
    height:100%;
    float:right;
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
    color:white;
    font-family: 'Han Sans',본고딕;
}

.navbar > ul{
    width:100%;
    height:100%;
    display:flex;
    float: right;
    margin:0 25px   ;
}
.navbar > ul> li{
    font-size:16px;
    margin-right: 10px;
    height: 100%;
    display:flex;
    align-items: center;
    font-family: 'Han Sans',본고딕;
    color:white;
    cursor:pointer;
}

ul{
    list-style: none;
}
a{
    text-decoration: none;
    outline:none;
}
</style>