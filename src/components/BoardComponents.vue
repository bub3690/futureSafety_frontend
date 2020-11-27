<template>
    <div class="BoardComponents">
        <div class="header">
            <slot></slot>
        </div>
        <ul>
            <li v-for="list in lists" :key="list.title">
                <a href="#">{{list.title}}</a>
                <span>[{{list.publishedDate}}]</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"BoardComponents",
        props:{
            lists:Array
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
    margin-bottom: 10px;
}
.BoardComponents li a{
    font-size: 11pt;
    text-decoration: none;
    color:#555555;
}
.BoardComponents li span{
    font-size: 10pt;
    float:right;
    text-decoration: none;
    color:#555555;
}

</style>