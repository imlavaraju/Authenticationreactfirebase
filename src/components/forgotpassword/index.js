import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import database from "../firebaseconfiguration";
import { useNavigate } from "react-router-dom";
import "./index.css";
function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emalVal = e.target.email.value;
    sendPasswordResetEmail(database, emalVal)
      .then((data) => {
        alert("Reset Link will send to your gmail");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <div className="bodyfor">
      <div className="Appf">
        <h1>Forgot Password</h1>
        <div className="form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className="input"
              name="email"
              placeholder="Enter Your email"
            />
            <br />
            <br />
            <button type="submit" className="button">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
