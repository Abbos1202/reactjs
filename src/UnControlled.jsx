import React, { useRef } from "react";

const UnControlled = () => {
  const name = useRef("");

  console.log("Uncontrolled is rendering");

  return (
    <div>
      <h1>UnControlled Component</h1>
      <input ref={name} type="text" placeholder="uncontrolled name" />
      <button
        onClick={() => {
          alert(name.current.value);
        }}
      >
        Clicked
      </button>
    </div>
  );
};

export default UnControlled;
