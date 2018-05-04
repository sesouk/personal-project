import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../ducks/reducer';
import '../Styling/cart.css'

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
                <div className='cart-nav'>
                    <span><Link to='/'><img className='home' src="http://res.cloudinary.com/kvge/image/upload/v1525301020/web-page-home.png" alt="home-button"/></Link></span>
                    <span><Link to='/shop'><img className='back-to-shop' src="http://res.cloudinary.com/kvge/image/upload/v1525455530/go-back-left-arrow.png"/></Link></span>
                {cart}
                </div>
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