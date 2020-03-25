// IMPORTS --------------
// imports : Node Modules
import React from "react";
// import "./memberships.css";

import Table from "./table.js";
import "./memberships.css";

function memberships() {
  return (
    <React.Fragment>
      <section className="section row">
        <div className="text-light col-12 col-lg-6 mb-3 mb-lg-0 d-flex align-items-start flex-column">
          <h3 className="mt-0 mb-2 text-display header-text">
            What can 484 Rideau do for you?
          </h3>
          <div className="text-justify body-text app-text-muted">
            <small>
              484 Rideau provides an exclusive and cutting edge creative office
              environment that allows local upcoming entrepreneurs to thrive in
              the digital world. This environment not only includes a vast array
              physical resources like web/video/audio production equipment,
              space for a variety of physical activities, and printing services
              but also provides access to a priceless network of like-minded
              people and workshops/how-to’s that will help any entrepreneur
              reach the next level of success.
              <br />
            </small>
          </div>
          <footer className="blockquote-footer">
            <small className="font-italic text-light">
              Regards, The Team @ 484 Rideau
            </small>
          </footer>
          <div className="mt-auto w-100 text-center py-2 py-lg-1">
            <button
              className="btn btn-outline-light btn-test text-display"
              data-toggle="modal"
              data-target="#ApplyModal"
            >
              Join Today
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 p-0">
          <Table />
        </div>
      </section>
    </React.Fragment>
  );
}

export default memberships;
