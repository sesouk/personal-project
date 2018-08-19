import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
import "../Styling/home.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      time: []
    };
    this.getTime = this.getTime.bind(this);
  }
  componentDidMount() {
    this.getTime();
    // setInterval(this.getTime, 1000);
  }
  getTime() {
    axios
      .get(
        "http://api.timezonedb.com/v2/get-time-zone?key=D8LR0CQXNGX0&format=json&by=zone&zone=America/Denver"
      )
      .then(r => {
        this.setState({
          time: [r.data]
        });
      });
  }

  render() {
    let time = this.state.time.map((e, i) => {
      return (
        <div key={i}>
          <p className="time">
            {e.formatted} {e.nextAbbreviation}
          </p>
        </div>
      );
    });
    return (
      <div>
        <div className="logo-mobile">
          <Link to="/admin">
            <img
              className="bogo"
              src="http://res.cloudinary.com/kvge/image/upload/c_scale,h_685/v1525298041/logo-3-KVGE.png"
              alt="box-logo"
            />
          </Link>
        </div>
        <div className="time-mobile">{time}</div>
        <nav className="mobile-view">
          <ul>
            <li>
              <Link to="/lookbook">
                <button className="mobile">Spring/Summer 2018 Lookbook</button>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <button className="mobile">Shop</button>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <button className="mobile">About</button>
              </Link>
            </li>
            <li>
              <button className="mobile">Contact</button>
            </li>
          </ul>
        </nav>
        <div className="social-mobile">
          <a href="https://www.facebook.com/kvgebrand" id="fb">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/facebook-logo.png"
              alt="facebook link"
            />
          </a>
          <a href="https://www.instagram.com/kvgebrand" id="ig">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/512px-Instagram_simple_icon.png"
              alt="instagram link"
            />
          </a>
          <a href="https://www.twitter.com/kvgebrand" id="twitter">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/twitter.png"
              alt="twitter link"
            />
          </a>
        </div>
        <div className="login-logout">
          <Footer />
        </div>
        <div>
          <header className="head-desk">
              <img
                className="bogo-desk"
                src="http://res.cloudinary.com/kvge/image/upload/v1525658069/logo-3-KVGE-whiteshadow.png"
                alt="bogo"
              />
          </header>
          <div className="time-desk">{time}</div>
          <nav className="desktop">
            <ul>
              <li>
                <Link to="/lookbook">
                  <button className="btn">Spring/Summer 2018 Lookbook</button>
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <button className="btn">Shop</button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <button className="btn">About</button>
                </Link>
              </li>
              <li>
                <button className="btn">Contact</button>
              </li>
              <li>
                <a href="https://www.facebook.com/kvgebrand">
                  <button className="btn">Facebook</button>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kvgebrand">
                  <button className="btn">Instagram</button>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/kvgebrand">
                  <button className="btn">Twitter</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div />
      </div>
    );
  }
}
