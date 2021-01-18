<template>
    <div class="BannerComponent">
        <ul>
            <li>
                <a href="https://edu.kosha.or.kr/education/main.do" class="portal">
                    <img src="/static/banners/banner1-고용노동청.jpg">
                </a>
            </li>
            <li>
                <a href="https://www.kosha.or.kr/kosha/index.do" class="portal">
                    <img src="/static/banners/banner2-안전보건공단.jpg">
                </a>
                </li>
            <li>
                <a href="https://edu.kosha.or.kr/education/main.do" class="portal">
                <img src="/static/banners/banner3-안전보건공단교육.jpg">
                </a>    
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'BannerComponent',
    }
</script>

<style scoped>
.BannerComponent{
    width:auto;
    padding:10px 0 0 0;

    }

.BannerComponent ul li{
    list-style: none;
    display: inline-block;
    margin-right:35px;
    height:60px;
    border:1px solid #c9c9c9;

}
.portal{
    cursor:pointer
}


</style>