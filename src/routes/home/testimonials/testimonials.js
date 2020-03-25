// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import USER1 from "../../../assets/images/home/Users/user_1.jpg";
import USER2 from "../../../assets/images/home/Users/user_3.jpg";
import USER3 from "../../../assets/images/home/Users/user_2.jpg";

const USERS = [
  {
    fn: "Marley",
    ln: "Giunta",
    job:
      "Visionary, Community Leader, Nutrition & Wellness Expert, Entrepreneur & Artist",
    photo: USER1,
    text:
      "Merley is having a baby and wasn't able to give us a quote. When she gives us one it'll be here! CONGRATULATIONS MARLEY :)"
  },
  {
    fn: "DANIEL",
    ln: "MIRANDA",
    job:
      "Logistics Specialist, Visionary, Artist, Motivator, Provider & Investor",
    photo: USER3,
    text:
      "Just start! Whenever you aim for a worthy goal, the element of risk is at play. Remember that the biggest risk of all is being alive. Everything in between life and death is ours to create. It's just art."
  },
  {
    fn: "TAYLOR",
    ln: "MILES",
    job: "Business Advisor, Philanthropist, Artist, Innovator & Entrepreneur",
    photo: USER2,
    text: "Even a correct decision is wrong if it was taken too late."
  }
];

function Testimonials() {
  return (
    <div className="section">
      <h3 className="col m-0 text-display header-text text-white">Community</h3>
      <div className="row">
        {USERS.map((element, index) => (
          <Card user={element} />
        ))}
      </div>
    </div>
  );
}
export default Testimonials;

function Card(props) {
  return (
    <div className="col-12 col-lg-4 text-light mt-2 mt-lg-0">
      <div className="d-flex h-100 flex-column">
        <div className="media card-padding">
          <span className="mr-3 align-self-start">
            <FontAwesomeIcon icon={["fas", "quote-left"]} size="lg" />
          </span>
          <div class="media-body text-justify lh-test">
            <p className="m-0">{props.user.text}</p>
          </div>
        </div>
        <div class="card-padding mt-auto pt-0 pt-lg-2">
          <div class="media">
            <img
              src={props.user.photo}
              class="align-self-end mr-4 user-profile border border-white"
              alt={props.name}
            />
            <div class="media-body align-self-center">
              <h5 class="text-display m-0 text-uppercase w-100">
                <small className="">
                  {props.user.fn}
                  <br />
                  {props.user.ln}
                </small>
              </h5>
              <footer className="blockquote-footer app-text-muted mt-1 lh-test">
                <small className="font-italic lh-hun">{props.user.job}</small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
