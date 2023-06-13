import React, {useState} from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();


  const Increment = () => {
    setCount(prevstate => prevstate + 1);
  }

  const Decrement = () => {
    setCount(prevstate => prevstate - 1);
  }

  const Reset = () => {
    setCount(0);
  }

  const onNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      <h1>Name: {name}</h1>
      <input onChange={onNameChange} name='name' type="text" placeholder='name' />
      <hr />
      <button onClick={Increment} >increment</button>
      <button onClick={Decrement} >decrement</button>
      <button onClick={Reset} >reset</button>
      <h1>Counter: {count}</h1>
    </div>
  )
}

export default App

