import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Footer = () => {
    const history = useHistory();
    const { user } = useAuth();
    const signUp = () => {
        if (!user) {
            history.push('/register');
        }
    }
    return (
        <div className="bg-dark text-light px-5 pt-4">
            <div className="row">
                <div className="col-lg-3 col-md-3  mb-sm-3">
                    <img alt=""
                        src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top mb-3 p-1" />
                    <h4>Save Life Hospital</h4>
                    <p>Your Life Our Priority</p>
                    <div>
                        <i className="fab fa-facebook fs-4 p-3"></i>
                        <i className="fab fa-instagram fs-4 p-3"></i>
                        <i className="fab fa-youtube fs-4 p-3"></i>
                        <i className="fab fa-twitter fs-4 p-3"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3   text-start mb-sm-3">
                    <p className="text-secondary">Support</p>
                    <p>Contact Us</p>
                    <p><i className="fas fa-phone"></i> Phone : +99999999888</p>
                    <p><i className="fas fa-envelope"></i> E-mail: savelife@gmail.com</p>
                    <p><i className="fas fa-location-arrow"></i> Azimpur rd-1 house-87</p>
                    <p><i className="fab fa-whatsapp"></i> +0099887766</p>
                </div>
                <div className="col-lg-3 col-md-3   text-start mb-sm-3">
                    <p className="text-secondary">Contact Other Branches</p>
                    <p>Dhanmondi : +99999999888</p>
                    <p>Uttara : +99999999877</p>
                    <p>Gulshan : +99999999866</p>
                    <p>Lalbagh : +99999999855</p>
                    <p>Chittagong : +99999999844</p>
                </div>
                <div className="col-lg-3 col-md-3  ">
                    <p><i className="fas fa-envelope"></i> Any query??</p>
                    <input type="email" name="" id="" className="bg-dark text-light border-0 p-3" placeholder="your opinion about us" />
                    <div className="text-center mt-3">
                        <button onClick={signUp} className="btn-danger btn rounded">Send mail</button>
                    </div>

                </div>
                <p className="p-3 text-secondary">@2022  Copyright allright reserved @savelife@gmail.com </p>
            </div>
        </div>
    );
};

export default Footer;