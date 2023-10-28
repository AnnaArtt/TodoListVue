<template>
<div class="wrapper_box">
    <div class="wrapper_checkbox">
        <input id='all_list' type="checkbox" :checked="checked_box" @change="updateValue">
        <h4 class="checkbox_title">View all</h4>
    </div>

    <new-select 
        v-model="checked_option" 
        :array_values="array_options"
        style="width:auto"
    >
    </new-select>
</div>
</template>

<script>
export default{
    name: 'filter-box',
    props:{
        checked_box:{
            type: Boolean,
            required: true
        },
        checked_option_props:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            checked_option: '',
            array_options: ['vacation', 'hobby', 'study/work', 'housework', 'other', 'all']
        }
    },
    methods:{
        updateValue(event){
            this.$emit('update:checked_box', event.target.checked)
        }
    },
    watch:{
        checked_option(value){
            this.$emit('update:checked_option_props', value);
        }
    }
}
</script>

<style lang="scss">
.wrapper_box{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border: 2px solid #FFB6C1 ;
    padding: 5px;
    .wrapper_checkbox{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .checkbox_title{
            position: relative;
            width: 100%;
            padding-left: 5px;

            white-space: nowrap;

            font-size: 22px;
            font-weight: 300;
            color: #484848;
        }
        input{
            position: relative;
        }
    }
}
</style>