import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const EmergencyContact = () => {
  const [emergencyContactTitle, setEmergencyContactTitle] = useState('');
  const [emergencyContactLastName, setEmergencyContactLastName] = useState('');
  const [emergencyContactFirstName, setEmergencyContactFirstName] = useState('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [emergencyContactAlternativePhone, setEmergencyContactAlternativePhone] = useState('');
  const [emergencyContactAddress, setEmergencyContactAddress] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setEmergencyContactTitle(parsedData.emergencyContactTitle || '');
      setEmergencyContactLastName(parsedData.emergencyContactLastName || '');
      setEmergencyContactFirstName(parsedData.emergencyContactFirstName || '');
      setEmergencyContactRelationship(parsedData.emergencyContactRelationship || '');
      setEmergencyContactPhone(parsedData.emergencyContactPhone || '');
      setEmergencyContactAlternativePhone(parsedData.emergencyContactAlternativePhone || '');
      setEmergencyContactAddress(parsedData.emergencyContactAddress || '');
    } else {
      setEmergencyContactTitle('');
      setEmergencyContactLastName('');
      setEmergencyContactFirstName('');
      setEmergencyContactRelationship('');
      setEmergencyContactPhone('');
      setEmergencyContactAlternativePhone('');
      setEmergencyContactAddress('');
    }
  }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'emergencyContactTitle':
        setEmergencyContactTitle(value);
        break;
      case 'emergencyContactLastName':
        setEmergencyContactLastName(value);
        break;
      case 'emergencyContactFirstName':
        setEmergencyContactFirstName(value);
        break;
      case 'emergencyContactRelationship':
        setEmergencyContactRelationship(value);
        break;
      case 'emergencyContactPhone':
        setEmergencyContactPhone(value);
        break;
      case 'emergencyContactAlternativePhone':
        setEmergencyContactAlternativePhone(value);
        break;
      case 'emergencyContactAddress':
        setEmergencyContactAddress(value);
        break;
      default:
        break;
    }
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <fieldset>
      <legend>Emergency Contact Information</legend>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name="emergencyContactTitle" value={emergencyContactTitle} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactLastName">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Surname" name="emergencyContactLastName" value={emergencyContactLastName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactFirstName">
            <Form.Label>Names</Form.Label>
            <Form.Control type="text" placeholder="Names" name="emergencyContactFirstName" value={emergencyContactFirstName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactRelationship">
            <Form.Label>Relationship to Member</Form.Label>
            <Form.Control type="text" placeholder="Relationship" name="emergencyContactRelationship" value={emergencyContactRelationship} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactPhone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" name="emergencyContactPhone" value={emergencyContactPhone} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactAlternativePhone">
            <Form.Label>Alternative Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Alternative Contact Number" name="emergencyContactAlternativePhone" value={emergencyContactAlternativePhone} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="emergencyContactAddress">
            <Form.Label>Residential Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="emergencyContactAddress" value={emergencyContactAddress} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default EmergencyContact;
