import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateProduct from './updateproduct'

export default class Admin extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            
        }
        this.deleteProduct = this.deleteProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
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
    changeProduct(id){
        let newProducts = this.state.products.slice();
        let index = newProducts.findIndex(e => e.product_id == id)
        newProducts[index].update=true
        this.setState({
            products: newProducts
        })
    }
    updateProduct(product){
        let newProducts = this.state.products;
        let index = newProducts.findIndex(e => e.product_id == product.product_id)
        newProducts[index] = product
        newProducts[index].update=false
        this.setState({
            products: newProducts
        })
    }
    render() {
        let products = this.state.products.map((e,i) => 
            <div key={i}>
            {e.update ? <UpdateProduct product={e} updateState={this.updateProduct}/> : 
            <div key={i}>
                <p>{e.name}</p>
                <img src={e.image} alt="logo"/>
                <p>{e.price}</p>
                <p>{e.description}</p>
                <p>{e.stock}</p>
                <button onClick={() => this.deleteProduct(e.product_id)}>Delete</button> {' '} <button onClick={() => this.changeProduct(e.product_id)}>Change</button>
            </div>
            }
            </div>
    )
        return (
            <div>
                Shop
                <br/>
                <Link to='/'>Home</Link> {' '}
                <Link to='/admin/newproduct'>Add Product</Link>
                {products}
            </div>
        );
    }
}