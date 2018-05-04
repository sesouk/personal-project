import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            product_id: '',
            image1: '',
            image2: '',
            name: '',
            price: '',
            description: '',
            stock: '',
            admin: false,
            adminId: ''
        }
        this.createProduct = this.createProduct.bind(this);
    }
    componentDidMount(){
        this.adminCheck();
    }
    adminCheck(){
        axios.get('/api/admin').then(r => {
            // console.log(r.data[0].auth0_id);
            axios.get('/api/user-data').then(r2 => {
                this.setState({adminId: r.data[0].auth0_id})
                // console.log('---------', r2.data.user.auth0_id);
                // console.log('---------', this.state.adminId);
            if(r2.data.user){
                if(r2.data.user.auth0_id === this.state.adminId)
                {this.setState({
                    admin: true
                })
            }}
        }).catch(err => console.log(err))
      })
}
    addImage1(val){
        this.setState({
            image1: val
        })
    }
    addImage2(val){
        this.setState({
            image2: val
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
        let {image1, image2, name, price, description, stock} = this.state;
        return (
            <div>
                <div>
                {this.state.admin ? 
                <div>
                <Link to='/admin'><button>Cancel</button></Link>
                <input placeholder='image1' onChange={e => this.addImage1(e.target.value)}/>
                <input placeholder='image2' onChange={e => this.addImage2(e.target.value)}/>
                <input placeholder='name' onChange={e => this.addName(e.target.value)}/>
                <input placeholder='price' onChange={e => this.addPrice(e.target.value)}/>
                <input placeholder='description' onChange={e => this.addDescription(e.target.value)}/>
                <input placeholder='stock' onChange={e => this.addStock(e.target.value)}/>
                <button onClick={() => this.createProduct({image1, image2, name, price, description, stock})}>Add Product</button>
                </div>
                :
                <div><h6>UNAUTHORIZED: Please Login</h6></div>
                }
                </div>
            </div>
        );
    }
}