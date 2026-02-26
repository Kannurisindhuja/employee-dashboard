import React from "react";
import { Bar } from "react-chartjs-2";
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalaryChart = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const employees = state || [];

  const chartData = {
    labels: employees.map((e) => e.name),
    datasets: [
      {
        label: "Salary",
        data: employees.map((e) => e.salary),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "Employee Salary Chart" } },
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/list")}>Back to List</button>
      <h2>Salary Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SalaryChart;