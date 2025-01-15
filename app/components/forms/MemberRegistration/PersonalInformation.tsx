import React from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const PersonalInformation = () => {
  return (
    <fieldset>
      <legend>Personal Member Information</legend>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" name="firstName" />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" name="lastName" />
          </Form.Group>
        </Col>
         <Col md={4} className="mb-3">
          <Form.Group id="rfid">
            <Form.Label>RFID</Form.Label>
            <Form.Control type="text" placeholder="RFID" name="rfid" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="dateOfBirth" />
          </Form.Group>
        </Col>
         <Col md={4} className="mb-3">
          <Form.Group id="gender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check type="radio" label="Male" name="gender" id="gender-male" value="male" inline />
              <Form.Check type="radio" label="Female" name="gender" id="gender-female" value="female" inline />
            </div>
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address" name="email" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" name="phone" />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="address" />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Town/City of Residence" name="city" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="state">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name="state" />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" name="zipCode" />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default PersonalInformation;
