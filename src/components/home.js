import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../Styling/home.css'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            time: []
        }
        this.getTime = this.getTime.bind(this);
    }
    componentDidMount(){
        this.getTime();
        // setInterval(this.getTime, 1000);
    }
    getTime(){
        axios.get('http://api.timezonedb.com/v2/get-time-zone?key=D8LR0CQXNGX0&format=json&by=zone&zone=America/Denver').then(r => {
            this.setState({
                time: [r.data]
            })
            // console.log(r.data);
            // console.log(this.state.time);
        })
    }
    // ,() => this.updateTime()
    // updateTime(){
    //     let time = this.state.time[0].formatted;
    //     time = time.substr(11,8);
    //     time = time.split(':');
    //     let hours = parseInt(time[0], 10);
    //     let minutes = parseInt(time[1], 10);
    //     let seconds = parseInt(time[2], 10);
    //     seconds++
    // }
    render() {
        let time = this.state.time.map((e,i) => {
            return <div key={i}>
                <p className='time'>{e.formatted}{' '}{e.nextAbbreviation}</p>
            </div>
        })
        return (
            <div>
                <div className='logo'>
                    <img className='bogo' src="http://res.cloudinary.com/kvge/image/upload/c_scale,h_685/v1525298041/logo-3-KVGE.png" alt="box-logo"/>
                </div>
                {time}
                <nav className='mobile-nav'>
                    <ul>
                    <li><button className='mobile'>Spring/Summer 2018 Lookbook</button></li>
                    <li><Link to='/shop'><button className='mobile'>Shop</button></Link></li>
                    {/* <li><Link to='/cart'><button>Cart</button></Link></li> */}
                    <li><button className='mobile'>About</button></li>
                    <li><button className='mobile'>Contact</button></li>
                    </ul>
                </nav>
                    <div className='social'>
                    <a href="https://www.facebook.com/kvgebrand" id='fb'><img src="http://res.cloudinary.com/kvge/image/upload/v1525287917/facebook-logo.png" alt="facebook link"/></a>
                    <a href="https://www.instagram.com/kvgebrand" id='ig'><img src="http://res.cloudinary.com/kvge/image/upload/v1525287917/512px-Instagram_simple_icon.png" alt="instagram link"/></a>
                    <a href="https://www.twitter.com/kvgebrand" id='twitter'><img src="http://res.cloudinary.com/kvge/image/upload/v1525287917/twitter.png" alt="twitter link"/></a>
                    </div>                
                <nav className='desktop'>
                    <ul>
                    <li>Spring/Summer 2018 Lookbook</li>
                    <li><Link to='/shop'>Shop</Link></li>
                    {/* <li><Link to='/cart'>Cart</Link></li> */}
                    <li>Contact</li>
                    </ul>                
                </nav>
                <div>
                    
                </div>
            </div>    
        );
    }
}