// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Components
import Carousel from "./components/carousel.js";
import Memberships from "./components/memberships.js";
import InfoCards from "./components/info_cards.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Memberships />
        <InfoCards />
      </div>
    );
  }
}

export default Home;
