import React from 'react';
import AboutDoctors from './AboutDoctors/AboutDoctors';
import Banner from './Banner/Banner';
import MedicalPractice from './MedicalPractice/MedicalPractice';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <AboutDoctors></AboutDoctors>
           <MedicalPractice></MedicalPractice>
           <Services></Services>
          
        </div>
    );
};

export default Home;
