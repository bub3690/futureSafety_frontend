<template>
    <div class="ButtonCrumb">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'ButtonCrumb',
    }
</script>

<style scoped>
.ButtonCrumb{
    border-bottom:1px solid #d9dbdb;
}
</style>