import React from "react";
import { Bar } from "react-chartjs-2";
import s from "../style/barChart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "balance",
        data: [2, 5, 5, 7, 8],
        backgroundColor: "#F2EFFF",
        hoverBackgroundColor: "#5932EA",
        borderRadius: "5",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: { beginAtZero: true, grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false }, display: false },
    },
  };
  return (
    <div className={`${s.barChart} ${s.chart}`}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
