<template>
            <div class="notice-page">
                <button-crumb>
                </button-crumb>
                <h2>{{boardTitle_change}}</h2>
                <router-view :list="posts" :boardTitle="boardTitle_change"></router-view>
                <!--<post-list :list="notice"></post-list>-->
                <!--<post-detail></post-detail>-->
                <div class="notice-footer">
                    <div class="button-area">
                        <button class="btn-default" @click="move({name:toList()})">목록</button>
                        <router-link :to="{name:'createPage'}"
                        tag="button"
                        class="btn-default">
                            글쓰기
                        </router-link>
                        <router-link v-if="!!isDetail&isAuthorized" 
                        :to="{name:'editPage',params:{postId:getPostId}}"
                            tag="button"
                            class="btn-default edit right">
                                수정하기
                        </router-link>
                        <button v-if="!!isDetail&isAuthorized" 
                        class="btn-default delete right">
                                삭제하기
                        </button>
                    </div>
                    <div class="fieldset">
                        <select class="select-default">
                            <option>제목</option>
                            <option>내용</option>
                            <option>작성자</option>
                        </select>
                        <input type="text" placeholder="검색어" class="search-default"/>
                        <button class="btn-default">검색</button>
                    </div>
                </div>
            </div>
</template>

<script>
import PostList from '../components/PostList'
import PostDetail from '../components/PostDetail'
import ButtonCrumb from '../components/ButtonCrumb'
import ListMixin from '../mixins/ListMixins.js';
import {mapActions, mapState, mapGetters} from 'vuex';
    export default {
        name:'NoticePage',
        components:{
            'PostList':PostList,
            'PostDetail':PostDetail,
            'ButtonCrumb':ButtonCrumb,
        },
        computed:{
            boardTitle_change(){
                const matching1={'A':'공지사항','B':'안전 자료실'}
                return matching1[this.boardTitle]
            },
            isDetail(){
                //0번 빈칸, 1번 board, 2번 notice
                if( this.$route.path.split('/').length<=3){
                    //if문 이유는 detail 페이지가 아니면 수정하기 버튼 안보이게.
                    return false;
                }
                return true
            },
            getPostId(){
                return this.$route.path.split('/')[3]
            },
            ...mapState([
                'posts',
                'boardTitle'
            ]),
            ...mapGetters([
                'isAuthorized'
            ])
        },
        methods:{
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
            toList(){
                    //if 달아서, data만 갱신하게 고치던가 등등
                    var dataArray = this.$route.path.split('/')
                    var boardName = dataArray[2]
                    return boardName;
                    //this.$router.resolve({name:boardName})
                },
            move(params){
                // get comparable fullPaths
                let from  = this.$route.fullPath
                let to    = this.$router.resolve(params).route.fullPath
                if(from === to) { 
                    // handle any error due the redundant navigation here
                    // or handle any other param modification and route afterwards
                    this.dataGet()
                    return 
                }
                // route as expected
                this.$router.push(params)
                this.dataGet()
            },
            ...mapActions([
                'fetchPostList',
                'setBoardTitle'
            ])
            
        },
        created(){
            this.dataGet()
        },
        mixins:[ListMixin],

    }
</script>

<style scoped>

.notice-page{   
    background: #f7f9fa;
    box-sizing: border-box;
    position:relative;
    min-height:668px;
    width:calc(100% - 190px);
    float:left;
    overflow: hidden;
    padding: 32px 40px;
    font-family: NanumGothic,"나눔고딕",NanumGothic,"돋움",dotum,sans-serif;
}
.notice-page button{
    height:34px;
}
.notice-page h2{
    text-align:left;
}
.notice-page .notice-footer{
    margin-top:30px;
}
.fieldset input,select{
    margin-right: 5px;
}

.button-area{
    margin-bottom:30px;
    text-align:left;
}

.button-area .right{
    float:right;
}

</style>