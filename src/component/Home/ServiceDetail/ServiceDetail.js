import React from 'react';
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router';
import useService from '../../Hooks/useService';
import './ServiceDetail.css'


const ServiceDetail = () => {
    
    const {serviceId}=useParams()
    const {services}=useService()
    const matchedService=services.find(service=>service.id==serviceId)
   console.log(matchedService)
  
    const {name,image,description}=matchedService;
     const navigate=useNavigate()
    const handleAllServices=()=>{
        navigate('/home') 
    }
   
    return (
        <div>
            <div className="main-title ">
              <div className="container">
                  <h1>{name}</h1>
              </div>
              </div>
              <div className="container">
                  <div className="heading-img">
                      <img src={image} alt="" />
                  </div>
                  <div>
                      <h3>{name}</h3>
                      <p>{description}</p>
                  </div>
                  <div className="text-center py-4">
                  <button onClick={handleAllServices} className="sign-btn">see all services</button>
                  </div>
              </div>
             

        </div>
    );
};

export default ServiceDetail;