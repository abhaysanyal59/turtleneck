import React, { useEffect, useState } from "react";
import MainLayout from "../Layout/mainLayout";
import ChartComponent from "../Components/graph/graphComponent";
import { fetchData } from "../Utils/apiFunction";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [chartDataLine, setChartDataLine] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData("chart/event-count", {});
        const resultLine = await fetchData("chart/events-by-hour", {});
        setChartData(result?.data);
        console.log(resultLine?.data);
        setChartDataLine(resultLine?.data);
      } catch (err) {
        alert("Failed to fetch chart data:", err);
      }
    };

    getData();
  }, []);

  const labels = chartData.map((item) => item.event_type);
  const counts = chartData.map((item) => item.count);

  const barData = {
    labels,
    datasets: [
      {
        label: "Event Count",
        data: counts,
        fontSize: 14,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Event per Type", 
        font: {
          size: 14,
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
  };

  const labelsLine = chartDataLine.map((item) => `${item.hour}:00`);
  console.log("data labels", labelsLine);
  const dataPointsLine = chartDataLine.map((item) => item.count);
  console.log("data", dataPointsLine);

  const lineData = {
    labels: labelsLine,
    datasets: [
      {
        label: "Events",
        data: dataPointsLine,
        title: "Events per type",
        fill: false,
        borderColor: "white",
        backgroundColor: "white",
        tension: 0.3,
        pointRadius: 10,
        pointBackgroundColor: "white",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: " Events over Time",
        font: {
          size: 14,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: "No. of Events",
        },
      },
      x: {
        title: {
          display: true,
          text: "Hour",
        },
      },
    },
  };

  return (
    <MainLayout>
      <div className="flex-container gap-10 margin-h-10">
        <ChartComponent data={barData} options={barOptions}></ChartComponent>
        <ChartComponent
          data={lineData}
          options={lineOptions}
          type="line"
        ></ChartComponent>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
