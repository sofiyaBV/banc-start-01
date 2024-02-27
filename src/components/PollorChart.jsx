import React from "react";
import s from "../style/barChart.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function PollorChart() {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        lable: "My pie",
        data: [12, 23, 34, 45, 16],
        backgroundColor: ["red", "green", "orange", "blue", "yellow"],
        borderWidth: 0,
        hoverBackgroundColor: "#5932EA",
        hoverOffset: 30,
      },
    ],
  };
  const options = {};
  return (
    <div className={`${s.chart} ${s.doughnutChart}`}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
