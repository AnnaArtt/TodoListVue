<template>
<div class="error_wrapper">
    <h2>Sorry...</h2>
    <p>Something was wrong. You can return to the previous page</p>
    <new-button>Previous page</new-button>
</div>
</template>

<script>
export default{

}
</script>

<style lang="scss">
.error_wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    h2, p{
        margin-bottom: 10px;
    }
}
</style>