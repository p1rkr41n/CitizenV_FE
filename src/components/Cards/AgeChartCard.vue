<template>
  <div>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
        :height="440"
    ></apexchart>
  </div>
</template>
<script>
export default {
  name: "age-chart-card",
  data: function () {
    return {
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
            text: 'Tuổi',
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
              return Math.abs(val) + "%";
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
            text: "Phần trăm",
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%";
            },
          },
        },
      },
      series: [
        {
          name: "Nam",
          data: [
            0.4, 0.88, 2.9, 3.8, 3.9, 4.2, 4.1,
            4.2, 4.5,
          ],
        },
        {
          name: "Nữ",
          data: [
            -0.8, -1.18, -3.96, -4.22,
            -4.3, -4.4, -4.1, -4,  -2.8,
          ],
        },
      ],
    };
  },
};
</script>
