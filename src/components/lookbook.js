import React, { Component } from "react";
import Slider from "react-slick";
import "../Styling/slider.css";
import { Link } from "react-router-dom";

class Lookbook extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <div className="navi-mobile">
          <span>
            <Link to="/">
              <img
                className="home"
                src="http://res.cloudinary.com/kvge/image/upload/v1525301020/web-page-home.png"
                alt="home-button"
              />
            </Link>
          </span>
        </div>
        <div className="navi-top">
          <span>
            <Link to="/">
              <img
                className="home"
                src="http://res.cloudinary.com/kvge/image/upload/v1525671763/web-page-home-whiteshadow.png"
                alt="home-button"
              />
            </Link>
          </span>
        </div>
        <Slider {...settings}>
          <div>
            <div>
              <img
                src="http://res.cloudinary.com/kvge/image/upload/v1525285984/F_F-Tiff-On-Black-Back.png"
                alt="tiff"
              />
            </div>
          </div>
          <div>
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525285983/F_F-Mint-On-White-Back.png"
              alt="mint"
            />
          </div>
          <div>
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525285957/Large-Logo-Back-Black.png"
              alt="black"
            />
          </div>
          <div>
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525285958/Large-Logo-Back.png"
              alt="white"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Lookbook;
