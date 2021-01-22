<template>
    <div class="left-page">
        <ul class="menus">
            <menu-components emoji="far fa-building" :isboard="true" to='notice' num='1' >
                회사소개
            </menu-components>
            <menu-list emoji="fas fa-briefcase" 
            num='1' subject="주요사업">
                <li>
                    <router-link :to="{name:'category3'}">
                        안전관리대행
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'category3'}">
                        안전보건관리 담당자 대행
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'category3'}">
                        유해위험 방지계획서
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name:'category3'}">
                        회원제 관리
                    </router-link>
                </li>
            </menu-list>
            <menu-components emoji="far fa-clipboard" :isboard="true" to='notice'  num='3' >
                공지사항
            </menu-components>
            <menu-components emoji="far fa-copy" :isboard="true" to='safety'  num='4' >
                안전 자료실
            </menu-components>
            <helpdesk-component></helpdesk-component>
        </ul>
    </div>
</template>
<script>
import HelpdeskComponent from '../components/HelpdeskComponent'
import MenuComponents from '../components/MenuComponents'
import MenuList from '../components/MenuList.vue'
    export default {
        name:'LeftPage',
        components:{
            'MenuComponents':MenuComponents,
            'MenuList':MenuList,
            'HelpdeskComponent':HelpdeskComponent
        }
        ,
        data(){
            return{
                listActive:false,
            }
        }
        ,
        methods:{
            inputClick(){
                this.$router.push({name:'notice'})
            },
            listClick(){
                this.listActive = !this.listActive;
            },

        }
        
    }
</script>

<style scoped>
/*메뉴선택시 */
    input[id*="action"]{
        display: none;
    }
    .left-page{
        width:190px;
        float:left;
        background-color:rgb(47, 48, 51);
        position: relative;
    }
    ul.menus{
        margin:0;
        padding:0;
        width:190px;
        background-color:rgb(47, 48, 51);
       
    }
    div.MenuComponents >label>  li{
        padding:22px 0px 22px 30px;
        border-bottom: 1px solid #252626;
        text-align: left;
        cursor: pointer;
    }
    div.MenuComponents >label> li a{
        display:inline-block;
        padding:8px 5px;
        text-decoration: none;
        color:#999999;
        font-family: NanumGothic;
        font-size: 14px;
    }

    div.MenuComponents   >label> li a >i{
        font-size:18px;
    }
    li.active{
        background: #3d3e42;
    }

    li:hover:not(.active){
        background: #3d3e42;
    }
    li:hover:not(.active) a{
        color:white;    
    }   


/* 세부 메뉴 */
    ul.menus >label> li > ul{
        background: #3d3e42;
        color:#999999;
        margin-top:10px;
        padding:0;
    }
    ul.menus >label> li ul li{
        padding:10px 0 2px 10px;
    }
    ul.menus >label> li ul li a{
        font-size:12px;
    }
    li:not(.active) > ul{
        display: none;
    }
    li.active > ul{
        display: block;
    }


</style>