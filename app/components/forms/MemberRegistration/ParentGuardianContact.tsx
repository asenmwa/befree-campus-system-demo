import React from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const ParentGuardianContact = () => {
  return (
    <fieldset>
      <legend>Parent / Guardian Contact Information</legend>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name="parentGuardianTitle" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianLastName">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Surname" name="parentGuardianLastName" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianFirstName">
            <Form.Label>Names</Form.Label>
            <Form.Control type="text" placeholder="Names" name="parentGuardianFirstName" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="parentGuardianDateOfBirth" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianGender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check type="radio" label="Male" name="parentGuardianGender" id="parentGuardianGender-male" value="male" inline />
              <Form.Check type="radio" label="Female" name="parentGuardianGender" id="parentGuardianGender-female" value="female" inline />
            </div>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address" name="parentGuardianEmail" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianPhone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" name="parentGuardianPhone" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianAddress">
            <Form.Label>Residential Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="parentGuardianAddress" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Town/City of Residence" name="parentGuardianCity" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name="parentGuardianState" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianZipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" name="parentGuardianZipCode" />
          </Form.Group>
        </Col>
        <Col md={12} className="mb-3">
          <Form.Group id="parentGuardianSocialGrant">
            <Form.Label>Does the child, parent and or guardian receive a social grant of any kind? If yes, please specify the name of the grant below:</Form.Label>
            <Form.Control type="text" placeholder="Social Grant Name" name="parentGuardianSocialGrant" />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default ParentGuardianContact;
