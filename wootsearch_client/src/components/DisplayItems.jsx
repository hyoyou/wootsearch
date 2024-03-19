import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayItems() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/display-items/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>This is a list of items</h1>
      <p>{message}</p>
    </div>
  );
}

export default DisplayItems;
