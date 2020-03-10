// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Stylesheets
import "./carousel.css";
// imports : Images
import image1 from "../../../assets/images/home/carousel_image_1.jpg";
import image2 from "../../../assets/images/home/carousel_image_2.jpg";
import image3 from "../../../assets/images/home/carousel_image_3.jpg";

function carousel(props) {
  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="App_carousel">
          <div className="header">
            <div className="slide-caption">
              <h1>484 CREATIVE COLLAB SPACE</h1>
              <button type="button" className="btn btn-success">
                APPLY NOW!
              </button>
            </div>
          </div>
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ backgroundColor: "green" }}
            >
              <img
                src={image1}
                className="d-block w-100"
                alt="random carousel"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="random carousel"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                alt="random carousel"
              />
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default carousel;
