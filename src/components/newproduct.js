import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            product_id: '',
            image: '',
            name: '',
            price: '',
            description: '',
            stock: ''
        }
        this.createProduct = this.createProduct.bind(this);
    }
    addImage(val){
        this.setState({
            image: val
        })
    }
    addName(val){
        this.setState({
            name: val
        })
    }
    addPrice(val){
        this.setState({
            price: val
        })
    }
    addDescription(val){
        this.setState({
            description: val
        })
    }
    addStock(val){
        this.setState({
            stock: val
        })
    }
    createProduct(obj){
        axios.post('/api/shop', obj).then(r => {
            this.setState({
                products: r.data
            })
            this.props.history.push('/admin')
        })
    }
    render() {
        let {image, name, price, description, stock} = this.state;
        return (
            <div>
                <Link to='/admin'><button>Cancel</button></Link>
                <input placeholder='image' onChange={e => this.addImage(e.target.value)}/>
                <input placeholder='name' onChange={e => this.addName(e.target.value)}/>
                <input placeholder='price' onChange={e => this.addPrice(e.target.value)}/>
                <input placeholder='description' onChange={e => this.addDescription(e.target.value)}/>
                <input placeholder='stock' onChange={e => this.addStock(e.target.value)}/>
                <button onClick={() => this.createProduct({image, name, price, description, stock})}>Add Product</button>
            </div>
        );
    }
}