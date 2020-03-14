// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Components
import Carousel from "./components/carousel/carousel.js";
import Memberships from "./components/memberships/memberships.js";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <Memberships />
      </div>
    );
  }
}

export default Home;
