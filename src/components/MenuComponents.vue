<template>
    <div class="MenuComponents">
        <input @click="move({name:to})" type="checkbox" :id="'action1'+num">
        <label :for="'action1'+num">
                <li>
                <span><i :class="emoji" ></i></span>
                <span><slot></slot></span>
                </li>    
        </label>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import bus from '../utils/bus.js'
    export default {
        name:'MenuComponents',
        props:{
            emoji:String,
            to:String,
            num:String,
            isboard:Boolean
        },
        methods:{
            inputClick(){
                this.$router.push({name:this.to})
            },
            listClick(){
                this.listActive = !this.listActive;
            },
            dataGet(){
                //여기서 해당 게시판의 데이터를 가져옴.
                //그 후 props로 List한테만 넘겨줌. postdetail은 따로 데이터를 fetch해야함.
                //데이터 받아오는것 여기 쓰기 . /board/notice
                const dataArray = this.$route.path.split('/')
                const dataPath = dataArray[2]
                const payload=dataPath
                this.setBoardTitle(dataArray[2])
                //0번 빈칸, 1번 board, 2번 notice
                if(dataArray.length<=3){
                    //if문 이유는 detail페이지에서는 list 안부를려고.
                    this.fetchPostList(payload);
                }
            },            
            move(params){
                // get comparable fullPaths
                let from  = this.$route.fullPath
                let to    = this.$router.resolve(params).route.fullPath
                if(from === to) { 
                    // handle any error due the redundant navigation here
                    // or handle any other param modification and route afterwards
                    if(this.isboard===true){
                        //console.log("데이터 갱신")
                        this.dataGet()
                    }
                    return 
                }
                //console.log('push')
                // route as expected
                this.$router.push(params)
                if(this.isboard===true){
                    //console.log("데이터 갱신")
                    this.dataGet()
                }                
            },
            ...mapActions([
                'fetchPostList',
                'setBoardTitle'
            ])

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
    div.MenuComponents >label> li span{
        display:inline-block;
        padding:8px 5px;
        text-decoration: none;
        color:#999999;
        font-family: NanumGothic;
        font-size: 14px;
    }
    div.MenuComponents >label> li.active > span{
        color:white;
    }
    div.MenuComponents   >label> li span >i{
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
</style>