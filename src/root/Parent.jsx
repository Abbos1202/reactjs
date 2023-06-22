import React, { useCallback, useMemo } from "react";
import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log("Parent is rendering");

  const student = useMemo(() => {
    return {name: "Firdavs"}
  }, [])

  const studentCall = useCallback((input) => {
    return {name: input}
  }, [])

  return (
    <div>
      <h1>Parent component</h1>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <hr />
      <Child student={student} studentCall={studentCall} />
    </div>
  );
};

export default Parent;
