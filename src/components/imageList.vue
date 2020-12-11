<template>
    <div class="imageList">
        <h2>사업소개</h2>
        <div class="wrap">
            <image-hover class="first" :imgSrc="imgSrc[0]">
                <div class="center">PSM</div>
            </image-hover>
            <image-hover :imgSrc="imgSrc[1]">
                <div class="center">유해위험방지 계획서</div>
            </image-hover>
            <image-hover class="last" :imgSrc="imgSrc[2]">
                <div class="center">안전관리대행•회원제</div>
            </image-hover>
        </div>
    </div>
</template>

<script>
import imageHover from './imageHover.vue'
    export default {
        //220 260
        name:'imageList',
        components: { imageHover },
        data(){
            return{
                imgSrc:['/static/menuhover/psmJPG.jpg',
                        '/static/menuhover/report.jpg',
                        '/static/menuhover/safety.jpg']
            }
        }
    }
</script>

<style scoped>
    .imageList{
        margin:10px 10px 10px 10px;
        padding: 0px;
        overflow: hidden;
        min-width:1068px;
        height:calc(60% - 55px);
    }
    .imageList .wrap{
        display: flex;
        justify-content: space-between;
        margin:0 20px;
    } 
    .Board{
        border: 1px solid #c9c9c9;
        background: rgb(224,224,224);
        width:100%; 
    }
    .imageList h2{
        margin-top:0px;
    }
    .imageList .first{
        margin-left:30px;
    }
    .imageList .last{
        margin-right:30px;
    }
</style>