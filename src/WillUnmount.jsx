import React, { useState } from 'react';
// import HookMouseOver from './HookMouseOver'
import ClassMouseOver from './ClassMouseOver';

const WillUnmount = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Remove component</button>
        {
            display && <ClassMouseOver />
        }
    </div>
  )
}

export default WillUnmount