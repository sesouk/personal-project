import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./footer";
import UpdateProduct from "./updateproduct";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      admin: false,
      adminId: ""
    };
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }
  componentDidMount() {
    this.getShop();
    this.adminCheck();
  }
  getShop() {
    axios.get("/api/shop").then(r => {
      this.setState({
        products: r.data
      });
    });
  }

  adminCheck() {
    axios.get("/api/admin").then(r => {
      // console.log(r.data[0].auth0_id);
      axios
        .get("/api/user-data")
        .then(r2 => {
          this.setState({ adminId: r.data[0].auth0_id });
          console.log("---------", r2.data.user.auth0_id);
          console.log("---------", this.state.adminId);
          if (r2.data.user) {
            if (r2.data.user.auth0_id === this.state.adminId) {
              this.setState({
                admin: true
              });
            }
          }
        })
        .catch(err => console.log(err));
    });
  }

  deleteProduct(product_id) {
    axios.delete(`/api/shop/${product_id}`).then(r => {
      this.getShop();
    });
  }
  changeProduct(id) {
    let newProducts = this.state.products.slice();
    let index = newProducts.findIndex(e => e.product_id == id);
    newProducts[index].update = true;
    this.setState({
      products: newProducts
    });
  }
  updateProduct(product) {
    let newProducts = this.state.products;
    let index = newProducts.findIndex(e => e.product_id == product.product_id);
    newProducts[index] = product;
    newProducts[index].update = false;
    this.setState({
      products: newProducts
    });
  }
  render() {
    let products = this.state.products.map((e, i) => (
      <div key={i}>
        {e.update ? (
          <UpdateProduct product={e} updateState={this.updateProduct} />
        ) : (
          <div key={i}>
            <p>{e.name}</p>
            <img src={e.image1} alt="front" />
            <img src={e.image2} alt="back" />
            <p>{e.price}</p>
            <p>{e.description}</p>
            <p>{e.stock}</p>
            <button onClick={() => this.deleteProduct(e.product_id)}>
              Delete
            </button>{" "}
            <button onClick={() => this.changeProduct(e.product_id)}>
              Change
            </button>
          </div>
        )}
      </div>
    ));
    // console.log(this.state.admin);
    return (
      <div>
        <div>
          {this.state.admin ? (
            <div>
              <Link to="/">
                <button>Home</button>
              </Link>
              <Link to="/admin/newproduct">
                <button>Add Product</button>
              </Link>
              <div>{products}</div>
            </div>
          ) : (
            <div className="not-admin">
              <h6>Unauthoized: Plese Login Below</h6>
              <Footer />{" "}
            </div>
          )}
        </div>
      </div>
    );
  }
}
