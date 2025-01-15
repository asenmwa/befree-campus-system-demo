import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const MedicalHistory = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Medical History</h4>
         <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicalAid">
              <Form.Label>Do you have medical aid?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="medicalAid" id="medicalAid-yes" inline />
                <Form.Check type="radio" label="No" name="medicalAid" id="medicalAid-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalPractitionerName">
              <Form.Label>Name of the Medical Practitioner:</Form.Label>
              <Form.Control type="text" placeholder="Medical Practitioner Name" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalAidSchemeName">
              <Form.Label>Medical Aid Scheme Name:</Form.Label>
              <Form.Control type="text" placeholder="Medical Aid Scheme Name" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalAidNumber">
              <Form.Label>Medical Aid Number:</Form.Label>
              <Form.Control type="text" placeholder="Medical Aid Number" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="principalMember">
              <Form.Label>Principal Member:</Form.Label>
              <Form.Control type="text" placeholder="Principal Member" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="psychologicalDistress">
              <Form.Label>Is or has the member suffered from or received treatment for any psychological/emotional distress?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="psychologicalDistress" id="psychologicalDistress-yes" inline />
                <Form.Check type="radio" label="No" name="psychologicalDistress" id="psychologicalDistress-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicalConditions">
              <Form.Label>Do you live with any medical conditions or any allergies we should be aware of? Please indicate:</Form.Label>
              <Form.Control type="text" placeholder="Medical Conditions/Allergies" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicationForCondition">
              <Form.Label>If you answered yes above, are you taking any medication for your medical condition that we should be aware of?</Form.Label>
              <Form.Control type="text" placeholder="Medication for Condition" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="chronicMedication">
              <Form.Label>Do you take any chronic medication? If yes, please indicate below:</Form.Label>
               <Form.Control type="text" placeholder="Chronic Medication" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="learningDisability">
              <Form.Label>Do you have a learning disability? If yes, please indicate below:</Form.Label>
              <Form.Control type="text" placeholder="Learning Disability" />
            </Form.Group>
          </Col>
        </Row>
         <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="sexualHealthServices">
              <Form.Label>Have you ever received Sexual & Reproductive Health & Rights services at any healthcare center? If yes, please provide the name of the facility below:</Form.Label>
              <Form.Control type="text" placeholder="Sexual Health Services Facility" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="sgbvSurvivor">
              <Form.Label>Are you a survivor of Sexual Gender-Based Violence (SGBV)?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="sgbvSurvivor" id="sgbvSurvivor-yes" inline />
                <Form.Check type="radio" label="No" name="sgbvSurvivor" id="sgbvSurvivor-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MedicalHistory;
