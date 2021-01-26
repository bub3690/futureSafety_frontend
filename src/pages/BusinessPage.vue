<template>
    <div class="BusinessPage">
        <div class="category-explain">
            <h2 class="title-header">
                <span class="title">유해위험방지 계획서</span> 
            </h2>
            <div class="button-category">
                <button class="category btn-default active">유해위험방지 계획서</button>
                <button class="category btn-default">제출대상 13개 업종</button>
                <button class="category btn-default">공단 공문</button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'BusinessPage',

    }
</script>

<style scoped>
.BusinessPage{   
    background: #ffffff;
    box-sizing: border-box;
    position:relative;
    min-height:668px;
    width:calc(100% - 190px);
    float:left;
    overflow: hidden;
    padding: 32px 40px;
    font-family: NanumGothic,"나눔고딕",NanumGothic,"돋움",dotum,sans-serif;
}
.title-header{
    margin:0px;
    width:100%;
    margin-top:15px;
}
.title{
    font-size:32px;
    padding: 0 10px 5px 0;
    float: left;
    border-bottom: 2px solid #d9dbdb;
}
.button-category{
    margin:10px 0 10px 0;
    float:left;
    width:100%;
}
.button-category .category{
    float:left;
    width:25%;
    height:42px;
}
.category-explain::after{
    content: '';
    display: table;
    clear: both;
}
</style>