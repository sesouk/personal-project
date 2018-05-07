import React, { Component } from "react";
import { addToCart } from "../ducks/reducer";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../Styling/shop.css";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    this.getShop();
  }
  getShop() {
    axios.get("/api/shop").then(r => {
      this.setState({
        products: r.data
      });
    });
  }
  render() {
    let products = this.state.products.map((p, i) => {
      return (
        <div className="product-container" key={i}>
          <p className="product">{p.name}</p>
          <div className="shirt">
            <img src={p.image1} alt="shirt-front" />
            <img src={p.image2} alt="shirt-back" />
          </div>
          <p className="info">{p.description}</p>
          <p className="price">${p.price}</p>
          <div className="button-holder">
            <button className="atc" onClick={e => this.props.addToCart(e, p)}>
              Add To Cart
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="shop-nav">
          <span>
            <Link to="/">
              <img
                className="home"
                src="http://res.cloudinary.com/kvge/image/upload/v1525301020/web-page-home.png"
                alt="home-button"
              />
            </Link>
          </span>
          <span>
            <Link to="/cart">
              <img
                className="cart"
                src="http://res.cloudinary.com/kvge/image/upload/v1525301193/shopping-cart_1.png"
                alt="cart-button"
              />
            </Link>
          </span>
        </div>
        <div className="mobile-products">{products}</div>
        <Footer />
        <div className="shoptop-nav">
          <span>
            <Link to="/">
              <img
                className="home"
                src="http://res.cloudinary.com/kvge/image/upload/v1525671763/web-page-home-whiteshadow.png"
                alt="home-button"
              />
            </Link>
          </span>
          <span>
            <img
              className="bogo-desk-shop"
              src="http://res.cloudinary.com/kvge/image/upload/v1525658069/logo-3-KVGE-whiteshadow.png"
              alt="bogo"
            />
          </span>
          <span>
            <Link to="/cart">
              <img
                className="cart"
                src="http://res.cloudinary.com/kvge/image/upload/v1525672175/shopping-cart-whiteshadow.png"
                alt="cart-button"
              />
            </Link>
          </span>
        </div>
        <div className="shoptop-container">
          <div className="shoptop">{products}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, { addToCart })(Shop);
