<template>
    <div class="BoardList">
        <table class="Board">
            <colgroup>
                <col width="33%"/>
                <col width="*"/>
                <col width="33%"/>
            </colgroup>
            <tbody>
                <tr>
                    <td class="notice"><board-components :lists="notice">
                        <span style="color:#f9aa00; font-size:21px;">
                            공지사항
                        </span>
                        <span class="plus">
                            <button @click.prevent="goRouter('notice')" class="btn-default">
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
                    <td class="safetyBoard"><board-components :lists="safetyBoard">
                        <span style="color:#5ad6f6; font-size:21px;">
                            안전 자료실
                        </span >
                        <span class="plus"><button class="btn-default"  
                        @click.prevent="goRouter('safety')" >더 보기
                        </button>
                        </span>
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
                colors:[
                    '#f9aa00',
                    '#3b8ccf',
                    '#5ad6f6'
                ],
                qnaimg:'static/phone.PNG'
            }
        }
        ,
        methods:{
            goRouter(to){
                this.$router.push({name:to})
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
            //게시물은 5개로 고정   

        }


    }
</script>

<style scoped>
    .BoardList{
        display:block;
        margin:10px 10px 10px 10px;
        padding: 30px 0px;
        overflow: hidden;
    }
    .Board{
        border: 1px solid #c9c9c9;
        background: rgb(224,224,224);
        width:100%; 
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
</style>