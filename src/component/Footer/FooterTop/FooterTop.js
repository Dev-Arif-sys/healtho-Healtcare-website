import React from 'react';
import './FooterTop.css'

const FooterTop = () => {
    return (
        <div className='top-container'>
            <div className='row container mx-auto align-items-center'>
                <div className='col-md-8'>
                 <h3>Call Us For Emergency Need</h3>
                 <p>We are availvable for 24 hours for serving you. don't hesitate to reach us in easiest way</p>
                </div>
                <div className='col-md-4'>
                  <h6> +99873-382-34
                  </h6>
                  <button className="btn btn-outline-light">Call Now</button>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;