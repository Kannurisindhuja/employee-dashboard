import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No employee selected</p>;

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => navigate("/list")}>Back to List</button>
      <h2>Employee Details</h2>
      <img src={state.photo} alt={state.name} width="100" />
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Role:</strong> {state.role}</p>
      <p><strong>Location:</strong> {state.location}</p>
      <p><strong>ID:</strong> {state.employeeId}</p>
      <p><strong>Date:</strong> {state.date}</p>
      <p><strong>Salary:</strong> ${state.salary.toLocaleString()}</p>
    </div>
  );
};

export default Details;