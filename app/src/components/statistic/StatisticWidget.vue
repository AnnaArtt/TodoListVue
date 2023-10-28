<template>
  <dialog-window v-model="isOpenedDialog">
    <h3>To do tasks: {{ getTodoList.length }}</h3>
    <div class="wrapper_charts">
      <ChartActions />
      <CharStatus />
    </div>
  </dialog-window>
</template>

<script>
import ChartActions from "@/components/statistic/ChartActions.vue";
import CharStatus from "@/components/statistic/CharStatus.vue";

import { mapGetters } from "vuex";
export default {
  name: "statistic-widget",
  components: {
    ChartActions,
    CharStatus,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isOpenedDialog: false,
    };
  },
  computed: {
    ...mapGetters(["getTodoList"]),
  },
  watch: {
    modelValue() {
      this.isOpenedDialog = this.modelValue;
    },
    isOpenedDialog() {
      this.$emit("update:modelValue", this.isOpenedDialog);
    },
  },
};
</script>

<style scoped>
h3 {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;

  font-size: 24px;
  color: #484848;
}
.wrapper_charts {
  display: flex;
}
</style>
