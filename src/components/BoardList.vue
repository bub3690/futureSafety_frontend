<template>
    <div class="BoardList">
        <div class="Board">
            <div class="boardcomponent notice">
                <board-components :goto="goto" :lists="nowList">
                    <a href="javascript:void(0);" style="font-size:21px;" :class="{'active':active,'titleAnchor':true}" @click="goData('notice')">
                    공지사항
                    </a>
                    |
                    <a href="javascript:void(0);" style="font-size:21px;" :class="{'active':!active,'titleAnchor':true}" @click="goData('safety')">
                    안전 자료실
                    </a >
                <span class="plus">
                    <button @click.prevent="goRouter(goto)" class="btn-default">
                        더 보기
                    </button></span>
                </board-components>
            </div>
            <div class="boardcomponent qna">
                <board-components :goto="'qna'" :lists="accident">
                    <span style="color:#2f3033; font-size:21px;">
                        안전사고 속보
                    </span >
                </board-components>
            </div>
        </div>
    </div>
</template>

<script>
import BoardComponents from './BoardComponents'
import api from '../api/index.js'
    export default {
        name:'BoardList',
        components:{
            'BoardComponents':BoardComponents,
        },
        data(){
            return{
                notice:[],
                safetyBoard:[],
                accident:[],
                nowList:[],
                colors:[
                    '#f9aa00',
                    '#3b8ccf',
                    '#5ad6f6'
                ],
                active:true,
                goto:'notice',
            }
        }
        ,
        methods:{
            goRouter(to){
                this.$router.push({name:to})
            },
            goData(to){
                if(to==='notice'){
                    this.nowList= this.notice
                    this.active=true
                    this.goto='notice'
                    //style 바꾸는 코드.
                }else{
                    this.nowList=this.safetyBoard
                    this.active=false;
                    this.goto='safety'
                }

            }
        },
        created(){
            api.get('/api/board/list/?board_id=A').then(
                res=>{
                    this.notice= res.data.slice(0,5).reverse()
                    this.nowList = this.notice
                    console.log(this.nowList)
                    //게시물은 5개로 고정, 처음 시작시 list는 notice
                }
            )
            api.get('/api/board/list/?board_id=B').then(
                res=>{
                    this.safetyBoard = res.data.slice(0,5).reverse()
                    console.log(this.safetyBoard)
                }
            )
            api.get('/api/board/accident/').then(
                res=>{
                    this.accident = res.data
                }
            )


        }


    }
</script>

<style scoped>
    .BoardList{
        display: block;
        box-sizing: border-box;
        overflow: hidden;
        border: 1px solid #c9c9c9;
        background: white;
        margin:30px 10px 10px 10px;
        padding: 0 20px 0 0;
    }
    .Board{
        border-collapse: collapse;
    }
    .Board .boardcomponent{
        background: white;
        float:left;
        width:50%;
    }
    .Board  .plus{
        float:right;
        margin-right:10px;
    }
    .Board  .plus button{
        border-radius: 4px; 
        padding:2px 12px;
        
    }
    .Board a{
        color:#999999;
        text-decoration: none;
    }
    .Board .active{
        color:#3b8ccf;
    }
    .Board .titleAnchor{
        font-weight:bold;
    }
    /*
    @media screen and (max-width:840px) {
        .Board .boardcomponent{
            float:none;
            width:100%;
        }
    }
    */
</style>