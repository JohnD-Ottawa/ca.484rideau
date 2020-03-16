// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Components
import Carousel from "./carousel/carousel.js";
import Memberships from "./memberships/memberships.js";
import Testimonials from "./testimonials/testimonials.js";

class Home extends React.Component {
  render() {
    return (
      <div className="home-main">
        <Carousel />
        <Memberships />
        <Testimonials />
      </div>
    );
  }
}

export default Home;
