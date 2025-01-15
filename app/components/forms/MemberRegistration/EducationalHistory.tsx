import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const EducationalHistory = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Educational History</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="enrolledInInstitution">
              <Form.Label>Are you currently enrolled in an educational institution?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="enrolledInInstitution" id="enrolledInInstitution-yes" inline />
                <Form.Check type="radio" label="No" name="enrolledInInstitution" id="enrolledInInstitution-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="educationalInstitutionName">
              <Form.Label>Name of your Educational Institution:</Form.Label>
              <Form.Control type="text" placeholder="Educational Institution Name" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="currentGrade">
              <Form.Label>Current Grade:</Form.Label>
              <Form.Control type="text" placeholder="Current Grade" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="currentlyStudying">
              <Form.Label>What are you currently studying for:</Form.Label>
              <Form.Control type="text" placeholder="Currently Studying" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="highestEducationLevel">
              <Form.Label>What is the highest level of education you have completed?</Form.Label>
              <Form.Control type="text" placeholder="Highest Education Level" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="suspendedExpelled">
              <Form.Label>Have you ever been suspended/expelled from school?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="suspendedExpelled" id="suspendedExpelled-yes" inline />
                <Form.Check type="radio" label="No" name="suspendedExpelled" id="suspendedExpelled-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
           <Col md={6} className="mb-3">
            <Form.Group id="schoolName">
              <Form.Label>Name of School</Form.Label>
              <Form.Control type="text" placeholder="School Name" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="suspensionReason">
              <Form.Label>Reason for Suspension/Expulsion:</Form.Label>
              <Form.Control type="text" placeholder="Reason for Suspension/Expulsion" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="educationCostPayer">
              <Form.Label>Who pays the cost of your education?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Parent(s)/Guardian(s)" id="educationCostPayer-parents" />
                <Form.Check type="checkbox" label="Bursary/Scholarship" id="educationCostPayer-bursary" />
                <Form.Check type="checkbox" label="Namibia Student Financial Assistance Fund (NSFAF)" id="educationCostPayer-nsfaf" />
                <Form.Check type="checkbox" label="Student Loan" id="educationCostPayer-studentLoan" />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="extracurricularActivities">
              <Form.Label>Do you participate in any extracurricular activities outside of your school? If yes, please indicate</Form.Label>
              <Form.Control type="text" placeholder="Extracurricular Activities" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="talentsSkills">
              <Form.Label>Do you have any talents or special skills?</Form.Label>
              <Form.Control type="text" placeholder="Talents or Special Skills" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EducationalHistory;
