import React, {useContext} from 'react';
import { InfoContext } from './context';

const Child = () => {
    const {addOne, addTen, changeName, addNum} = useContext(InfoContext)


  return (
    <div>
        <button onClick={addOne} >addOne</button>
        <button onClick={addTen} >addTen</button>
        <br />
        <input onChange={(e) => changeName(e)} type="text" placeholder='addNum' />
        <button onClick={addNum}>addNum</button>
    </div>
  )
}

export default Child;