import React from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const HouseholdIncome = () => {
  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Household Income Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="totalHouseholdMembers">
              <Form.Label>Total Number of Household Members</Form.Label>
              <Form.Control type="number" placeholder="Total Members" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="numberOfDependents">
              <Form.Label>Number of Dependents</Form.Label>
              <Form.Control type="number" placeholder="Number of Dependents" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="totalCombinedMonthlyIncome">
              <Form.Label>Total Combined Monthly Income (ZAR)</Form.Label>
              <Form.Control type="number" placeholder="Monthly Income" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="incomeSources">
              <Form.Label>Major Sources of Income</Form.Label>
              <Form.Control type="text" placeholder="Income Sources" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="receivesSocialGrant">
              <Form.Label>Does any member of the household receive a Social Grant?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="receivesSocialGrant" id="receivesSocialGrant-yes" inline />
                <Form.Check type="radio" label="No" name="receivesSocialGrant" id="receivesSocialGrant-no" inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="grantTypes">
              <Form.Label>If yes, please specify the type(s) of grant received:</Form.Label>
              <Form.Control type="text" placeholder="Grant Types" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HouseholdIncome;
