import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { signInUsingGoogle, signInUsingGithub, registerWithEmailPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";
    const [error, setError] = useState();

    const onSubmit = data => {
        if ((data.password).length < 6) {
            setError('** password must be at least 6 characters');
            return;
        }
        if (data.password!==data.confirmPassword) {
            setError('** please match both password');
            return;
        }
        else {
            registerWithEmailPassword(data.name, data.email, data.password, redirect_url, history);
        }
    };

    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history);
    }
    const logInWithGithub = () => {
        signInUsingGithub(redirect_url, history);
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-2 pb-5 register">
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
                    <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                        <input  {...register("name", { required: true })} type="text" className="mt-2 p-2 rounded border-1 w-100" placeholder="enter your name " /> <br />
                        {errors.name && <>  <span className="text-danger text-start">** Name is required</span></>}

                        <input  {...register("email", { required: true })} type="email" className="mt-3 p-2 rounded border-1 w-100" placeholder="email address" /> <br />
                        {errors.email && <>  <span className="text-danger text-start">** Enter your email address</span></>}


                        <input  {...register("password", { required: true })} type="password" className="mt-3 p-2 rounded border-1 w-100" placeholder="password *" /> <br />
                        {errors.password && <>  <span className="text-danger text-start">** Please enter a password</span></>}
                        <div className="text-danger text-start">{error}</div>

                        <input  {...register("confirmPassword", { required: true })} type="password" className="mt-3 p-2 rounded border-1 w-100" placeholder="Confirm password *" /> <br />
                        {errors.confirmPassword && <>  <span className="text-danger text-start">** Please renter password</span></>}
                        <div className="text-danger text-start">{error}</div>

                        <input type="submit" value="Sign up" className="mt-2 p-2 rounded border-1 w-100 btn btn-danger" />
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