import React from "react";
import Weather from "./weather/weather.js";
import Navbar from "./navbar.js";
import "./index.js";
function HomeScreen() {
  return (
    <div className="bodye">
      <div>
        <Navbar />
      </div>
      <div>
        <Weather />
      </div>
    </div>
  );
}
export default HomeScreen;
