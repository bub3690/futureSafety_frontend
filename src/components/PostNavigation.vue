<template>
    <div class="postNavigation">
        <div class="pre_next" v-if="!!next">
            <div class="postTitle">
                <span class="title">다음글: </span>
                <router-link :to="{name:findDetail,params:{postId:next.id.toString()}}">
                    {{next.title}}
                </router-link>
            </div>
            <div class="writer">
                <span class="title">{{next.author_name}}</span>
            </div>
            <div class="date">
                <span class="title">{{next.date_published}}</span>
            </div>
        </div>
        <div class="pre_next" v-else>
            <div class="postTitle">
                <span class="title">다음글: </span>
                <a href="">이전글이 없습니다.</a>
            </div>
            <div class="writer">
                <span class="title">운영자</span>
            </div>
            <div class="date">
                <span class="title">2020-09-25</span>
            </div>
        </div>      
        <div class="pre_next" v-if="!!prev">
            <div class="postTitle">
                <span class="title">이전글: </span>
                <router-link :to="{name:findDetail,params:{postId:prev.id.toString()}}">
                    {{prev.title}}
                </router-link>
            </div>
            <div class="writer">
                <span class="title">{{prev.author_name}}</span>
            </div>
            <div class="date">
                <span class="title">{{prev.date_published}}</span>
            </div>
        </div>
        <div class="pre_next" v-else>
            <div class="postTitle">
                <span class="title">이전글: </span>
                <span>이전글이 없습니다.</span>
            </div>
            <div class="writer">
                <span class="title"></span>
            </div>
            <div class="date">
                <span class="title"></span>
            </div>
        </div>      
    </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        name:'PostNavigation',
        props:{
            next:Object,
            prev:Object,
        },
        computed:{
            findDetail(){
                if(this.boardTitle==='A'){
                    return 'NoticeDetail';
                }else if(this.boardTitle==='B'){
                    return 'SafetyDetail';
                }
            },
            ...mapState(['boardTitle'])
        },
    }
</script>

<style scoped>
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