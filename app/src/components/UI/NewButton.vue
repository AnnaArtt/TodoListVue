<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default{
    name: 'new-button'
}
</script>

<style>
button{
    padding: 10px 15px;
    background: #F08080;
    color: #484848;
    border: 1px solid #FFB6C1;

    border-radius: 2px;
}
button:hover{
    background: #FFB6C1;
    color: #484848;
    border: 1px solid #F08080;
}
</style>