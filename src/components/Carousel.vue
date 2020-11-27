<template>
    <div class="carousel">
        <slot></slot>
        <div class="description">안전한 산업의 미래<br>(주)부산경남산업안전본부
        </div>
        <button class="carousel__nav carousel__next" @click.prevent="next">다음</button>
        <button class="carousel__nav carousel__prev" @click.prevent="prev">이전</button>
        <div class="carousel__pagination">
        <button v-for="n in slideCount" 
            :key=n 
            @click="goto(n-1)"
            :class="{active: (n-1)==index}"
            >
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Carousel',
        data(){
            return{
                index: 0,
                slides: [],
                direction:'right'
            }
        },
        computed:{
            slideCount(){
                return this.slides.length;
            }
        }
        ,
        methods:{
            next(){
                this.index++;
                this.direction='right';
                if(this.index>=this.slideCount){
                    this.index=0
                }
            },
            prev(){
                this.index--;
                this.direction='left';
                if(this.index<0){
                    this.index=this.slideCount-1
                }
            },
            goto(i){
                this.direction= i > this.index ? 'right':'left'
                this.index=i
                //시간 마다 이동되는것 추가해야함.
            }
        }
        ,
        mounted(){
            console.log("casrousel mount")
            this.slides=this.$children
            this.slides.forEach((slide, i)=>{
                slide.index = i
            })
                
            }
        }
        
</script>

<style scoped>
.carousel{
    position:relative;
    overflow: hidden;
    margin:10px 10px;
}

.carousel__nav{
    position: absolute;
    top:50%;
    left: 10px;
    width:63px;
    height:63px;

}
.carousel__nav.carousel__next{
    right:10px;
    left:auto;
}

/* 페이지네이션 버튼 */
.carousel__pagination{
    position: absolute;
    bottom: 10px;
    left:0;
    right:0;
    text-align:center;
}

.carousel__pagination button{
    display:inline-block;
    width:10px;
    height:10px;
    background:  #fff;
    opacity:0.8;
    border-radius: 10px;
}
.carousel__pagination button.active{
    background: #000;
}


/* 설명 */
.description{
    position:absolute;
    left:0;
    right:0;
    text-align: center;
    top:50%;
    color:#fff;
    font-size:32px;
    font: bold;
    font-family:"ulR", "Nanum Square", "NanumBarunGothic", "돋움", Dotum, Helvetica, Verdana, Arial, sans-serif;

}
</style>