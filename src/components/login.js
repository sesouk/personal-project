import React from 'react';

const Login = (props) => {
    return (
        <div className='login'>
            <button onClick={props.login}>Login</button>
        </div>
    );
};

export default Login;