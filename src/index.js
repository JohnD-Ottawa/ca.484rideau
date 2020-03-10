// Name         : ca.484Rideau
// Authors      : John Desjardins - desjjoh@gmail.com
//              : Christian Jurt  - jurt.dev@gmail.com
// Date         : Feb 26th 2017
// Version      : 0.0.1
// Description  : Main Landing Page for company 484Rideau.com

// IMPORTS --------------
// imports : Node Modules
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all.js";
// Imports : Stylesheets
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/stylesheets/colors.css";
import "./assets/stylesheets/fonts.css";
import "./assets/stylesheets/index.css";
// Imports : Components
import App from "./container/App.js";

ReactDOM.render(<App />, document.getElementById("root"));
