import React from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const EmergencyContact = () => {
  return (
    <fieldset>
      <legend>Emergency Contact Information</legend>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name="emergencyContactTitle" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactLastName">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Surname" name="emergencyContactLastName" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactFirstName">
            <Form.Label>Names</Form.Label>
            <Form.Control type="text" placeholder="Names" name="emergencyContactFirstName" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactRelationship">
            <Form.Label>Relationship to Member</Form.Label>
            <Form.Control type="text" placeholder="Relationship" name="emergencyContactRelationship" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactPhone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" name="emergencyContactPhone" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactAlternativePhone">
            <Form.Label>Alternative Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Alternative Contact Number" name="emergencyContactAlternativePhone" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactAddress">
            <Form.Label>Residential Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="emergencyContactAddress" />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default EmergencyContact;
