import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../ducks/reducer';
import '../Styling/cart.css'

class Cart extends Component {
    render() {
        let cart = this.props.cart.map((e,i) => {
            return <div className='product-container' key={i}>
                <p className='product'>{e.name}</p>
                <div className='shirt-cart'>
                <img src={e.image} alt="shirt-front"/>
                </div>
                <p className='price'>${e.price}</p>
                <div className='button-holder'>
                <button className='rfc' onClick={() => this.props.removeFromCart(e.product_id)}>Remove from Cart</button>
                </div>
            </div>
        })
        return (
            <div>
                <div className='cart-nav'>
                    <span><Link to='/'><img className='home' src="http://res.cloudinary.com/kvge/image/upload/v1525301020/web-page-home.png" alt="home-button"/></Link></span>
                    <span><Link to='/shop'><img className='back-to-shop' src="http://res.cloudinary.com/kvge/image/upload/v1525455530/go-back-left-arrow.png" alt='back-to-shop-button'/></Link></span>
                </div>
                <div className='cart-container'>
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