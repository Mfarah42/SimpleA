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
import ChartDataLabels from "chartjs-plugin-datalabels";
import { dropRight } from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
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
    layout: {
      padding: {
        right: 20,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "right",
      },
      datalabels: {
        anchor: "end",
        align: "right",
        labels: {
          title: {
            font: {
              weight: "bold",
            },
          },
        },
      },

      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          crossAlign: "far",
        },
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
        barPercentage: 0.5,
        categoryPercentage: 0.6,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      {animeStats.data && (
        <div className="test">
          <Bar options={options} data={data} />
        </div>
      )}
    </>
  );
};

export default Chart;
