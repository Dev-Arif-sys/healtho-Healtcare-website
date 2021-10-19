import React from 'react';
import Qoute from './Qoute/Qoute';
import Welcome from './Welcome/Welcome';

const About = () => {
    return (
        <div style={{marginTop:'80px'}}>
            
            <Welcome></Welcome>
            <Qoute></Qoute>
        </div>
    );
};

export default About;