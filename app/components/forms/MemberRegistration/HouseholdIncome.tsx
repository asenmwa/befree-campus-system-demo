import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const HouseholdIncome = () => {
  const [totalHouseholdMembers, setTotalHouseholdMembers] = useState('');
  const [numberOfDependents, setNumberOfDependents] = useState('');
  const [totalCombinedMonthlyIncome, setTotalCombinedMonthlyIncome] = useState('');
  const [incomeSources, setIncomeSources] = useState('');
  const [receivesSocialGrant, setReceivesSocialGrant] = useState('');
  const [grantTypes, setGrantTypes] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setTotalHouseholdMembers(parsedData.totalHouseholdMembers || '');
      setNumberOfDependents(parsedData.numberOfDependents || '');
      setTotalCombinedMonthlyIncome(parsedData.totalCombinedMonthlyIncome || '');
      setIncomeSources(parsedData.incomeSources || '');
      setReceivesSocialGrant(parsedData.receivesSocialGrant || '');
      setGrantTypes(parsedData.grantTypes || '');
    } else {
      setTotalHouseholdMembers('');
      setNumberOfDependents('');
      setTotalCombinedMonthlyIncome('');
      setIncomeSources('');
      setReceivesSocialGrant('');
      setGrantTypes('');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'totalHouseholdMembers':
        setTotalHouseholdMembers(value);
        break;
      case 'numberOfDependents':
        setNumberOfDependents(value);
        break;
      case 'totalCombinedMonthlyIncome':
        setTotalCombinedMonthlyIncome(value);
        break;
      case 'incomeSources':
        setIncomeSources(value);
        break;
      case 'grantTypes':
        setGrantTypes(value);
        break;
      default:
        break;
    }
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleRadioChange = (name: string, value: string) => {
    setReceivesSocialGrant(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Household Income Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="totalHouseholdMembers">
              <Form.Label>Total Number of Household Members</Form.Label>
              <Form.Control type="number" placeholder="Total Members" name="totalHouseholdMembers" value={totalHouseholdMembers} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="numberOfDependents">
              <Form.Label>Number of Dependents</Form.Label>
              <Form.Control type="number" placeholder="Number of Dependents" name="numberOfDependents" value={numberOfDependents} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="totalCombinedMonthlyIncome">
              <Form.Label>Total Combined Monthly Income (ZAR)</Form.Label>
              <Form.Control type="number" placeholder="Monthly Income" name="totalCombinedMonthlyIncome" value={totalCombinedMonthlyIncome} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="incomeSources">
              <Form.Label>Major Sources of Income</Form.Label>
              <Form.Control type="text" placeholder="Income Sources" name="incomeSources" value={incomeSources} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="receivesSocialGrant">
              <Form.Label>Does any member of the household receive a Social Grant?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="receivesSocialGrant" id="receivesSocialGrant-yes" value="yes" checked={receivesSocialGrant === 'yes'} onChange={() => handleRadioChange('receivesSocialGrant', 'yes')} inline />
                <Form.Check type="radio" label="No" name="receivesSocialGrant" id="receivesSocialGrant-no" value="no" checked={receivesSocialGrant === 'no'} onChange={() => handleRadioChange('receivesSocialGrant', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="grantTypes">
              <Form.Label>If yes, please specify the type(s) of grant received:</Form.Label>
              <Form.Control type="text" placeholder="Grant Types" name="grantTypes" value={grantTypes} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default HouseholdIncome;
