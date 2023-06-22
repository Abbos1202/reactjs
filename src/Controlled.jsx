import React from "react";
import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  console.log('controlled is rendering');
  return (
    <div>
      <h1>Controlled Component</h1>
      <h3>Name: {name}</h3>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="controlled name"
      />
      <hr />
    </div>
  );
};

export default Controlled;
