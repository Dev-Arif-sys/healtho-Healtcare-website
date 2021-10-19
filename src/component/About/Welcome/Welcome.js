import React from 'react';
import './Welcome.css'
import img from '../../../media/usman-yousaf-pTrhfmj2jDA-unsplash-removebg-preview.png'

const Welcome = () => {
    return (
        <div className="container">
            <h1>Wolcome to Healtho</h1>
            <hr />
            <div className='d-flex justify-content-between align-items-center'>
              <p><strong>Healtho</strong> is a private not-for-profit hospital and one of the most comprehensive medical facilities in West Central Florida serving a dozen counties with a population in excess of 4 million. As one of the largest hospitals in Florida, Tampa General is licensed for 1,041 beds, and with more than 8,000 team members, is one of the region’s largest employers. Consistently recognized for world-class care, Tampa General Hospital was ranked as the #1 hospital in Tampa Bay by U.S. News & World Report for 2021-22, marking the sixth consecutive year TGH has accomplished the feat. Tampa General is also listed among the top four hospitals in Florida and ranked as one of the nation’s top 50 hospitals in five medical specialties, according to the digital media company. Additionally, Tampa General was ranked as “high performing,” or among the top 10% of hospitals in the nation, in four more specialties along with 12 procedures and conditions for 2021-22.</p>
           
            <div className='d-sm-none d-none d-md-block'>
                <img src={img} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Welcome;