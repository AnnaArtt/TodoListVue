<template>
  <div class="pop_up" :class="{ pop_up_active: pop_up_active }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pop-up",
  props: {
    pop_up_active: {
      type: Boolean,
      required: true,
    },
  },
  // methods:{
  //     closeWindow(){
  //         console.log('I have worked first');
  //         this.$emit('update:modelValue',false);
  //     }
  // }
};
</script>

<style lang="scss">
.pop_up {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: -100px;
  left: 10px;

  width: auto;
  height: auto;

  padding: 25px 20px;

  font-size: 20px;

  background: #dda1a1;
  border: 1px solid #ffb6c1;

  color: #484848;

  border-radius: 10px;

  transition: all 1s 0s ease-in;
}
.pop_up_active {
  bottom: 10px;
  left: 10px;

  transition: all 1s;
}
</style>
