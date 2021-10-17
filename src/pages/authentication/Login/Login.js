import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { singInWithGoogle } = useAuth();
    return (
        <div>
            <button onClick={singInWithGoogle}>Log in</button>
        </div>
    );
};

export default Login;