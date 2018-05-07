import React from "react";
import "../Styling/about.css";
import { Link } from "react-router-dom";

const About = () => {
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
      <div className="info-container">
        <div className="info">
          <p>
            Killer Vibes, Good Energy or better known as KVGE is a urban and
            streetwear brand founded in Denver, CO. The meaning is simple, give
            off killer vibes and good energy and you will attract the good
            things in life.
          </p>
          <p>
            The upside down delta symbol that is prevalent in many of the
            designs symbolize change is apart of life but it is up to you how to
            handle the change. Make the most out of any situation and continue
            on because life is ever changing.
          </p>
          <div className="logo-holder">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1524155254/logo-6-KVGE.png"
              alt="change-logo"
            />
          </div>
          <div className="logo-holder-top">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525730412/logo-6-KVGE-whitesmoke.png"
              alt="change-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
