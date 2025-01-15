import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const VolunteerismMentorship = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Volunteerism / Mentorship</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="volunteerActivities">
              <Form.Label>We encourage the active participation of the parent(s)/guardian(s) of our members. With prior arrangements, parents are welcome to sit in on the Life Skills classes. Should you be interested in volunteering at the #BeFree Youth Campus, kindly indicate which activity you would like to volunteer for?</Form.Label>
              <Form.Control type="text" placeholder="Volunteer Activities" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="heardAboutUs">
              <Form.Label>Where did you hear about the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Social Media (Instagram, Twitter, Facebook, TikTok etc.)" id="heardAboutUs-socialMedia" />
                <Form.Check type="checkbox" label="Newspaper" id="heardAboutUs-newspaper" />
                <Form.Check type="checkbox" label="Radio" id="heardAboutUs-radio" />
                <Form.Check type="checkbox" label="School" id="heardAboutUs-school" />
                <Form.Check type="checkbox" label="Word of Mouth" id="heardAboutUs-wordOfMouth" />
                <Form.Check type="checkbox" label="Other" id="heardAboutUs-other" />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="whyJoin">
              <Form.Label>Why would you like to join the #BeFree Youth Campus? Motivate your answer in detail, using the full five lines provided.</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Why Join?" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="technologyAccess">
              <Form.Label>What kind of technology do you have access to? (You can select more than one)</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Non-Smartphone" id="technologyAccess-nonSmartphone" />
                <Form.Check type="checkbox" label="Smartphone" id="technologyAccess-smartphone" />
                <Form.Check type="checkbox" label="Laptop/Computer" id="technologyAccess-laptop" />
                <Form.Check type="checkbox" label="Internet Access" id="technologyAccess-internet" />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="youthOrganization">
              <Form.Label>Do you belong to a youth organization? If yes, please provide the name and state the year in which you become a member.</Form.Label>
              <Form.Control type="text" placeholder="Youth Organization" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default VolunteerismMentorship;
