import React from 'react';
import { Col } from 'react-bootstrap';
import useServices from '../../Hooks/getServices';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const Service = (props) => {
     const{name,id,image,description}=props.service
     const arrowIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />
     const history=useHistory()
     const showDetail=()=>{
       history.push(`/service/${id}`)
     }
    return (
        <Col>
            
            <div className="service">
            <div className="card-img">
            <img  src={image} alt="" />
            </div>
            <div className="my-3 card-text">
                <h4 className="service-name">{name}</h4>
                <p className="text-secondary">{description.slice(0,150)}....</p>
                <button className="detail-btn" onClick={showDetail}> <span className="arrow-icon">{arrowIcon}</span> View Details</button>
            </div>
            
            </div>
        </Col>
    );
};

export default Service;