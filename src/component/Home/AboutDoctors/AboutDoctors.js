import React from 'react';
import img from '../../../media/doctor.png'
import './AboutDoctors.css'

const AboutDoctors = () => {
    return (
        <div className=" custom-container mx-auto row align-items-center">
            <div className="doctors-img col-md">
                <img src={img} alt="" />
        
            </div>
            <div className=" col-md">
                <h1>Get Best & Amazing Experice With Our Professional Doctors
                </h1>
                <p>Healtho provides a wide range of high-quality cross-specialty health care services, including physical examinations, preventive screenings and immunizations, urgent care for medical conditions, and referrals to surgical specialists when appropriate through our best medicine doctors in Dhaka.</p>
                <button className=" btn btn-danger">learn more</button>
            </div>
        </div>
    );
};

export default AboutDoctors;