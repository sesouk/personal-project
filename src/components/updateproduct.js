import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateProduct extends Component {
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
        this.updateProduct = this.updateProduct.bind(this);
    }
    componentDidMount(){
        const {product_id, image, name, price, description, stock} = this.props.product;
        this.setState({
            product_id, image, name, price, description, stock
        })
    }
    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }
    updateProduct(id){
        axios.put(`/api/shop/${id}`, this.state).then(r => {       
        }).catch(error => {console.log(error);})
        this.props.updateState(this.state)
    }

    render() {
        return (
            <div>
                <input placeholder='image' onChange={e => this.handleChange('image', e.target.value)}/>
                <input placeholder='name' onChange={e => this.handleChange('name', e.target.value)}/>
                <input placeholder='price' onChange={e => this.handleChange('price', e.target.value)}/>
                <input placeholder='description' onChange={e => this.handleChange('description', e.target.value)}/>
                <input placeholder='stock' onChange={e => this.handleChange('stock', e.target.value)}/>
                <button onClick={() => this.updateProduct(this.state.product_id)}>Submit Changes</button> 
            </div>
        );
    }
}