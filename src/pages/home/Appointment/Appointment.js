import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Appointment = () => {
    const { user } = useAuth();
    return (
        <div className="container py-5">
            <h1 className="text-bold">Take an <span className="text-danger">appointment</span></h1>
            <div className="row mt-4">
                <div className="col-lg-6 col-md-6">
                    <img src="https://image.freepik.com/free-vector/woman-booking-appointment-calendar_23-2148562875.jpg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 col-md-6 text-start">
                    <form >
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="">Name</label> <br />
                                <input type="text" className="py-1 px-2 mt-2 rounded" name="" id="" defaultValue={user.displayName} />

                            </div>
                            <div className="col-6">
                                <label htmlFor="">Email</label> <br />
                                <input type="email" className="py-1 px-2 mt-2 rounded" name="" id="" defaultValue={user.email} />
                            </div>
                        </div>
                        <label htmlFor="" className="mt-3">Phone</label> <br />
                        <input type="number" className="py-1 px-2 mt-2 w-100 rounded" name="" id="" />

                        <label htmlFor="" className="mt-3">Doctor</label> <br />
                        <select name="doctor" id="doctor" className="py-1 px-2 mt-2 w-100 rounded">
                            <option value="Dr. Rozanee Kanta Das">Dr. Rozanee Kanta Das (medicine and gastrology)</option>
                            <option value="Dr. Toufiq Ahmed Pranto">Dr. Toufiq Ahmed Pranto (heart and urology)</option>
                            <option value="Dr. Fazle Rabbi Talukder">Dr. Fazle Rabbi Talukder (Surgery)</option>
                            <option value="Dr. Morina haque">Dr. Morina haque (kidney)</option>
                            <option value="Dr. Rozina Khatun">Dr. Rozina Khatun (women problems)</option>
                            <option value="Dr. Towfiqul Islam">Dr. Towfiqul Islam (Neurology)</option>
                        </select>

                        <label htmlFor="" className="mt-3">Date</label> <br />
                        <input type="date" className="py-1 px-2 mt-2 w-100 rounded" name="" id="" />

                        <button className="btn btn-success rounded mt-4">Confirm Appointment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;