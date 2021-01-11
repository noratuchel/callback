import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth.js";
import app from "../base.js";

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
      {redirectToLogin ? <Redirect to="/login" /> : ""}

      <h1 style={{ textAlign: "center" }}>Sign up</h1>
      <form
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        onSubmit={handleSignUp}
      >
        <div class="ui input" style={{ margin: "5px" }}>
          <input name="email" type="email" placeholder="Email" />
        </div>
        <div class="ui input" style={{ margin: "5px" }}>
          <input name="password" type="password" placeholder="Password" />
        </div>
        <button
          class="ui primary button"
          type="submit"
          style={{ margin: "5px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
