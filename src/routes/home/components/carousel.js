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
          {/* Header */}
          <div className="header bg-nav">
            <div className="slide-caption d-flex flex-column w-100 p-0">
              <h1 className="w-100 text-center font-weight-bolder">
                484 RIDEAU STREET
              </h1>
              <h2 className="w-100 text-center">
                <small>Teamwork makes the dream work...</small>
              </h2>
              <div className="w-100 d-flex mt-3 justify-content-center">
                <button
                  class="btn btn-outline-Gold font-weight-bolder car-btn my-2 my-sm-0 w-50"
                  data-toggle="modal"
                  data-target="#ApplyModal"
                >
                  Apply Now!
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
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
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100"
                alt="random carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100"
                alt="random carousel"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100"
                alt="random carousel"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default carousel;
