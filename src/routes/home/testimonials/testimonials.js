// IMPORTS --------------
// imports : Node Modules
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import USER1 from "../../../assets/images/home/Users/user_1.jpg";
import USER2 from "../../../assets/images/home/Users/user_3.jpg";
import USER3 from "../../../assets/images/home/Users/user_2.jpg";

const USERS = [
  {
    name: "Taylor Swift",
    job: "Singer / Songwriter / Crazy Person",
    photo: USER1,
    text:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla.\nDonec lacinia congue felis in faucibus. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fuscecondimentum nunc ac nisi vulputate fringilla. Donec laciniacongue felis in faucibus."
  },
  {
    name: "George Carlin Longname",
    job: "Comedian / Actor / Director / Cool Guy",
    photo: USER2,
    text:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla."
  },
  {
    name: "Kristen Bell",
    job: "Actress",
    photo: USER3,
    text:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc acnisi vulputate fringilla.\nDonec lacinia congue felis in faucibus. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Suspendisse sit amet purus enim. Phasellus viverra ultricies nisi vel feugiat. Donec vel rutrum metus."
  }
];

function Testimonials() {
  return (
    <div className="section">
      <h3 className="col m-0 text-display header-text text-white">Our Team</h3>
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
            <p>{props.user.text}</p>
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
              <h5 class="text-display m-0">
                <small className="">{props.user.name}</small>
              </h5>
              <footer className="blockquote-footer app-text-muted mt-1">
                <small className="font-italic lh-hun">{props.user.job}</small>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
