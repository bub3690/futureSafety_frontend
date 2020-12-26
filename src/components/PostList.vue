<template>
    <div class="PostList">
        <div class="util">
            <div>
                <span>전체 게시물 수:</span>
                <span>{{fullcount}}</span>
            </div>
            <div>
                <span>전체 페이지 :</span>
                <span>{{nowCount}}/{{fullcount}}</span>
            </div>
        </div>
        <table class="listTable">
            <colgroup>
                <col style="width:10%"/>
                <col style="width:60%"/>
                <col style="width:10%"/>
                <col style="width:20%"/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in checkedList" :key="post.id">
                    <td scope="col" class="tableNumber"><i class="fas fa-star checked"></i></td>
                    <td class="tableTitle" scope="col">
                        <router-link :to="{name:findDetail,
                        params:{postId:post.id.toString()}}"
                        class="checked">
                             (중요!) {{post.title}}
                        </router-link>
                        </td>
                    <td scope="col">{{post.author}}</td>
                    <td scope="col">{{post.date_published}}</td>
                </tr>

                <tr v-for="post in notChecked" :key="post.id">
                    <td scope="col">{{post.id}}</td>
                    <td class="tableTitle" scope="col">
                        <router-link :to="{name:findDetail,
                        params:{postId:post.id.toString()}}">
                             {{post.title}}
                        </router-link>
                        </td>
                    <td scope="col">{{post.author}}</td>
                    <td scope="col">{{post.date_published}}</td>
                </tr>
            </tbody>


        </table>
    </div>
</template>

<script>
    export default {
        name:'PostList',
        props:{
            list:Array,
            boardTitle:String,
        },
        computed:{
            fullcount(){
                return this.list.length;
            },
            nowCount(){
                return this.list.length;
            },
            findDetail(){
                if(this.boardTitle==='공지사항'){
                    return 'NoticeDetail';
                }else if(this.boardTitle==='안전 자료실'){
                    return 'SafetyDetail';
                }
            },
            checkedList(){
                const checked =this.list.filter((item,index,array)=>{
                    return item.is_important === true
                })
                console.log(checked)
                return checked;
            },
            notChecked(){
                const checked =this.list.filter((item,index,array)=>{
                    return item.is_important === false
                })
                console.log(checked)
                return checked;                
            }
        },
        mounted(){
            //Total1597 (1/160)
        },
    }
</script>

<style scoped>
.PostList{
    padding:19px;
    border:1px solid #e0e0e0;
    background-color:white;
    font-size:14px;
}

.util{
    margin-bottom:5px;
    float:right;
}
.util div{
    display: inline-block;
    margin-left: 10px;
}

.listTable{
    width:100%;
    border-top:2px solid black;
    border-spacing:0;
}
.listTable thead{
    background-color:#f7f7f7;
}

.listTable thead tr th{
    text-align: center;
    border-bottom:1px solid rgb(128,128,128);
}

.listTable tbody{
    border-top:3px solid rgb(128,128,128);
}
.listTable tbody td{
    padding:8px;
    border-top:1px solid #ddd;
    line-height: 1.42;
}
.listTable tbody td a{
    text-decoration: none;
    color:#555;
}

.listTable tbody .tableNumber .checked{
    color:#ffc107;
}
.listTable tbody .tableTitle{
    text-align: left;
    font-weight: 400;
}
.listTable tbody .tableTitle .checked{
    text-align: left;
    color:#005799;
    font-weight: 700;
}



</style>