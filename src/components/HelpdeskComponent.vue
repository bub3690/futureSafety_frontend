<template>
    <div class="HelpdeskComponent">
        <h5>상담문의 고객센터</h5>
        <div class="contact">
            <div class="phone">
                <i class="fas fa-phone-volume"></i>
            </div>
            <div class="number">
                <p>010-0000-0000</p>
                <p>010-1234-5678</p>
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
    height: 143px;
    background:#3D3E42;
    margin:10px;
    font-family: NanumGothic;
    padding:15px;
}
.HelpdeskComponent h5{
    color:#ffffff;
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
</style>