// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Components
import Carousel from "./components/carousel.js";
import InfoCards from "./components/info_cards.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <InfoCards />
      </div>
    );
  }
}

export default Home;
