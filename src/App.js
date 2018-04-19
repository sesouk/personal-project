import React, { Component } from 'react';
import routes from './routes';
import Header from './components/header';



export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}
