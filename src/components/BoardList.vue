<template>
    <div class="BoardList">
        <table class="Board">
            <colgroup>
                <col width="50%"/>
                <col width="*"/>
            </colgroup>
            <tbody>
                <tr>
                    <td class="notice">
                        <board-components :lists="notice">
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
                    </td>
                    <td class="qna">
                        <board-components :lists="accident">
                            <span style="color:#2f3033; font-size:21px;">
                                안전사고 속보
                            </span >
                        </board-components>
                        </td>
                </tr>
            </tbody>


        </table>
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
                console.log('2')
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
        }
        ,
        created(){
            api.get('static/json/notice.json').then(
                res=>{  
                    this.notice= res.data.data.slice(0,5)
                }
            )
            api.get('static/json/safety.json').then(
                res=>{
                    this.safetyBoard= res.data.data.slice(0,5)
                }
            )
            api.get('static/json/accident.json').then(
                res=>{
                    this.accident= res.data.data.slice(0,5)
                }
            )
            this.nowList = this.notice
            //게시물은 5개로 고정, 처음 시작시 list는 notice

        }


    }
</script>

<style scoped>
    .BoardList{
        display:block;
        overflow: hidden;
        width:100%;
        margin:30px 10px 10px 10px;
    }
    .Board{
        border: 1px solid #c9c9c9;
        background: rgb(224,224,224);
        border-collapse: collapse;

    }
    .Board td.notice{
        background: white;

    }   
    .Board td.safetyBoard{
        background: white;
    }
    .Board td.qna{
        background:  white;
    }
    .Board td .plus{
        float:right;
        margin-right:10px;
    }
    .Board td .plus button{
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
</style>