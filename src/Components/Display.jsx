import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Display() {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    axios
      .get("http://65.2.130.21/api/device_model/list/", {
        headers: { Authorization: "Token " + token },
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.results);
        }
      });
  }, [token]);
  return (
    <div>
      Device Model
      {data.map((d) => (
        <div key={d.device_model_id} className="display__model">
          <h2>Device Model Id: {d.device_model_id}</h2>
          <h2>Model Description: {d.model_description} </h2>
        </div>
      ))}
    </div>
  );
}
