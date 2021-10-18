import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';

const Register = () => {
    const { singInWithGoogle } = useAuth();
    return (
        <div className="d-flex flex-column align-items-center justify-content-center py-2 register">
            <img src="https://i.ibb.co/GFDfGcp/Hospital-Logo-1.png" alt="" height="100px" className=" mb-4 w-25 rounded" />
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <form className="w-100">
                        <input className="mt-2 p-2 rounded border-1 w-100" type="email" name="" id="" placeholder="name" required /><br />
                        <input className="mt-3 p-2 rounded border-1 w-100" type="email" name="" id="" placeholder="email" required /><br />
                        <input className="mt-3 p-2 rounded border-1 w-100" type="email" name="" id="" placeholder="password" required /><br />
                        <input className="mt-4 p-2 rounded border-1 w-100 btn btn-danger" type="submit" value="Sign up" />
                    </form>
                    <p className="mt-4">
                        <Link to="/register" className="text-danger">already have an account? sign in now</Link>
                    </p>
                    <hr />
                    <p>OR</p>
                    <button className="btn btn-outline-secondary w-100 " onClick={singInWithGoogle}><img src={googleIcon} alt="" /> Sign up with Google</button>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={singInWithGoogle}><img src={githubIcon} alt="" /> Sign up with Github</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;