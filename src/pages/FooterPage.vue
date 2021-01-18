<template>
    <div class="FooterPage">
        <div class="address">

            <p>[47846] 부산광역시 동래구 아시아드대로 255번길 9-1</p>
            <span>제비-401 (온천 3동 1288번지 미도빌딩)</span>
            <p>
                <span>Tel: 051-9160-114~5 / </span>
                <span>FAX: 051-9160-116</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'FooterPage',
    }
</script>

<style scoped>
    .FooterPage{
        box-sizing:border-box;
        min-height: 88px;
        float:left;
        width:100%;
        padding:28px 70px 0;
        box-shadow:inset 0 1px 1px black;
    }
    .FooterPage .address{
        text-align: left;
        color:rgb(223, 223, 223);
        line-height: 1.8;
        font-size:12px;
    }
</style>