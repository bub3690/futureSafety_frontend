<template>
        <div class="content-page">
            <slide-components></slide-components>
            <!--
            <carousel>
                <carousel-slide>
                    <img src='https://placeimg.com/970/240/any?1'/>
                </carousel-slide>
                <carousel-slide>
                    <img src='https://placeimg.com/970/240/any?2'/>
                </carousel-slide>
                <carousel-slide>
                    <img src='https://placeimg.com/970/240/any?3'/>
                </carousel-slide>
            </carousel>
            -->         
                <board-list></board-list>
                <banner-component></banner-component>
        </div>
</template>

<script>
import Carousel from '../components/Carousel'
import CarouselSlide from '../components/CarouselSlide'
import SlideComponents from '../components/SlideComponents'
import BoardList from '../components/BoardList'
import ImageList from '../components/imageList.vue'
import BannerComponent from '../components/BannerComponent.vue'
export default {
        name:'ContentPage',
        components:{
            Carousel,
            CarouselSlide,
            SlideComponents,
            BoardList,
            ImageList,
            BannerComponent
        },
    }
</script>

<style scoped>
.content-page{
    display: block;
    background: #f7f9fa;
    position:relative;
    width:calc(100% - 190px);
    height:100%;
    float:left;
    overflow: hidden;
}
</style>