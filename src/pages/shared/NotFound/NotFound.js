import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mb-5">
            <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            <br />
            <Link to="/">go Back</Link>
        </div>
    );
};

export default NotFound;