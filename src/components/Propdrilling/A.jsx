import React from 'react';
import B from './B';

const A = ({name}) => {
  return (
    <div>
        <h2>A component</h2>
        <B name={name} />
    </div>
  )
}

export default A