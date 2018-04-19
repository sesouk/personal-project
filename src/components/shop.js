import React, { Component } from 'react';
import { addToCart } from '../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Shop extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.getShop()
    }
    getShop(){
        axios.get('/api/shop').then(r => {
            this.setState({
                products: r.data
            })
        })
    }
    render() {
        let products = this.state.products.map((p,i) => {
            return <div key={i}>
                <p>{p.name}</p>
                <img src={p.image} alt="logo"/>
                <p>{p.price}</p>
                <p>{p.description}</p>
                <button onClick={(e) => this.props.addToCart(e,p)}>Add To Cart</button>
            </div>
        })
        return (
            <div>
                Shop
                <br/>
                <Link to='/'>Home</Link>
                {' '}
                <Link to='/cart'>Cart</Link>
                {products}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        cart: state.cart
    }
}

export default connect(mapStateToProps, {addToCart})(Shop);