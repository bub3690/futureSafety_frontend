<template>
            <div class="notice-page">
                <button-crumb>
                </button-crumb>
                <h2>{{boardTitle}}</h2>
                <router-view :list="posts" :boardTitle="boardTitle"></router-view>
                <!--<post-list :list="notice"></post-list>-->
                <!--<post-detail></post-detail>-->
                <div class="notice-footer">
                    <div class="button-area">
                        <button class="btn-default" @click="move({name:toList()})">목록</button>
                        <router-link :to="{name:'createPage'}"
                        tag="button"
                        class="btn-default write">
                            글쓰기
                        </router-link>
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
import {mapActions, mapState} from 'vuex';
    export default {
        name:'NoticePage',
        components:{
            'PostList':PostList,
            'PostDetail':PostDetail,
            'ButtonCrumb':ButtonCrumb,
        },
        computed:{
            ...mapState([
                'posts',
                'boardTitle'
            ])
        },
        methods:{
            dataGet(){
                const matching={'notice':'공지사항','safety':'안전 자료실'}
                
                //여기서 해당 게시판의 데이터를 가져옴.
                //그 후 props로 List한테만 넘겨줌. postdetail은 따로 데이터를 fetch해야함.
                //데이터 받아오는것 여기 쓰기 . /board/notice
                var dataArray = this.$route.path.split('/')
                var dataPath = 'static/json/'+dataArray[2]+'.json'
                const payload={'payload1':dataPath,'payload2':matching[dataArray[2]]}

                //0번 빈칸, 1번 board, 2번 notice
                this.fetchPostList(payload);
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
                'fetchPostList'
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

</style>