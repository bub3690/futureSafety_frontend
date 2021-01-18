<template>
        <div class="post-view">
            <div class="subject">
                <h3>{{post.title}}</h3>
            </div>
            <div class="info">
                <div class="writer">
                    <span class="title">작성자:</span>
                    {{post.author_name}}
                </div>
                <div class="date">
                    <span class="title">작성일:</span>
                    {{post.date_published_str}}
                </div>
            </div>
            <div class="fileInfo">
                <div class="sub">
                    <span class="title">첨부파일:</span>
                </div>
                <div class="data">
                    <span v-if="!!post.post_files" class="file">
                        <span v-for="item in post.post_files" :key="item.file_name">
                            <a :href="get_file_anchor(item.file)">{{get_file_name(item.file_name)}}</a><br>
                        </span>
                    </span>
                    <span v-else class="file">첨부파일이 없습니다.</span>
                </div>
            </div>            
            <div class="postContent">
                <viewer :initialValue="post.body" />
            </div>
        </div>
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/vue-editor';
import ListMixin from '../mixins/ListMixins.js';
    export default {
        name:'PostView',
        props:{
            post: {
                type: Object,
                required:true,
                validator(post){
                    const isValidTitle = !!post.title && post.title.length
                    const isValidContents = post.body && post.body.length
                    return isValidTitle && isValidContents;
                }
            }
        },
        components:{
            viewer:Viewer
        },
        methods:{
            get_file_anchor(file){
                const file_url = 'https://futuresafetyhome80.run.goorm.io/'+file
                return file_url
            },
            get_file_name(file){
                const file_name = file.split(',')[1].split('/')[1]
                return file_name
            }

        },
        mixins:[ListMixin],
    }
</script>

<style scoped>
.post-view{
    
    padding:19px;
    border:1px solid #e0e0e0;
    background-color:white;
    margin-bottom: 20px;
    font-size:14px;
}
.post-view .subject{
    margin:0;
    background: #f7f7f7;
    color:#343434;
    border-top:2px solid black;
    height:50px;
    border-bottom: 1px solid #bababa;

}
.post-view .subject h3{
    width:100%;
    margin:0;
    text-align: center;
    padding:16px;
    font-size:14px;
    font-weight:700;
}



.post-view .info{
    border-bottom:1px solid #bababa;
    padding:8px 25px;
    color:#6d6d6d;
    background: white;
    text-align: left;
}
.post-view .fileInfo{
    border-bottom:1px solid #bababa;
    padding:8px 25px;
    color:#6d6d6d;
    background: white;
    text-align: left;
}
.post-view .fileInfo .sub{
    display: inline-block;
    width:10%;
    vertical-align:top;
    text-align: left;
    margin:0;
}
.post-view .fileInfo .data{
    display: inline-block;
    width:70%;
    text-align: left;
    margin:0;
}

.post-view .fileInfo span.title{
    width:30%;
    font-weight:700;
    color:#6d6d6d;
}
.post-view .fileInfo span.file{
    width:70%;
    font-weight:300;
    color:#6d6d6d;
}



.post-view .info .writer{
    display: inline-block;
    width:35%;
    text-align: left;
    margin:0;
}
.post-view .info .date{
    display: inline-block;
    width:55%;
    text-align: right;
    margin-right: 20px;
}
.post-view .info .hit{
    display: inline-block;
    text-align:right;
}

.post-view .info span.title{
    font-weight:700;
    color:#6d6d6d;
}

.post-view .postContent{
    padding:20px 30px 10px;
}

</style>