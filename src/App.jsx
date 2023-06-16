import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(Number(localStorage.getItem('count')));

  const Increment = () => {
    // localStorage.setItem('count', count + 1)
    localStorage.setItem('count', JSON.stringify({count: count + 1}))
    setCount(count + 1)
  }

  const Decrement = () => {
    localStorage.setItem('count', count - 1)
    setCount(count - 1)
  }

   console.log(JSON.parse(localStorage.getItem('count')));

  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>decrement</button>
      <button onClick={() => localStorage.removeItem('count')}>remove</button>
      <button onClick={() => localStorage.clear()}>clear</button>
    </div>
  );
};

export default App;
