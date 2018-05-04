import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';
import Login from './login'
import Logout from './logout'
import { login, logout } from '../ducks/reducer';

class Header extends Component {
  constructor(){
    super()
      this.state = {
        loggedIn: false,
        user: ''
      }
  }
    componentDidMount() {
      // this.logInUser();
      this.checkIfLoggedIn();
      }
      
      logInUser(){
          axios.get('/api/user-data').then(r => {
          if(r.data.user){
          this.props.login(r.data.user);
          this.setState({
            user: r.data.user
          })
          }
        });
      }

      checkIfLoggedIn(){
        axios.get('/api/user-data').then(r => {
          if(r.data.user){
            this.setState({
              loggedIn: true,
              user: r.data.user
            })
          } 
        })
      }

      rerender = () =>{
        this.setState({
          user: ''
        })
      }

      login(){
        const callbackUri = encodeURIComponent(window.location.origin + '/auth/callback');
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUri}`;
      }
    render() {
      console.log(this.state.user)
        return (
            <div className='login-logout'>
            <div>
                {this.state.user ?
                <div><Logout  rerender={this.rerender} logout={this.logout}/></div>
                :<div><Login login={this.login}/></div>
                }    
            </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login,
    logout,
  }
  
export default connect(null, mapDispatchToProps)(Header);