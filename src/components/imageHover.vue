<template>
    <div class="container">
            <div class="title">
                <div class="bottom-line"></div>
                <slot></slot>
                <div class="bottom-line"></div>
            </div>
        <div class="imageHover">
            <img :src="imgSrc"/>
            <div class="overlay overlayLeft">
                <div class="text">Left</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'imageHover',
        props:{
            'imgSrc':String,
        }
    }
</script>

<style scoped>
.imageHover{
    display: inline-block;
    position:relative;
    box-sizing:border-box;
    width:280px;
    height:100%;
}
.container .title{
    display:flex;
    color:#2c3e50;
    font-weight: 1000;
    font-size:18px;

}
.title .bottom-line{
    flex:1;
    border-bottom:3px solid #999999;
    margin: 0 5px 5px 20px;
}
.imageHover img{
    max-width:100%;
    height:auto;
}
.imageHover .overlay{
    position:absolute;
    transition: all .3 ease;
    opacity:0;
    background-color: #3498db;
}
.imageHover .overlay .text{
    position:absolute;
    color:white;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:20px;
}
.overlayLeft{
    height:100%;
    width:0;
    top:0;
    left:0;
}
.imageHover:hover .overlayLeft{
    width:100%;
}
.imageHover:hover .overlayLeft{
    opacity:0.5; 
}
.imageHover:hover .overlayLeft .text{
    opacity:1;
}
</style>