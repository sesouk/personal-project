import React, { Component } from 'react';
import routes from './routes';
import './Styling/App.css';



export default class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    );
  }
}
