import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const FamilyInformation = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Family Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="primaryLanguage">
              <Form.Label>What is the primary language spoken at home?</Form.Label>
              <Form.Control type="text" placeholder="Primary Language" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="householdSize">
              <Form.Label>How many people are currently living in your household, including yourself?</Form.Label>
              <Form.Control type="number" placeholder="Number of People" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="familyStructure">
              <Form.Label>Which one of the below family structures best applies to your family?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Nuclear Family (Two parents and children)" id="familyStructure-nuclear" />
                <Form.Check type="checkbox" label="Blended/Step Family (An adult(s) raising a child(ren) from a previous relationship(s))" id="familyStructure-blended" />
                <Form.Check type="checkbox" label="Single Parent Family (A parent who lives with child(ren) and no husband, wife, or partner)" id="familyStructure-singleParent" />
                <Form.Check type="checkbox" label="Mother as a single parent" id="familyStructure-mother" />
                <Form.Check type="checkbox" label="Father as a single parent" id="familyStructure-father" />
                <Form.Check type="checkbox" label="Extended Family (Living with relatives who are not part of the nuclear family)" id="familyStructure-extended" />
                <Form.Check type="checkbox" label="Foster Family (a child temporarily living with someone that they are not related to)" id="familyStructure-foster" />
                <Form.Check type="checkbox" label="Grandparents (a child(ren) living with their grandparents or elderly family member)" id="familyStructure-grandparents" />
                <Form.Check type="checkbox" label="Child Headed Family (a child(ren) living with no parent or adult)" id="familyStructure-childHeaded" />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="otherFamilyStructure">
              <Form.Label>Please specify any other family structure that is not listed above</Form.Label>
              <Form.Control type="text" placeholder="Other Family Structure" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="dependants">
              <Form.Label>How many children/dependants do you have?</Form.Label>
              <Form.Control type="number" placeholder="Number of Dependants" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="mealsPerDay">
              <Form.Label>On average, how many meals a day are prepared in your household?</Form.Label>
              <Form.Control type="number" placeholder="Meals per Day" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="religion">
              <Form.Label>What is your religion?</Form.Label>
              <Form.Control type="text" placeholder="Religion" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="convictedOfCrime">
              <Form.Label>Have you ever been convicted of a crime?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="convictedOfCrime" id="convictedOfCrime-yes" inline />
                <Form.Check type="radio" label="No" name="convictedOfCrime" id="convictedOfCrime-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="ongoingCriminalCase">
              <Form.Label>Do you have an ongoing criminal case, or have you been convicted of a criminal offence?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="ongoingCriminalCase" id="ongoingCriminalCase-yes" inline />
                <Form.Check type="radio" label="No" name="ongoingCriminalCase" id="ongoingCriminalCase-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FamilyInformation;
