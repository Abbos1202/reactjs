import React, {useState} from 'react';
import A from './A';

const PropDrilling = () => {
    const [name, setName] = useState('Abbosbek')
  return (
    <div>
        <h1>Parent Component</h1>
        <A name={name} />
    </div>
  )
}

export default PropDrilling