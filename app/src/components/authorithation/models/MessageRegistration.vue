<template>
    <dialog-window v-model="visibleDialog" style="z-index: 100;">
        <div class="message_wrapper">
            <h3>{{ message }}</h3>
        </div>
        <div class="button_wrapper">
            <new-button @click="visibleDialog=false">Close</new-button>
        </div>
    </dialog-window>
</template>

<script>

export default{
    props: {
        modelValue:{
            type: Boolean,
            required: true 
        },
        message: {
            type: String,
            required: true
        }
    },
    watch:{
        modelValue(){
            this.visibleDialog = this.modelValue
        },
        visibleDialog(){
            this.$emit('update:modelValue', this.visibleDialog)
        }
    },
    data() {
        return {
            visibleDialog: false
        };
    }
}
</script>

<style>
.button_wrapper, .message_wrapper{
    display: flex; 
    justify-content: center;
}
</style>