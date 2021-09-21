<template>
    <div class="HelpdeskComponent">
        <h5>상담문의 고객센터</h5>
        <div class="contact">
            <div class="phone">
                <i class="fas fa-phone-volume"></i>
            </div>
            <div class="number">
                <p>051-9160-114</p>
                <p>051-9160-115</p>
            </div>
        </div>
        <br class="clear">
        <h5>주요 임원</h5>
            <div class="members">
                <div class="member">
                    <p class="name">대표이사 손용수</p>
                    <p> 010-8228-3651 </p>
                </div>
                    
                <div class="member">
                    <p class="name">관리이사 이삼규</p>
                    <p>010-4547-5832</p>
                </div>
                    
                <div class="member">
                    <p class="name">기술이사 김영남</p>
                    <p>010-8825-0045</p>
                </div>
                    
                <div class="member">
                    <p class="name">기술이사 양해준</p>
                    <p>010-3471-2632</p>
                </div>
                    
                <div class="member">
                    <p class="name">기술이사 은장혁</p>
                    <p>010-9818-4886</p>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name:'HelpdeskComponent',

    }
</script>

<style scoped>
.HelpdeskComponent{
    box-sizing: border-box;
    width:167px;
    height:auto;
    overflow: hidden;
    background:#3D3E42;
    margin:10px;
    font-family: NanumGothic;
    padding:15px;
}
.clear{
    clear:both;
}
.HelpdeskComponent h5{
    color:#ffffff;
    margin:15px 0;
}
.HelpdeskComponent .contact{

    color:#999999;
    padding:0 3px;
}
.HelpdeskComponent .contact .phone{
    float:left;
    font-size:30px;

}
.HelpdeskComponent .contact .number{
    font-size:12px;
    float:left;
    margin-left:10px;
}
.HelpdeskComponent .members{
    color:#999999;
    font-size:12px;
}
.HelpdeskComponent .members .member{
    margin-bottom: 5px;
}
.HelpdeskComponent .members .name{
    color:#ececec;
    font-weight: 900;
}
</style>