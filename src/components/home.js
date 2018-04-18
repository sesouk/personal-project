import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home
            <br/>
            <Link to='/shop'>Shop</Link>
                {' '}
            <Link to='/cart'>Cart</Link>
        </div>
    );
};

export default Home;