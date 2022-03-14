import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ animeStats }) => {
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
    scales: {
      x: {
        display: false,
      },
    },
  };
  const labels = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
  const data = {
    labels,
    datasets: [
      {
        data: animeStats.data.scores
          .slice(0)
          .reverse()
          .map((a) => a.votes),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      {animeStats.data && (
        <div>
          <Bar options={options} data={data} />
        </div>
      )}
    </>
  );
};

export default Chart;
