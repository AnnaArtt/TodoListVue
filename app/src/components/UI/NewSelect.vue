<template>
    <select :value = 'modelValue' @change="changeValue">
        <option value="" disabled selected>Select your option</option>
        <option v-for = "(val, index) in array_values" :value = "val" :key = "val">{{ valueNameArr[index] }}</option>
    </select>
    <!-- <h2>{{ valueName(1) }}</h2> -->

</template>

<script>
export default{
    name: 'new-select',
    props: {
        modelValue:{
            type: String
        },
        array_values:{
            type: Array,
            required: true
        }
    },
    computed:{
        valueNameArr: function(){
            let new_arr = []
            new_arr = this.array_values.map(item => item.slice(0, 1).toUpperCase() + item.slice(1));
            return  new_arr
        }
    },
    methods:{
        changeValue(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
    select{
        width: 100%;
        padding: 10px 5px;
        border: 1px solid #FFB6C1
    }
</style>