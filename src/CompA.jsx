import React from "react";

const CompA = ({name, onUpdate}) => {

  return (
    <div>
      <h1>Component A</h1>
      <h4>Name is : {name}</h4>
      <button onClick={onUpdate}>Change name</button>
    </div>
  );
};

export default CompA;
