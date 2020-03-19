// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Components
import Carousel from "./carousel/carousel.js";
import Features from "./features/features.js";
import Memberships from "./memberships/memberships.js";
import Testimonials from "./testimonials/testimonials.js";
import Footer from "./footer/footer.js";

class Home extends React.Component {
  render() {
    return (
      <div className="home-main">
        <Carousel />
        <Features />
        <Memberships />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default Home;
