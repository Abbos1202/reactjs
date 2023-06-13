import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleSignIn = () => {
    setIsLoggedIn(false);
  };

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>LoggedForm Component</h1>
      {isLoggedIn ? (
        <SignIn click={handleSignIn} />
      ) : (
        <SignUp click={handleSignUp} />
      )}
    </div>
  );
};

export default LoginControl;
