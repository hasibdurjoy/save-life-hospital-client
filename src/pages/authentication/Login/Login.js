import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';
import googleIcon from '../../../images/icons/google.png'
import githubIcon from '../../../images/icons/github.png'

const Login = () => {

    const { singInWithGoogle } = useAuth();
    return (
        <div className="d-flex align-items-center justify-content-center py-5 log-in">
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <form className="w-100">
                        <input className="mt-4 mb-2 p-2 rounded border-1 w-100" type="email" name="" id="" placeholder="email" required /><br />
                        <input className="mt-4 mb-2 p-2 rounded border-1 w-100" type="email" name="" id="" placeholder="password" required /><br />
                        <input className="mt-4 p-2 rounded border-1 w-100 btn btn-danger" type="submit" value="Sign In" />
                    </form>
                    <p className="mt-4">
                        <Link to="/register" className="text-danger">don't have an account? sign up now</Link>
                    </p>
                    <hr />
                    <p>OR</p>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={singInWithGoogle}><img src={googleIcon} alt="" /> Sign in with Google</button>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={singInWithGoogle}><img src={githubIcon} alt="" /> Sign in with Github</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;