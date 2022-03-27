<template>
    <div class="PostList">
        <div class="util">
            <div>
                <span>전체 게시물 수:</span>
                <span>{{fullcount}}</span>
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
                <tr v-for="post in checkedList.reverse()" :key="post.id">
                    <td scope="col" class="tableNumber"><i class="fas fa-star checked"></i></td>
                    <td class="tableTitle" scope="col">
                        <router-link :to="{name:findDetail,
                        params:{postId:post.id.toString()}}"
                        class="checked">
                             (중요!) {{post.title}}
                        </router-link>
                        </td>
                    <td scope="col">{{post.author_name}}</td>
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
                    <td scope="col">{{post.author_name}}</td>
                    <td scope="col">{{post.date_published}}</td>
                </tr>
            </tbody>


        </table>
        <div class="pagination-area">
            <button v-for="page in pageCalc" :key="page"
            :class="{'btn-default selected':page==pagination,
                    'btn-default':page!=pagination}" @click="go_page(page)">
                {{page}}
            </button>
        </div>
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
                //PROPS가 vuex에 담겨있는 'A','B','C'에따라 랜더된것. Noticepage로 갈것
                if(this.boardTitle==='공지사항'){
                    return 'NoticeDetail';
                }else if(this.boardTitle==='안전 자료실'){
                    return 'SafetyDetail';
                }else if(this.boardTitle==='고객 문의'){
                    return 'HelpDetail'
                }
            },
            checkedList(){
                const checked =this.list.filter((item,index,array)=>{
                    return item.is_important === true
                })
                return checked;
            },
            notChecked(){
                //중요 게시물이 아니며, 페이지네이션에 포함되는지 계산.
                //페이지네이션은 중요 게시물은 개수에 미포함.
                const start = (this.pagination-1)*this.pageSize
                const end = start + this.pageSize
                //.reverse는 원본 리스트를 바꾸기에 전개 연산자 사용함.
                const reversed_list = [...this.list].reverse();
                const not_checked = reversed_list.slice(start,end).filter((item,index,array)=>{
                    return item.is_important === false
                })
                return not_checked;                
            },
            pageCalc(){
                //전체 페이지 계산
                const list_len = this.list.length
                var total_page = Math.floor(list_len/this.pageSize) + (list_len%this.pageSize ? 1:0)
                return total_page

            },
        },
        data(){
            return{
                pagination:1,
                pageSize:20,//pageSize 한페이지당 몇개 게시물 나올지결정.(중요게시물 미포함)
            }
        },
        methods:{
            go_page(page_num){
                this.pagination = page_num
            },

        },
        mounted(){
            //비동기이기에 mounted에서는 아직 props를 전달 못받는 문제가 있다.
            //그럴땐 computed에서 해준다.
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


/* 
pagination button들
*/
.pagination-area{
    margin:10px 0;

}
.pagination-area .selected{
    background: #005799;
    color:white;
    border:1px solid #ddd;
}



</style>