<template>
    <div class="BackgroundImg" :style="styleObject">
        {{this.backImg}}
    </div>
</template>

<script>
    export default {
        name:'BackgroundImg',
        props:{
            backImg:String,
        },
        computed:{
            backImg(){
                return this.backImg
            }
        },
        data:{
            styleObject:{
                backgroundImage:this.backImg
            }
        }

    }
</script>

<style scoped>
</style>