// IMPORTS --------------
// imports : Node Modules
import React from "react";

import FEATURE1 from "../../../assets/images/home/feature_1.jpeg";
import FEATURE2 from "../../../assets/images/home/feature_2.jpeg";
import FEATURE3 from "../../../assets/images/home/feature_3.jpeg";

const FEATURES = [
  {
    img: FEATURE1,
    title: "PROFESSIONALISM",
    content:
      "Break through online business clutter by having a professional space to work and interact with clients."
  },
  {
    img: FEATURE2,
    title: "COLLABORATION",
    content:
      "Engage in priceless networking opportunities by surrounding yourself with highly skilled, like-minded people."
  },
  {
    img: FEATURE3,
    title: "TOOLS",
    content:
      "Everything you need in one work-ready space to take your media and content instantly to the next level."
  }
];

function Features() {
  return (
    <div className="section">
      <h3 className="col m-0 text-display header-text text-white">Features</h3>
      <div className="row">
        {FEATURES.map((element, index) => (
          <Card feature={element} />
        ))}
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-12 col-lg-4 text-light mt-2 mt-lg-0">
      <div className="d-flex h-100 flex-column">
        <div className="d-flex w-100 justify-content-center p-3">
          <img
            src={props.feature.img}
            className="card-img-top rounded-circle border border-white feat-img"
            alt={props.feature.title}
            style={{ height: "250px", width: "250px" }}
          />
        </div>
        <div className="p-3">
          <h5 class="text-display mb-2 text-center text-uppercase">
            <small className="">{props.feature.title}</small>
          </h5>
          <p class="card-text text-center lh-test app-text-muted">
            {props.feature.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
