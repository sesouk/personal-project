import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Cart extends Component {
    render() {
        let cart = this.props.cart.map((e,i) => {
            return <div key={i}>
                <h6>{e.name}</h6>
                <h6>{e.price}</h6>
            </div>
        })
        return (
            <div>
                Cart
                <br/>
                <Link to='/'>Home</Link>
                {' '}
                <Link to='/shop'>Shop</Link>
                {cart}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);