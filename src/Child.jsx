import React, {useContext} from 'react';
import { InfoContext } from './context';
import { ADDNUM, ADDONE, ADDTEN, GETVALUE } from './reducer/types';

const Child = () => {
    const [state, dispatch] = useContext(InfoContext)


  return (
    <div>
        <button onClick={() => dispatch({type: ADDONE})} >addOne</button>
        <button onClick={() => dispatch({type: ADDTEN})} >addTen</button>
        <br />
        <input onChange={(e) => dispatch({type: GETVALUE, payload: e.target.value})} type="text" placeholder='addNum' />
        <button onClick={() => dispatch({type: ADDNUM})}>addNum</button>
    </div>
  )
}

export default Child;