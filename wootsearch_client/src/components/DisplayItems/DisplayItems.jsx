import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DisplayItems.css";

export const DisplayItems = () => {
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
      <h1>Featured Items</h1>
      <ul className='container'>
        {items && items.map((item) => <li className='item'>{item['Title']}</li>)}
      </ul>
    </div>
  );
}
