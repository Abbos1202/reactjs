import React, { useContext } from 'react';
import { UserContext } from './context';

const Child3 = () => {

    const [user, setUser] = useContext(UserContext)
  return (
    <div>
        <h2>Child3</h2>
        {user}
    </div>
  )
}

export default Child3
