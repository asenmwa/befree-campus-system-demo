import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const EmergencyContact = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Emergency Contact Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Surname" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactNames">
              <Form.Label>Names</Form.Label>
              <Form.Control type="text" placeholder="Names" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactRelationship">
              <Form.Label>Relationship to Member</Form.Label>
              <Form.Control type="text" placeholder="Relationship" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactResidentialAddress">
              <Form.Label>Residential Address</Form.Label>
              <Form.Control type="text" placeholder="Residential Address" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="emergencyContactAlternativeContactNumber">
              <Form.Label>Alternative Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Alternative Contact Number" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmergencyContact;
