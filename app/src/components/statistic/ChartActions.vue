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
    ...mapGetters(["getTodoList", "getTypeColors"]),
    chartData() {
      let obj = {};
      obj = this.analysisActions();
      return obj;
    },
  },
  methods: {
    analysisActions() {
      let labels = [];
      let data = [];
      let backgroundColor = [];
      this.getTypeColors.forEach((item) => {
        let current_type = item.type;
        let count_type = 0;
        this.getTodoList.forEach((todo) => {
          if (todo.type == current_type) {
            ++count_type;
          }
        });
        labels.push(current_type);
        data.push(count_type);
        backgroundColor.push(item.color);
      });

      let obj_datasets = {
        label: "My First Dataset",
        data: data,
        backgroundColor: backgroundColor,
      };

      let result = {
        labels: labels,
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
