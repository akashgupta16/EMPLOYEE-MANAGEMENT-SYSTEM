import React, { useEffect, useState } from "react";
import axios from "axios";

const PythonDataComponent = () => {
  const [data, setData] = useState({ name: "", role: "" });

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Python API:", error);
      });
  }, []);

  return (
    <div>
      <h2>Data from Python Flask API:</h2>
      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Role:</strong> {data.role}
      </p>
    </div>
  );
};

export default PythonDataComponent;
