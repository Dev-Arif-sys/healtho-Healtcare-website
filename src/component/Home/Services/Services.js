import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useService()
    return (
        <div>
            <h3 className="text-center section-title my-4 text-danger fw-bold">We Are Serving</h3>
            <Row lg={3} sm={1} md={2} xs={1} className="custom-container mx-auto g-4 " >

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>

    );
};

export default Services;