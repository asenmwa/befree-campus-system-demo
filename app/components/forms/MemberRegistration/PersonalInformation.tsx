import React from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const PersonalInformation = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Personal Member Information</h4>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group id="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Surname" />
            </Form.Group>
          </Col>
           <Col md={4} className="mb-3">
            <Form.Group id="names">
              <Form.Label>Names</Form.Label>
              <Form.Control type="text" placeholder="Names" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group id="dateOfBirth">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
          </Col>
           <Col md={4} className="mb-3">
            <Form.Group id="gender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check type="radio" label="Male" name="gender" id="gender-male" inline />
                <Form.Check type="radio" label="Female" name="gender" id="gender-female" inline />
              </div>
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group id="idPassportNo">
              <Form.Label>ID / Passport No.</Form.Label>
              <Form.Control type="text" placeholder="ID / Passport No." />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group id="townCityOfResidence">
              <Form.Label>Town/City of Residence</Form.Label>
              <Form.Control type="text" placeholder="Town/City of Residence" />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group id="placeOfBirth">
              <Form.Label>Place of Birth</Form.Label>
              <Form.Control type="text" placeholder="Place of Birth" />
            </Form.Group>
          </Col>
           <Col md={4} className="mb-3">
            <Form.Group id="residentialAddress">
              <Form.Label>Residential Address</Form.Label>
              <Form.Control type="text" placeholder="Residential Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group id="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group id="alternativeContactNumber">
              <Form.Label>Alternative Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Alternative Contact Number" />
            </Form.Group>
          </Col>
          <Col md={4} className="mb-3">
            <Form.Group id="emailAddress">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-3">
            <Form.Group id="maritalStatus">
              <Form.Label>Marital Status</Form.Label>
              <Form.Control type="text" placeholder="Marital Status" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="mb-3">
            <Form.Group id="twitterHandle">
              <Form.Label>Twitter</Form.Label>
              <Form.Control type="text" placeholder="Twitter Handle" />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Group id="instagramHandle">
              <Form.Label>Instagram</Form.Label>
              <Form.Control type="text" placeholder="Instagram Handle" />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Group id="tiktokHandle">
              <Form.Label>TikTok</Form.Label>
              <Form.Control type="text" placeholder="TikTok Handle" />
            </Form.Group>
          </Col>
          <Col md={3} className="mb-3">
            <Form.Group id="facebookHandle">
              <Form.Label>Facebook</Form.Label>
              <Form.Control type="text" placeholder="Facebook Handle" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="availableForSrcBoard">
              <Form.Label>Are you available to serve on the SRC Board of the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="availableForSrcBoard" id="availableForSrcBoard-yes" inline />
                <Form.Check type="radio" label="No" name="availableForSrcBoard" id="availableForSrcBoard-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PersonalInformation;
