<template>
    <div class="false-block">
        <h2>Welcome Back!</h2>
        <h3>To keep connected whith us please login with your personal info</h3>
        <new-button  @click="changeState">Sign in</new-button>
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