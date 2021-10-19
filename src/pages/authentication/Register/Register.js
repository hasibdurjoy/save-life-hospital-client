import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';

const Register = () => {
    const { signInWithGoogle, signInWithGithub, registerWithEmailPassword } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [password, setPassword] = useState();
    // const history = useHistory();

    const takeName = (e) => {
        setName(e.target.value);
    }
    const takeEmail = (e) => {
        setEmail(e.target.value);
    }

    const takePassword = (e) => {
        setPassword(e.target.value);
    }


    const logInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const logInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const newAccountWithEmailPassword = (e) => {
        e.preventDefault();
        if (!name) {
            setError('enter your name');
            return;
        }
        if (!email) {
            setError('enter your email');
            return;
        }
        if (password.length < 6) {
            setError('Password must be atleast 6 character');
            return;
        }
        else {
            registerWithEmailPassword(name, email, password, redirect_url, history);

        }
        // history.push('/login');
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-2 register">
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <img
                        alt=""
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                    />
                    <h4>Save Life Hospital</h4>
                    <form className="w-100">
                        <input onBlur={takeName} className="mt-2 p-2 rounded border-1 w-100" type="text" name="" placeholder="name" required /><br />
                        <input onBlur={takeEmail} className="mt-3 p-2 rounded border-1 w-100" type="email" name="" placeholder="email" required /><br />
                        <input onBlur={takePassword} className="mt-3 p-2 rounded border-1 w-100" type="password" name="" placeholder="password" required />
                        <div className="text-danger text-start pt-2">{error}</div>
                        <br />
                        <input onClick={newAccountWithEmailPassword} className="mt-2 p-2 rounded border-1 w-100 btn btn-danger" type="submit" value="Sign up" />
                    </form>
                    <p className="mt-4">
                        <Link to="/login" className="text-danger">already have an account? sign in now</Link>
                    </p>
                    <hr />
                    <p>OR</p>
                    <button className="btn btn-outline-secondary w-100 " onClick={logInWithGoogle}><img src={googleIcon} alt="" /> Sign up with Google</button>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={logInWithGithub}><img src={githubIcon} alt="" /> Sign up with Github</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;