import React from "react";
import "./navbar.css"; // Import CSS file for styling
import database from "../firebaseconfiguration/index.js";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

function Navbar() {
  const history = useNavigate();

  const handleClick = () => {
    signOut(database).then((val) => {
      console.log(val, "val");
      history("/");
    });
  };
  return (
    <nav className="navbar">
      <div className="left">Weather App</div>
      <div>
        <button className="right" onClick={handleClick}>
          SignOut
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
