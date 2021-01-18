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
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <div
      style={{
        padding: "30px",
        marginTop: "50px",
        color: "#ffff",
        backgroundColor: "#1b1c1d",
        borderRadius: "10px",
        marginRight: "30%",
        marginLeft: "30%",
      }}
    >
      {redirectToSignup ? <Redirect to="/signup" /> : ""}
      <h1 style={{ textAlign: "center" }}>Log in</h1>
      <form
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        onSubmit={handleLogin}
      >
        <div class="ui input" style={{ margin: "5px" }}>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div class="ui input" style={{ margin: "5px" }}>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button
          class="ui primary button"
          style={{ margin: "5px" }}
          type="submit"
        >
          Log in
        </button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          class="ui primary button"
          style={{ margin: "30px" }}
          onClick={() => setRedirectToSignup(true)}
        >
          Registrieren
        </button>
      </div>
    </div>
  );
};

export default Login;
