import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Specialist.css'

const Specialist = () => {
    const [doctors,setDoctor]=useState([])
    useEffect(()=>{
        fetch('./doctors.json')
        .then(res=>res.json())
        .then(data=>setDoctor(data))
    },[])
    return (
        <div className='container'>
            <h2 className='section-title text-center text-danger'>The Specialist</h2>
             <div className='doctors-container'>
                 {
                     doctors.map(doctor=><Doctor
                        doctor={doctor}
                        key={doctor.name}
                     ></Doctor>)
                 }
             </div>
        </div>
    );
};

export default Specialist;