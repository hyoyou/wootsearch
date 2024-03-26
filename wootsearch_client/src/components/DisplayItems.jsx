import React, { useState, useEffect } from "react";
import axios from "axios";

function DisplayItems() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/display-items/")
      .then((response) => {
        console.log(response.data)
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>This is a list of items</h1>
      {items && items.map((item) => <div>{item['Title']}</div>)}
    </div>
  );
}

export default DisplayItems;
