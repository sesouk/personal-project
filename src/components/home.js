import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

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
                <p>{e.formatted}{' '}{e.nextAbbreviation}</p>
            </div>
        })
        return (
            <div>
                Home
                <br/>
                <Link to='/shop'>Shop</Link>
                    {' '}
                <Link to='/cart'>Cart</Link>
                {time}
            </div>    
        );
    }
}