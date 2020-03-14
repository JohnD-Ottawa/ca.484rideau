// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BRAND_IMG from "../../../assets/images/NavBar/Placeholder-Brand.png";

function navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-nav bg-nav ">
        <TOGGLE_BUTTON />
        <BRAND />
        <COLLAPSE />
      </nav>
    </React.Fragment>
  );
}

function TOGGLE_BUTTON(props) {
  return (
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span>
        <FontAwesomeIcon
          icon={["fas", "bars"]}
          className="align-self-center"
          size="lg"
        />
      </span>
    </button>
  );
}

function BRAND(props) {
  return (
    <Link to="/" className="NavBrand">
      <input
        type="image"
        id="nav_brand"
        alt="navBrand"
        className="p-0 m-0"
        src={BRAND_IMG}
      />
    </Link>
  );
}

function COLLAPSE(props) {
  return (
    <div className="collapse navbar-collapse" id="navbarToggler">
      {/* Main Navigation Links */}
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-0 ml-lg-4 text-sans">
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link" activeClassName="active">
            Blog (Coming Soon)
          </NavLink>
        </li>
      </ul>

      <button
        className="btn btn-outline-light my-2 my-lg-0 text-display"
        data-toggle="modal"
        data-target="#ApplyModal"
      >
        Join Today
      </button>
    </div>
  );
}

export default navbar;
