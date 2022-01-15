import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../ConfidentialImports/Firebase";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom"

function Login() {

  let navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(AuthenticatorResponse => {
      // successfully logged in user
      if (AuthenticatorResponse) {
        navigate("/")
      }
    })
    .catch(error =>{
      alert(error.message)
    })
    
  };

  const Register = event =>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then(AuthenticatorResponse =>{
      // successfully created user
      if (AuthenticatorResponse) {
        navigate("/")
      }
    })
    .catch(error =>{
      alert(error.message)
    })

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
              setemail(e.target.value);
            }}
          />

          <h5>Password</h5>
          <input
            type={"password"}
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
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
