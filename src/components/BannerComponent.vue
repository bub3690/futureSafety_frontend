<template>
    <div class="BannerComponent">
        <ul>
            <li>
                <a href="https://edu.kosha.or.kr/education/main.do" class="portal">
                    <img src="/static/banners/kosha.png">
                </a>
            </li>
            <li>
                <a href="https://www.kosha.or.kr/kosha/index.do" class="portal">
                    <img src="/static/banners/koshaEdu.png">
                </a>
                </li>
            <li>
                <a href="https://edu.kosha.or.kr/education/main.do" class="portal">
                <img src="/static/banners/bswhc.png">
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
    width:100%;
    padding:10px 0 0 0;
    }
.BannerComponent ul li{
    list-style: none;
    display: inline-block;
    padding-right:35px;
    height:54px;

}
.portal{
    cursor:pointer
}
.portal img{
    width:auto;
    height:54px;
}

</style>