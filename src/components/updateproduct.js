import React, { Component } from 'react';
import axios from 'axios';


export default class UpdateProduct extends Component {
    constructor(){
        super();
        this.state = {
            product_id: '',
            image1: '',
            image2: '',
            name: '',
            price: '',
            description: '',
            stock: ''
        }
        this.updateProduct = this.updateProduct.bind(this);
    }
    componentDidMount(){
        const {product_id, image1, image2, name, price, description, stock} = this.props.product;
        this.setState({
            product_id, image1, image2, name, price, description, stock
        })
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    updateProduct(id){
        const updatedProducts = { image1: this.state.image1, image2: this.state.image2, name: this.state.name, price: this.state.price, description: this.state.description, stock: this.state.stock }
        axios.put(`/api/shop/${id}`, updatedProducts).then(r => {       
        }).catch(error => {console.log(error);})
        this.props.updateState(this.state)
    }

    render() {
        return (
            <div>
                <input placeholder='image1' onChange={e => this.handleChange('image1', e.target.value)}/>
                <input placeholder='image2' onChange={e => this.handleChange('image2', e.target.value)}/>
                <input placeholder='name' onChange={e => this.handleChange('name', e.target.value)}/>
                <input placeholder='price' onChange={e => this.handleChange('price', e.target.value)}/>
                <input placeholder='description' onChange={e => this.handleChange('description', e.target.value)}/>
                <input placeholder='stock' onChange={e => this.handleChange('stock', e.target.value)}/>
                <button onClick={() => this.updateProduct(this.state.product_id)}>Submit Changes</button>
            </div>
        );
    }
}