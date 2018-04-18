import React from 'react';
import cart from './components/cart';
import home from './components/home';
import shop from './components/shop';
import { BrowserRouter, Route} from 'react-router-dom';

export default (
    <BrowserRouter>
        <div>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
        </div>
    </BrowserRouter>
)