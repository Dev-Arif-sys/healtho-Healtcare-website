import React from 'react';
import './Doctor.css'
const Doctor = (props) => {
    const {name,image,departmnent}=props.doctor
    return (
        <div className="doctor-card  ">
             <div className='custom-card'>
                 <div>
                     <img src={image} alt="" />
                 </div>
                 <div>
                     <h5>{name}</h5>
                     <small>{departmnent}</small>
                 </div>
             </div>
        </div>
    );
};

export default Doctor;