import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import store from './ducks/store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>    
            <App />
        </BrowserRouter>
     </Provider>
, document.getElementById('root'));
// registerServiceWorker();
