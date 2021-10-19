import React from 'react';
import { ButtonGroup,Button, Col, Form, Row } from 'react-bootstrap';

const Book = () => {
    return (
        <div className='container my-5'>
            <h3>Book one of them</h3> 
            <hr />
            <div>
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Doctor's Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Patient Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Phone No</Form.Label>
    <Form.Control placeholder="+999334-34-34" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Email</Form.Label>
      <Form.Control  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Departmnets</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Caediology</option>
        <option>Hematology</option>
        <option>Dentist</option>
        <option>Gyniclology</option>
      </Form.Select>
    </Form.Group>

    
  </Row>


  <Button variant="primary" type="submit">
    Book
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Book;