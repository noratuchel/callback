import React, { useState } from "react";
import app from "../base.js";
import { Redirect } from "react-router-dom";

const Signup = ({ history }) => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setRedirectToLogin(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      {redirectToLogin ? <Redirect to="/login" /> : ""}

      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
