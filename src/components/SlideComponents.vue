<template>
    <div class="slide-components">
        <div class="description">미래 안전은 관심과 집중으로!
            <br>(주) 미래안전기술원
        </div>
        <div class="trans">
        <transition name="fade" mode="in-out">
            <img :key="currentNumber"
                :src="images[currentNumber%imageLength]"/>
        </transition>
        </div>
        <div class="carousel__pagination">
            <button
                :class="{'stopButton':true,'active':stop}"
                @click.prevent="stopRotation">
                    <label>
                        <span></span>
                        <span></span>
                    </label>
                </button>
            <button v-for="n in imageLength"
                :key=n 
                @click.prevent="goTo(n-1)"
                :class="{active: (n-1)==currentNumber%imageLength}"
                >
                </button>
        </div>
    </div>
</template>

<script>


export default {
    name:"SlideComponents",
    data(){
        return{
           images:['static/bg1.jpg',
                    'static/bg2.jpg',
                    'static/bg3.jpg'],
            currentNumber:0,
            timer:null,
            stop:false,
        }
    },
    computed:{
        imageLength(){
            return this.images.length;
        }
    }
    ,
    methods:{
        ready(){
            this.startRotation();
        },
        startRotation(){
            this.stop=false;
            this.timer= setInterval(this.next,3000);
        },
        stopRotation(){
            if(this.stop===true){
                this.startRotation();
            }else{
                this.stop=true;
                clearTimeout(this.timer);
                this.timer=null;
            }

        },
        next(){
            this.currentNumber+=1;
        },
        goTo(pageIndex){
            //몇번 눌렀을때 변경 current변경
            this.currentNumber=pageIndex;
            this.stopRotation()
            this.startRotation()
        }
    },
    mounted(){
        this.ready();
    }
    
}
</script>
<style scoped>
.slide-components{
    position:relative;
    overflow: hidden;
    width:100%;
    height:calc(45% - 54px);
    margin:10px 10px;
    
}
.slide-components div.trans{
    position:relative;
    width:100%;
    height:100%;
}
.slide-components div.trans img{
    position:absolute;
    top:0;
    left:0;
    max-width:100%;
    height:auto;
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 1s ease;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}



/*설명 */
.description{
    position:absolute;
    z-index: 9;
    left:0;
    right:0;
    text-align: center;
    top:50%;
    color:#fff;
    font-size:32px;
    font: bold;
    font-family:"ulR", "Nanum Square", "NanumBarunGothic", "돋움", Dotum, Helvetica, Verdana, Arial, sans-serif;
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
    width:18px;
    height:18px;
    background:  #fff;
    opacity:0.8;
    border-radius: 10px;
    text-align:center;
    box-shadow: 1px 1px 1px #4a4a4a;
    margin-right: 4px;
}
.carousel__pagination button.active{
    background: #FEAD12;
}


/*스탑 스타트 버튼 */
.carousel__pagination .stopButton label{
    display: block;
    width:15px;
    height:14px;
    position:relative;
    cursor:pointer;
}
.carousel__pagination .stopButton label span{
    display:block;
    position: absolute;
    height:90%;
    width:4px;
    border-radius: 30px;
    background: #AAAAAA;
}
.carousel__pagination .stopButton label span:nth-child(1){
    top:5%;
    left:30%;
}
.carousel__pagination .stopButton label span:nth-child(2){
    top:5%;
    left:70%;
}


</style>