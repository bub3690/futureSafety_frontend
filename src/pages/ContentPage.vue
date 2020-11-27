<template>
    <div class="mask">
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
        </div>
    </div>
</template>

<script>
import Carousel from '../components/Carousel'
import CarouselSlide from '../components/CarouselSlide'
import SlideComponents from '../components/SlideComponents'
import BoardList from '../components/BoardList'
export default {
        name:'ContentPage',
        components:{
            Carousel,
            CarouselSlide,
            SlideComponents,
            BoardList
        },
    }
</script>

<style scoped>
.content-page{
    background: #f7f9fa;
    position:relative;
    width:100%;
    height:100%;
    float:left;
    overflow: hidden;
}

.mask{
    display: block;
    margin-left: 190px;
    height:100%;
}

</style>