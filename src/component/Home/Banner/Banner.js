import React from 'react';
import { ButtonGroup,Button } from 'react-bootstrap';
import './Banner.css'
import img from '../../../media/banner/illustration.svg'

const Banner = () => {

    return (
        <div className="banner">
            <div className=" h-100 banner-container">
                <div className='banner-text'>
                    <h5 className="text-danger"> Welcome to Healtho</h5>
                    <div className="my-3">
                        <h1 className="mb-3">Providing Best Medical and Health Care</h1>
                        <p>Our integrated friendly health system is on a relentless pursuit of better care in the world</p>
                    </div>
                    <div>
                    <Button className="me-2" variant="success">Read more</Button>
                    <Button variant="primary">Contact us</Button>
                    </div>
            
                </div>
                <div className="banner-img">
                        <img  src={img} alt="" />
                    </div>
            </div>
        </div>
    );
};

export default Banner;