import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../ducks/reducer';

class Cart extends Component {
    render() {
        let cart = this.props.cart.map((e,i) => {
            return <div key={i}>
                <p>{e.name}</p>
                <img src={e.image} alt="shirt-front"/>
                <p>{e.price}</p>
                <button onClick={() => this.props.removeFromCart(e.product_id)}>Remove from Cart</button>
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

export default connect(mapStateToProps, {removeFromCart})(Cart);