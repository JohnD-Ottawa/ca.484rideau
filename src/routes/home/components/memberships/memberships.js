// IMPORTS --------------
// imports : Node Modules
import React from "react";
// import "./memberships.css";

import Table from "./table.js";
import "./memberships.css";

function memberships() {
  return (
    <React.Fragment>
      <section className="section text-light mt-3 mt-md-5 mb-3 mb-md-5">
        <div className="">
          <h3 className="mt-0 mb-1 text-display header-text">What we offer</h3>
          <hr className="gradient_line m-0 mb-3 rounded-pill" />
          <div className="text-justify body-text">
            <small>
              When you work as many hours as you sleep, it’s important to love
              where you work. After working remotely in noisy coffee shops and
              being socially isolated at home, we realized the need for a better
              alternative. Our goal at Coworkly is to create a happy work
              environment where social isolation and distractions are eliminated
              and friendships and productivity thrive.
            </small>
          </div>
        </div>

        <div id="read-more" className="mt-3">
          <a
            className=""
            data-toggle="collapse"
            href="#multiCollapse"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapse"
          >
            Learn More
          </a>
        </div>
        <div className="collapse multi-collapse mt-4" id="multiCollapse">
          <Table />
        </div>
      </section>
    </React.Fragment>
  );
}

export default memberships;
