import React, { useContext } from 'react';
import { UserContext } from './context';

const Child4 = () => {

    const [user, setUser] = useContext(UserContext)
  return (
    <div>
        <h2>Child4</h2>
        {user}
    </div>
  )
}

export default Child4
