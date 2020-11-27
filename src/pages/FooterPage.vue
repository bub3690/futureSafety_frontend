<template>
    <div class="FooterPage">
        <div class="address">
            <span>[231112] 부산광역시 해운대구 해운대로 123 타운     </span>
            <span>Tel: +82-12-34-567-8</span>
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
        padding:28px 12px 0;
        box-shadow:inset 0 1px 1px black
    }
    .FooterPage .address{
        text-align: right;
        color:#999;
        font-size:12px;
    }
</style>