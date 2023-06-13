import React from 'react';
import D from './D';

const C = ({name}) => {
  return (
    <div>
        <h2>C component</h2>
        <D name={name} />
    </div>
  )
}

export default C;