import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ChoseUs.css'

const ChoseUs = () => {
    const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <div className='row g-2  my-5 container mx-auto align-items-center'>
            <div className='col-md'>
               <h3 className="choose-title">Why Choose Us</h3>
            </div>
            <div className="col-md ">
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> Medical Counselling</h6>
              </div >
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> All Medical Facilities</h6>
              </div>
            </div>

            <div className='col-md'>
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> professional Services</h6>
              </div>
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> Top Level Doctors</h6>
              </div>
            </div>


            <div className='col-md'>
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> 24 hour service</h6>
              </div>
              <div className='choose-point'>
                  <h6><span>{checkIcon}</span> Dedicated patient care</h6>
              </div>
            </div>
        </div>
    );
};

export default ChoseUs;