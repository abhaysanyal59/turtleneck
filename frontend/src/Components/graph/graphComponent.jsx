import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartComponent = ({ type = "bar", data, options = {} }) => {
  const ChartComponent = type === "line" ? Line : Bar;

  return (
    <div style={{height:"100%", width:"50%", backgroundColor:'#b4b4b43d'}} className="border-10">
      <ChartComponent data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
