<template>
    <div class="MenuList">
        <input @click="listClick()" type="checkbox" :id="'action2'+num">
        <label :for="'action2'+num">
            <li :class="{'active':listActive}">
                <span><i :class="emoji"></i></span>
                <span>{{subject}}</span>
                <span v-if="!listActive"><i class="fas fa-angle-down"></i></span>
                <span v-else><i class="fas fa-angle-up"></i></span>
                <ul>
                    <slot></slot>
                </ul>
            </li>
        </label>
    </div>
</template>
<script>
    export default {
        name:'MenuList',
        props:{
            emoji:String,
            num:String,
            subject:String,
        },
        data(){
            return{
                listActive:false,
            }
        },
        methods:{
            inputClick(){
                this.$router.push({name:this.to})
            },
            listClick(){
                this.listActive = !this.listActive;
            }

        }
    }
</script>

<style scoped>
    /*메뉴선택시 */
    input[id*="action"]{
        display: none;
    }
    div.MenuList >label>  li{
        padding:22px 0px 22px 30px;
        border-bottom: 1px solid #252626;
        text-align: left;
        cursor: pointer;
    }
    div.MenuList >label> li span{
        display:inline-block;
        padding:8px 5px;
        text-decoration: none;
        color:#999999;
        font-family: NanumGothic;
        font-size: 14px;
    }
    div.MenuList >label> li.active > span{
        color:white;
    }
    div.MenuList  >label> li span >i{
        font-size:18px;
    }
    li.active{
        background: #3d3e42;
    }

    li:hover:not(.active){
        background: #3d3e42;
    }
    li:hover:not(.active) span{
        color:white;    
    }


/* 세부 메뉴 */
    div.MenuList >label> li > ul{
        background: #3d3e42;
        margin-top:12px;
        padding:0;
    }
    div.MenuList >label> li ul li{
        padding:10px 0 2px 15px;
    }
    div.MenuList >label> li ul li a{
        font-size:12px;
        color:#999999;
        text-decoration: none;
        display: block;
    }
    li:not(.active) > ul{
        display: none;
    }
    li.active > ul{
        display: block;
    }



</style>