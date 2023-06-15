import React, {useContext} from 'react';
import { InfoContext } from './context';

const Counter = () => {
    const {count} = useContext(InfoContext)
  return (
    <div>
        {count}
        <hr />
    </div>
  )
}

export default Counter;