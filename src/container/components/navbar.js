// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BRAND_IMG from "../../assets/images/NavBar/Placeholder-Brand.jpg";

function navbar(props) {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light bg-nav ">
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
      className="navbar-toggler btn btn-outline-Gold"
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
    <div class="collapse navbar-collapse" id="navbarToggler">
      {/* Main Navigation Links */}
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ml-0 ml-lg-2">
        <li class="nav-item">
          {/* <Link to="/home" className="nav-link">
            Home
          </Link> */}
          <NavLink to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to="/blog"
            className="nav-link disabled"
            activeClassName="active"
          >
            Blog (Coming Soon)
          </NavLink>
        </li>
      </ul>

      <button
        class="btn btn-outline-Gold my-2 my-sm-0"
        data-toggle="modal"
        data-target="#ApplyModal"
      >
        Apply Now!
      </button>
    </div>
  );
}

export default navbar;
