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
        this.deleteProduct = this.deleteProduct.bind(this);
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
    deleteProduct(product_id){
        axios.delete(`/api/shop/${product_id}`).then(r => {
            this.getShop();
        })
    }
    render() {
        let products = this.state.products.map((p,i) => {
            return <div key={i}>
                <h6>{p.name}</h6>
                <p>{p.price}</p>
                <p>{p.description}</p>
                <button onClick={() => this.deleteProduct(p.product_id)}>Delete</button> {' '} <button onClick={(e) => this.props.addToCart(e,p)}>Add To Cart</button>
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
        name: state.name,
        price: state.price,
    }
}

export default connect(mapStateToProps, {addToCart})(Shop);