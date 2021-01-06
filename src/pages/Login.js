import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../Auth.js";
import app from "../base.js";

const Login = () => {
  const [redirectToSignup, setRedirectToSignup] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      console.log("redirect");
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      {redirectToSignup ? <Redirect to="/signup" /> : ""}
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>

        <button
          style={{ marginLeft: "50px" }}
          onClick={() => setRedirectToSignup(true)}
        >
          Registrieren
        </button>
      </form>
    </div>
  );
};

export default Login;
