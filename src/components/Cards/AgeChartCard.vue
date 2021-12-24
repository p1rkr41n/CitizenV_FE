<template>
  <div>
    <apexchart
      type="bar"
      ref="realtimeChart"
      :options="chartOptions"
      :series="series"
      :height="440"
    ></apexchart>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "age-chart-card",
  computed: mapGetters(["getidarea"]), // get from store
  data: function () {
    return {
      ageData: [],
      maleAgeData: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
        },
        colors: ["#008FFB", "#FF4560"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            text: "Tuổi",
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val;
            },
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + " Người";
            },
          },
        },
        title: {
          text: "Tháp tuổi tính đến thời điểm hiên tại",
        },
        xaxis: {
          categories: [
            "80+",
            "70-79",
            "60-69",
            "50-59",
            "40-49",
            "30-39",
            "20-29",
            "10-19",
            "0-9",
          ],
          title: {
            text: "Người",
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "";
            },
          },
        },
      },
      series: [
        {
          name: "Nam",
          data: [],
        },
        {
          name: "Nữ",
          data: [],
        },
      ],
    };
  },
  async created() {
    axios
      .get(
        `http://localhost:3000/api/address/statistics`
      )
      .then((res) => {
        (this.ageData = res.data.RangeAgeAndGenderData), null, 2;
        for (let i = 0; i < this.ageData.length; i++) {
          if (i <= 8) {
            this.series[0].data.push(this.ageData[i].count);
          }
          if (i > 8 && i <= 16) {
            this.series[1].data.push(0 - this.ageData[i].count);
          }
        }
        console.log(this.series[0].data);
        this.$refs.realtimeChart.updateSeries([
          {
            name: "Nam",
            data: this.series[0].data,
          },
          {
            name: "Nữ",
            data: this.series[1].data,
          },
        ]);
      });
  },
};
</script>
