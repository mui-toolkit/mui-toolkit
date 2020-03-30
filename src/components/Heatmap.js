import ApexCharts from "apexcharts";
import React, { Component } from "react";

export default class ApexChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Metric1",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric2",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric3",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric4",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric5",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric6",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric7",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric8",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        },
        {
          name: "Metric9",
          data: generateData(18, {
            min: 0,
            max: 90
          })
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "heatmap"
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: "HeatMap Chart (Single color)"
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}

// const domContainer = document.querySelector("#app");
// ReactDOM.render(React.createElement(ApexChart), domContainer);
