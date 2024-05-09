import React, { useState } from "react";
import database from "../firebaseconfiguration";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./index.css";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };
  return (
    <div className="main">
      <div className="center">
        {/* Registration and login Screen */}
        <div className="row">
          <div
            className={login == false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>
          <div
            className={login == true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            SignIn
          </div>
        </div>
        <h1 className="h">{login ? "SignIn" : "SignUp"}</h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input className="email" name="email" placeholder="Email" />
          <br />
          <input
            className="password"
            name="password"
            type="text"
            placeholder="Password"
          />
          <br />
          <p className="forpass" onClick={handleReset}>
            Forgot Password?
          </p>
          <br />
          <button className="sign">{login ? "SignIn" : "SignUp"}</button>
        </form>
      </div>
    </div>
  );
}
export default RegisterAndLogin;
