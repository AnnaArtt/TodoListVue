<template>
  <DoughnutChart :chartData="chartData" />
</template>

<script>
import { mapGetters } from "vuex";
import DoughnutChart from "../charts/DoughnutChart.vue";
export default {
  name: "ChartActions",
  components: { DoughnutChart },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getTodoList"]),
    chartData() {
      let obj = {};
      obj = this.analysisActions();
      return obj;
    },
  },
  methods: {
    analysisActions() {
      let quant_todo = this.getTodoList.length;
      let done_task = 0;
      this.getTodoList.forEach((todo) => {
        if (todo.status == "done") {
          ++done_task;
        }
      });

      let obj_datasets = {
        label: "My First Dataset",
        data: [done_task, quant_todo - done_task],
        backgroundColor: ["#33453B", "#EED85A"],
      };

      let result = {
        labels: ["done", "in progress"],
        datasets: [obj_datasets],
      };
      return result;
    },
  },
  mounted() {
    this.analysisActions();
  },
};
</script>

<style></style>
