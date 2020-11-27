<template>
    <div class="SigninPage">
        <signin-form @signin:submit="onSubmit"></signin-form>
    </div>
</template>

<script>
    import SigninForm from '../components/SigninForm.vue'
    export default {
        name:'SigninPage',
        components: { SigninForm },
        methods:{
            onSubmit(payload){
                console.log('submit')
                //api를 담아야함.
            }
        }

    }
</script>

<style scoped>
.SigninPage{
    width:100%;
    height:100%;
    background:url(/static/bg1.jpg)
}
</style>