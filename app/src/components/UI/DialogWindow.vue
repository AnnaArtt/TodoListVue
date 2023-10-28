<template>
    <div class="dialog_frame" :value = "modelValue" v-if="modelValue" @click="closeWindow">
        <div class = "my_dialog" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default{
    name:"dialog-window",
    props:{
        modelValue:{
            type: Boolean,
            required: true
        }
    },
    methods:{
        closeWindow(){
            console.log('I have worked first');
            this.$emit('update:modelValue',false);
        }
    }
}
</script>

<style lang="scss">
.dialog_frame{
    position: fixed;
    display: flex;

    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);

    .my_dialog{
        padding: 20px;
        margin: auto;
        background: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 250px;
    }
}
</style>