import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const ActivitiesServices = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">#BeFree Activities & Services</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="activitiesOfInterest">
              <Form.Label>Which activities/services would you be interested in at the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="#BeFree Cares Clinic (Sexual Health & Awareness Programme - SHAP)" id="activities-caresClinic" />
                <Form.Check type="checkbox" label="#BreakFree Anti-Violence Centre (Mental Health and Counselling)" id="activities-antiViolence" />
                <Form.Check type="checkbox" label="The Plug (Robotics, STEM Centre, After School Programming)" id="activities-thePlug" />
                <Form.Check type="checkbox" label="#BeFree Meals (Soup Kitchen)" id="activities-meals" />
                <Form.Check type="checkbox" label="Boys and Girls Club" id="activities-boysGirlsClub" />
                <Form.Check type="checkbox" label="Spiritual Guidance Counseling" id="activities-spiritualGuidance" />
                <Form.Check type="checkbox" label="Entrepreneurship Training and Development" id="activities-entrepreneurship" />
                <Form.Check type="checkbox" label="Library (Book Club and Reading)" id="activities-library" />
                <Form.Check type="checkbox" label="Podcast Radio" id="activities-podcast" />
                <Form.Check type="checkbox" label="Outdoor Gym (Self Defense, Boxing, Functional Training)" id="activities-outdoorGym" />
                <Form.Check type="checkbox" label="Volunteering" id="activities-volunteering" />
                <Form.Check type="checkbox" label="Wi-Fi" id="activities-wifi" />
                <Form.Check type="checkbox" label="Skills Development (Workshops, Training, Mentorship)" id="activities-skillsDevelopment" />
                <Form.Check type="checkbox" label="Life Skills Classes" id="activities-lifeSkills" />
                <Form.Check type="checkbox" label="After School Tutoring" id="activities-afterSchoolTutoring" />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="otherActivities">
              <Form.Label>Other than the list mentioned above, what other activities would you like to volunteer for?</Form.Label>
              <Form.Control type="text" placeholder="Other Activities" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ActivitiesServices;
