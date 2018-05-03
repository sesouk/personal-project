import React, { Component } from 'react';
import routes from './routes';
import Footer from './components/footer';
import './Styling/App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        {routes}
        <Footer />
      </div>
    );
  }
}
