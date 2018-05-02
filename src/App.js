import React, { Component } from 'react';
import routes from './routes';
import Header from './components/header';
import './Styling/App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        {routes}
        <Header />
      </div>
    );
  }
}
