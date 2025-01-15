import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const ParentGuardianContact = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Parent / Guardian Contact Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Surname" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianNames">
              <Form.Label>Names</Form.Label>
              <Form.Control type="text" placeholder="Names" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianDateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianGender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check type="radio" label="Male" name="parentGuardianGender" id="parentGuardianGender-male" inline />
                <Form.Check type="radio" label="Female" name="parentGuardianGender" id="parentGuardianGender-female" inline />
              </div>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianIdPassportNo">
              <Form.Label>ID / Passport No.</Form.Label>
              <Form.Control type="text" placeholder="ID / Passport No." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianTownCityOfResidence">
              <Form.Label>Town/City of Residence</Form.Label>
              <Form.Control type="text" placeholder="Town/City of Residence" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianPlaceOfBirth">
              <Form.Label>Place of Birth</Form.Label>
              <Form.Control type="text" placeholder="Place of Birth" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianResidentialAddress">
              <Form.Label>Residential Address</Form.Label>
              <Form.Control type="text" placeholder="Residential Address" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianAlternativeContactNumber">
              <Form.Label>Alternative Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Alternative Contact Number" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianEmailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="parentGuardianMaritalStatus">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control type="text" placeholder="Marital Status" />
            </Form.Group>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Group id="parentGuardianAvailableForParentBoard">
              <Form.Label>Are you available to serve as a member on the Parent Board of the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="parentGuardianAvailableForParentBoard" id="parentGuardianAvailableForParentBoard-yes" inline />
                <Form.Check type="radio" label="No" name="parentGuardianAvailableForParentBoard" id="parentGuardianAvailableForParentBoard-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="parentGuardianSocialGrant">
              <Form.Label>Does the child, parent and or guardian receive a social grant of any kind? If yes, please specify the name of the grant below:</Form.Label>
              <Form.Control type="text" placeholder="Social Grant Name" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ParentGuardianContact;
