import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import './Footer.css'
import FooterTop from './FooterTop/FooterTop';

const Footer = () => {
    return (
        <div>
          <FooterTop></FooterTop>
          <div className='footer'>
              <Row className="container mx-auto">
                  <Col sm={12} md={3}>
                    <div className="footer-logo mt-2">
                        <h1 className="logo"> HELT<span className="logo-portion">HO</span></h1>
                        <p>We have made the most advanced, constumizable & user friendly medical theme in the world.</p>
                    </div>
                  </Col>
                  <Col className="text-white" sm={12} md={3}>
                  <h5 className='mt-2'>Useful Links</h5>
                  <ul className="list">
                     <li><a href=""> Home</a></li>
                     <li><a href="">Services</a></li>
                     <li><a href="">About us</a></li>
                     <li><a href="">Doctors</a></li>
                     <li><a href="">Privacy policy</a></li>
                     <li><a href="">Contact us</a></li>
                  </ul>
                  </Col>
                  <Col className="text-white" sm={12} md={3}>
                  <h5 className='mt-2'>Departments</h5>
                  <ul className="list">
                     <li><a href=""> Dental Surgery</a></li>
                     <li><a href="">Cardiology</a></li>
                     <li><a href="">General Surgery</a></li>
                     <li><a href="">Neourology</a></li>
                     <li><a href="">Dermatalogy</a></li>
                     <li><a href="">Labrotory test</a></li>
                  </ul>
                  </Col>
                  <Col className="text-white" sm={12} md={3}>
                  <h5 className='mt-2'>Weekly Newsletter</h5>
                  <p>Subscribe to get our well published newsletter</p>
                  <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>
          
            
            <Button className='signout-btn' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
                  </Col>
              </Row>
          </div>
        </div>
    );
};

export default Footer;