import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";  // Import other charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LineElement } from "chart.js";

// Registering chart elements
ChartJS.register(ArcElement, Tooltip, BarElement, LineElement);

const Chart = ({ type = "pie", data, options }) => {
  const renderChart = () => {
    switch (type) {
      case "pie":
        return <Pie data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "line":
        return <Line data={data} options={options} />;
      default:
        return <Pie data={data} options={options} />;
    }
  };

  return renderChart();
};

export default Chart;
