<template>
    <div class="PostDetail">
        <div class="post">
            <div class="subject">
                <h3>2020-2학기 「학기 중 강의진단」 실시</h3>
            </div>
            <div class="info">
                <div class="writer">
                    <span class="title">작성자:</span>
                    운영자
                </div>
                <div class="date">
                    <span class="title">작성일:</span>
                    2020-10-05 15:15
                </div>
                <div class="hit">
                    <span class="title">조회수:</span>
                    3925
                </div>
            </div>
            <div class="postContent">
                <div class="text_to_html" id="yui_3_17_2_1_1605340201387_36">
                    <p id="yui_3_17_2_1_1605340201387_37">
                        2020학년도 2학기 「학기 중 강의 진단」을 실시합니다. 좋은강의를 위한 학생 여러분들의 많은 참여를 부탁드립니다.</p><p>■ 기간 : ~ 10월 25일(일)까지</p><p>■ 참여방법</p><p>&nbsp; 1) PC : 「학기 중 강의 진단」 참여하기(클릭!) ☞ 
                            <a href="http://sugang.inha.ac.kr/">http://sugang.inha.ac.kr/</a></p><p>&nbsp; 2) 모바일 : 인하대학교 모바일 앱/모바일 사이트 &gt; 포털서비스 &gt; 학기 중 강의진단 클릭&nbsp;</p><p><img src="https://learn.inha.ac.kr/pluginfile.php/39/mod_ubboard/article/28690/KakaoTalk_20201005_145344801.jpg" alt="" width="800" height="1125" class="img-responsive atto_image_button_text-bottom"><br>
                            </p>
                </div>
            </div>
        </div>
        <div class="postNavigation">
            <div class="pre_next">
                <div class="postTitle">
                    <span class="title">다음글: </span>
                    <a href="">2020-2학기 「학기 중 강의진단」 실시</a>
                </div>
                <div class="writer">
                    <span class="title">운영자</span>
                </div>
                <div class="date">
                    <span class="title">2020-09-25</span>
                </div>
            </div>
            <div class="pre_next">
                <div class="postTitle">
                    <span class="title">이전글: </span>
                    <a href="">2020-2학기 「학기 중 강의진단」 실시</a>
                </div>
                <div class="writer">
                    <span class="title">운영자</span>
                </div>
                <div class="date">
                    <span class="title">2020-09-25</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from '../api/index.js'
    export default {
        name:'PostDetail',
        data(){
            return{
                post:[],
            }
        }
        ,
        created(){
            //데이터 받아오는것 여기 쓰기 . /board/notice/6
            var dataArray = this.$route.path.split('/')
            console.log(dataArray)
            //0번 빈칸, 1번 board, 2번 notice ,3번 6
            var dataArray = this.$route.path.split('/')
            var dataPath = 'static/json/'+dataArray[2]+'.json'
            //0번 빈칸, 1번 board, 2번 notice
            api.get(dataPath).then(
                res=>{  
                    this.post= res.data.data
                }
            )

        }
        
    }
</script>

<style scoped>
.post{
    
    padding:19px;
    border:1px solid #e0e0e0;
    background-color:white;
    margin-bottom: 20px;
    font-size:14px;
}
.post .subject{
    margin:0;
    background: #f7f7f7;
    color:#343434;
    border-top:2px solid black;
    height:50px;
    border-bottom: 1px solid #bababa;

}
.post .subject h3{
    width:100%;
    margin:0;
    text-align: center;
    padding:16px;
    font-size:14px;
    font-weight:700;
}



.post .info{
    border-bottom:1px solid #bababa;
    padding:8px 25px;
    color:#6d6d6d;
    background: white;
    text-align: left;
}
.post .info .writer{
    display: inline-block;
    width:35%;
    text-align: left;
    margin:0;
}
.post .info .date{
    display: inline-block;
    width:35%;
    text-align: right;
    margin-right: 20px;
}
.post .info .hit{
    display: inline-block;
    text-align:right;
}

.post .info span.title{
    font-weight:700;
    color:#6d6d6d;
}

.post .postContent{
    padding:20px 30px 10px;
}




.postNavigation{
    padding:9px;
    border:1px solid #e0e0e0;
    margin-bottom:20px;
    background-color:white;
    margin-bottom: 20px;
    font-size:14px;
}
.postNavigation .pre_next{
    box-sizing: border-box; 
    border-bottom: 1px solid #eaeaea;
    padding:8px;
    height:40px;
    text-align: left;
}
.postNavigation .pre_next a{
    text-decoration: none;
}

.postNavigation :last-child{
    border-bottom:none;
}

.postNavigation .pre_next .postTitle{
    float:left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width:65%;
}
.postNavigation .pre_next .date{
    float:right;
}
.postNavigation .pre_next .writer{
    float:right;
    margin-right: 20px;
}

</style>