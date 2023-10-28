<template>
  <div class="fra" style="height: 300px">
    <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DoughnutChart",
  components: { Doughnut },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // chartData: {
      //   labels: ["Red", "Blue", "Yellow"],
      //   datasets: [
      //     {
      //       // label: "My First Dataset",
      //       data: [300, 50, 100, 5],
      //       backgroundColor: [
      //         "rgb(255, 99, 132)",
      //         "rgb(54, 162, 235)",
      //         "rgb(255, 205, 86)",
      //         "rgb(255, 25, 83)",
      //       ],
      //       // hoverOffset: 4,
      //     },
      //   ],
      // },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
