import React from 'react';
import axios from 'axios';

const Logout = (props) => {
    return (
        <div>
             <button onClick={() => {
                axios.post('/api/logout').then(response => {
                    props.logout();
                    props.history.push('/');
                });
            }}>Logout</button>
        </div>
    );
};

export default Logout;