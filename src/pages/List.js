import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const List = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://backend.jotish.in/backend_dev/gettabledata.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "test", password: "123456" }),
    })
      .then((res) => res.json())
      .then((data) => {
        const tableData = data.TABLE_DATA?.data || [];
        const mappedData = tableData.map((item, index) => ({
          id: index + 1,
          name: item[0],
          role: item[1],
          location: item[2],
          employeeId: item[3],
          date: item[4],
          salary: Number(item[5]?.replace(/[$,]/g, "")) || 0,
          photo: "https://via.placeholder.com/50",
        }));
        setEmployees(mappedData);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <button onClick={() => navigate("/chart", { state: employees })}>
        View Salary Chart
      </button>
      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Role</th>
            <th>Location</th>
            <th>ID</th>
            <th>Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} onClick={() => navigate("/details", { state: emp })} style={{ cursor: "pointer" }}>
              <td><img src={emp.photo} alt={emp.name} width="50" /></td>
              <td>{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.location}</td>
              <td>{emp.employeeId}</td>
              <td>{emp.date}</td>
              <td>${emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;