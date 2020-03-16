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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              metus est, ornare eget ullamcorper vel, auctor sed quam. Phasellus
              vel mi ullamcorper, dignissim dui vel, auctor odio. Sed viverra
              velit sed ipsum scelerisque, in faucibus risus dapibus. Praesent
              nec arcu sed tellus pharetra laoreet. Integer ut gravida massa.
              Vestibulum eu odio volutpat, interdum urna eu, tristique justo.
              Nulla venenatis, massa dignissim tristique pretium, nibh lacus
              congue urna, quis ullamcorper velit ipsum et ex.
              <br />
              Etiam eget mollis quam, a vulputate lorem. Vestibulum sagittis sem
              ex, nec convallis tellus feugiat et. Aliquam elementum arcu nisl,
              et egestas arcu finibus vitae. Mauris mattis gravida enim.
              Curabitur imperdiet, ligula quis laoreet auctor, dolor orci
              vulputate tortor, nec bibendum ipsum neque eu velit. Pellentesque
              dui magna, cursus ut ligula vitae, varius aliquam elit.
              Suspendisse ornare risus in nisl suscipit, nec tempor ante
              convallis.
              <br />
              Cras elementum, velit non tempus aliquet, metus tellus hendrerit
              velit, sit amet laoreet turpis ipsum nec velit. Integer sed est
              sit amet enim feugiat elementum quis non ex. Donec consequat vel
              lectus eu suscipit. Integer ut sagittis arcu, non dictum ligula.
              In viverra et leo ut accumsan. Quisque venenatis eu ex at
              tincidunt. Proin lobortis ante non quam consequat sollicitudin.
              Nullam a turpis vel ante hendrerit pulvinar. Nulla a augue eu
              nulla dictum tempus vel in magna.
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
