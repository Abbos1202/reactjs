import React, {useReducer} from 'react';
import { reducer } from './reducer/reducer';
import { INCREMENT, DECREMENT } from './reducer/types';

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
       <h1>Counter: {count}</h1>
       <button onClick={() => dispatch({type: INCREMENT, payload: "Firdavs"})} >Incrememnt</button>
       <button onClick={() => dispatch({type: DECREMENT, payload: "Abbos"})} >Decrememnt</button>
    </div>
  )
}

export default App;