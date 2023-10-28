<template>
  <div class="preloader_wrapper">
    <img src="@/assets/preloader.gif" alt="" />
    <div class="slogan">
      <div class="block_1"></div>
      <h2 class="slogan_title">
        Shared Tasks, Happy Futures<br />
        Family Todolist - Create the Perfect Family Collaboration!
      </h2>
      <div class="block_2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pre-loader",
  data() {
    return {
      hideBlock: true,
    };
  },
};
</script>

<style scoped lang="scss">
.preloader_wrapper {
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  z-index: 1000;
  background-color: #f5f5f5;
  .slogan {
    position: relative;
    width: 40vw;

    .slogan_title {
      font-size: 18px;
      font-weight: 300;
      font-style: italic;
      text-align: center;
    }

    .block_1 {
      position: absolute;
      width: 20vw;
      height: 100%;
      top: 0;
      left: 0;

      background-color: #f5f5f5;
      transition: 1s ease 0.5s;
      animation: leftBlock 2s forwards;
    }
    .block_2 {
      position: absolute;
      width: 20vw;
      height: 100%;
      top: 0;
      right: 0;

      background-color: #f5f5f5;
      transition: 1s ease 0.5s;
      animation: rightBlock 2s forwards;
    }
  }
  @keyframes leftBlock {
    0% {
      left: 0;
    }
    100% {
      transform: translate(-100%);
    }
  }

  @keyframes rightBlock {
    0% {
      right: 0;
    }
    100% {
      transform: translate(100%);
    }
  }
}
</style>
