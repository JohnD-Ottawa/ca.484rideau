// IMPORTS --------------
// imports : Node Modules
import React from "react";
// imports : Stylesheets
import "./carousel.css";
// imports : Images
import image1 from "../../../assets/images/home/carousel_image_1.jpg";
import image2 from "../../../assets/images/home/carousel_image_2.jpg";
import image3 from "../../../assets/images/home/carousel_image_3.jpg";

const CAROUSEL_IMAGES = [image1, image2, image3];

function carousel(props) {
  return (
    <React.Fragment>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="App_carousel">
          <Header />
          <Indicators />
          <CarouselInner />
        </div>
      </div>
    </React.Fragment>
  );
}

function Header() {
  return (
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
            class="btn btn-outline-light car-btn my-2 my-sm-0"
            data-toggle="modal"
            data-target="#ApplyModal"
          >
            Join Today
          </button>
        </div>
      </div>
    </div>
  );
}

function Indicators() {
  let items = CAROUSEL_IMAGES.map((element, index) => (
    <li
      data-target="#carouselExampleCaptions"
      className={index === 0 ? "active" : ""}
      data-slide-to={`${index}`}
    />
  ));
  return <ol className="carousel-indicators">{items}</ol>;
}

function CarouselInner() {
  let items = CAROUSEL_IMAGES.map((element, index) => (
    <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img src={element} className="d-block w-100" alt="carousel" />
    </div>
  ));
  return <div className="carousel-inner">{items}</div>;
}

export default carousel;
