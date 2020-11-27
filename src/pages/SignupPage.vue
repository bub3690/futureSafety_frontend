<template>
    <div class="SignupPage">
        <signup-form @signup:submit='onSubmit'></signup-form>
    </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
    export default {
        name:'SignupPage',
        components:{
            'SignupForm':SignupForm,
        },
        methods:{
            onSubmit(payload){
                console.log('submit1')
            }
        }
    }
</script>

<style scoped>
    .SignupPage{
        width:100%; 
        height:100%;
        background:url(/static/bg1.jpg)
    }
</style>