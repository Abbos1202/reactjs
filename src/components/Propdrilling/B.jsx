import React from 'react';
import C from './C';

const B = ({name}) => {
  return (
    <div>
        <h2>B component</h2>
        <C name={name} />
    </div>
  )
}

export default B;