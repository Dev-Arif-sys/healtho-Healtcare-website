import React from 'react';
import Book from './Book/Book';
import Specialist from './Specialist/Specialist';

const Doctors = () => {
    return (
        <div style={{marginTop:'80px'}}>
            <Specialist></Specialist>
            <Book></Book>
        </div>
    );
};

export default Doctors;