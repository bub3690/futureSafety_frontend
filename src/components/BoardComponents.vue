<template>
    <div class="BoardComponents">
        <div class="header">
            <slot></slot>
        </div>
        <ul>
            <li v-for="list in lists" :key="list.id">
                <!-- 안전사고 속보에는 href 속성이 있지만, 공지사항 쪽에는 없기에, v-if와 goto로 구별함 -->
                <a v-if="list.href" :href="list.href">{{list.title}}</a>
                <router-link v-else-if="goto==='notice'" :to="{name:'NoticeDetail',params:{postId:list.id.toString()}}">{{list.title}}</router-link>
                <router-link v-else-if="goto==='safety'" :to="{name:'SafetyDetail',params:{postId:list.id.toString()}}">{{list.title}}</router-link>
                <span class="dateGroup">{{list.date_published}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"BoardComponents",
        props:{
            lists:Array,
            goto:String
        },
    }
</script>

<style scoped>
.header{
    border-bottom: 1px solid grey;
    margin:15px 10px 0px 10px;
    font-weight: 600;
    padding-bottom:6px;
    font-family:"ulR", "Nanum Square", "NanumBarunGothic", "돋움", Dotum, Helvetica, Verdana, Arial, sans-serif;
}
.header span{
    padding-bottom:6px;
}
.BoardComponents{
    
    text-align: left;
    
}
.BoardComponents ul{
    padding:0 0 0 10px;
}
.BoardComponents li{
    position:relative;
    margin-bottom: 10px;
    border-top:1px solid #e5e5e5;

}
.BoardComponents li:first-child{
    border: none;
}
.BoardComponents li a{
    position: relative;
    display: block;
    font-size: 18px;
    text-decoration: none;
    color:#555555;
    width:85%;
    font-weight: 400;
    line-height:20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow:hidden;
    padding:4px 0 4px 15px;
}
.BoardComponents li span.dateGroup{
    position:absolute;
    font-size: 10pt;
    right:0;
    top:10px;
    text-decoration: none;
    color:#555555;
}

</style>