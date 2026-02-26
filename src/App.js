import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import SalaryChart from "./pages/SalaryChart";
import PhotoResult from "./pages/PhotoResult";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/details" element={<Details />} />
        <Route path="/chart" element={<SalaryChart />} />
        <Route path="/photo-result" element={<PhotoResult />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;