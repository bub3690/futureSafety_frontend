<template>
    <div class="BusinessPage">
        <div class="category-explain">
            <h2 class="title-header">
                <span class="title">유해위험방지 계획서</span> 
            </h2>
            <div class="button-category">
                <button v-for="item in AllCategory['category3']" :key="item"
                @click="goClick(AllCategory['category3'].indexOf(item))" 
                :class="{
                    'category btn-default active':AllCategory['category3'].indexOf(item)===clickedIndex,
                    'category btn-default':AllCategory['category3'].indexOf(item)!=clickedIndex}">
                    {{item}}
                </button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'BusinessPage',
        data(){
            return{
                AllCategory:{
                    'category3':['유해위험방지 계획서','제출대상 13개 업종','공단 공문']
                },
                clickedIndex:0,
                
            }
        },
        methods:{
            goClick(indexClicked){
                this.clickedIndex = indexClicked
            }
        }
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
.button-category .category.active{
    background: #3498db;
    color:#ffffff;
}
.category-explain::after{
    content: '';
    display: table;
    clear: both;
}
</style>