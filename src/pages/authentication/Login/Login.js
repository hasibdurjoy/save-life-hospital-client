import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";

    const { signInUsingGoogle, signInUsingGithub, logInWithEmailPassword } = useAuth();
    let { error } = useAuth();
    if (error) {
        error = 'incorrect username or password try again'
    }
    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history)
        /* .then(result => {
            history.push(redirect_url);
        }) */
    }
    const logInWithGithub = () => {
        signInUsingGithub(redirect_url, history)

    }


    const takeEmail = (e) => {
        setEmail(e.target.value);
    }

    const takePassword = (e) => {
        setPassword(e.target.value);
    }

    const signInWithEmailPassword = (e) => {
        e.preventDefault();
        logInWithEmailPassword(email, password, redirect_url, history)
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-2 log-in">
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <div>
                        <img
                            alt=""
                            src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                        />
                        <h4>Save Life Hospital</h4>
                    </div>
                    <form className="w-100">
                        <input onBlur={takeEmail} className="mt-2 p-2 rounded border-1 w-100" type="email" name="" placeholder="email" required /><br />
                        <input onBlur={takePassword} className="mt-4 mb-2 p-2 rounded border-1 w-100" type="password" name="" placeholder="password" required id="user-password" />
                        <div className="text-danger text-start">{error}</div>
                        <br />
                        <input onClick={signInWithEmailPassword} className="mt-2 p-2 rounded border-1 w-100 btn btn-danger" type="submit" value="Sign In" />
                    </form>
                    <p className="mt-4">
                        <Link to="/register" className="text-danger">don't have an account? sign up now</Link>
                    </p>
                    <hr />
                    <p>OR</p>
                    <button className="btn btn-outline-secondary w-100 " onClick={logInWithGoogle}><img src={googleIcon} alt="" /> Sign in with Google</button>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={logInWithGithub}><img src={githubIcon} alt="" /> Sign in with Github</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;