<template>
    <div class="false-block">
        <h2>Hello, Friend!</h2>
        <h3>Enter your personal details and start journey with us</h3>
        <new-button @click="changeState">Sign up</new-button>
    </div>
</template>
    
<script>
    import mixin from '../mixins/manageBlocks.js'
    export default{
        mixins: [mixin]
    }
</script>
    
<style lang="scss">
    .false-block{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 25vw;
    
        padding: 15px;

        height: 370px;

        flex-shrink:0;
        h3{
            display: flex;
            justify-content: center;

            padding: 10px;

            text-align: center;
        }
        h2,h3{
            color: #F5F5F5;
        }
    }
</style>