import React, { useState, useEffect } from "react";

const HookMouseOver = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mousePosition = (e) => {
    console.log("mouseEvent");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mouseover", mousePosition);
    return ()=> {
      console.log("component fully removed")
      window.removeEventListener("mouseover", mousePosition)
    }
  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouseOver;
