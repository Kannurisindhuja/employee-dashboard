import React from "react";
import { useLocation } from "react-router-dom";
import '../App.css';

function PhotoResult() {
  const location = useLocation();
  const { image } = location.state || {}; // safely extract image

  if (!image) {
    return <div>No photo available.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Captured Photo</h2>
      <img src={image} alt="Captured" width="300" />
    </div>
  );
}

export default PhotoResult;