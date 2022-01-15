import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    // some fancy firebase login shit
  };

  const Register = event =>{
    event.preventDefault();

  }
  return (
    <div className={classes.login}>
      <Link to={"/"}>
        <img
          className={classes.login__logo}
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
        />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type={"text"}
            value={email}
            onChange={(e) => {
              setemail(e);
            }}
          />

          <h5>Password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(e) => {
              setpassword(e);
            }}
          />

          <button
            onClick={signIn}
            className={classes.login__signInbutton}
            type="submit"
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={Register} className={classes.login__registerbutton}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
