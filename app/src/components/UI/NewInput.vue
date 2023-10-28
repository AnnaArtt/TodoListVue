<template>
    <input :value = 'modelValue' @input = 'changeValue' type="text">
</template>

<script>
export default{
    name: 'new-input',
    props: {
        modelValue:{
            type: String,
            required: true
        }
    },
    methods: {
        changeValue(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
input{
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #FFB6C1 ;
}
</style>