import React, {useState} from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';


const LoginContol = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleSignIn = () => {
        setIsLoggedIn(false)
    }

    const handleSignUp = () => {
        setIsLoggedIn(true)
    }


  return (
    <div>
        {
            isLoggedIn
            ?
            <SignIn click={handleSignIn} />
            :
            <SignUp click={handleSignUp} />
        }
    </div>
  )
}

export default LoginContol;