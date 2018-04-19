import React, { Component } from 'react';
import { connect } from 'react-redux'
// import axios from 'axios';
import Login from './login'
import { login, logout } from '../ducks/reducer';

class Header extends Component {
    // componentDidMount() {
    //     axios.get('/api/profile').then(response => {
    //       if(response.data.user){
    //         this.props.login(response.data.user);
    //       }
    //     });
    //   }
    
      login(){
        const callbackUri = encodeURIComponent(window.location.origin + '/auth/callback');
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${callbackUri}`;
      }
    render() {
        return (
            <div>
                <Login login={this.login}/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login,
    logout,
  }
  
export default connect(null, mapDispatchToProps)(Header);