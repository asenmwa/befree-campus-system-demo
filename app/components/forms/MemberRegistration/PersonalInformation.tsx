import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rfid, setRfid] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');

 useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setFirstName(parsedData.firstName || '');
      setLastName(parsedData.lastName || '');
      setRfid(parsedData.rfid || '');
      setDateOfBirth(parsedData.dateOfBirth || '');
      setGender(parsedData.gender || '');
      setEmail(parsedData.email || '');
      setPhone(parsedData.phone || '');
      setAddress(parsedData.address || '');
      setCity(parsedData.city || '');
      setState(parsedData.state || '');
      setZipCode(parsedData.zipCode || '');
    }
     else {
      setFirstName('');
      setLastName('');
      setRfid('');
      setDateOfBirth('');
      setGender('');
      setEmail('');
      setPhone('');
      setAddress('');
      setCity('');
      setState('');
      setZipCode('');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'rfid':
        setRfid(value);
        break;
      case 'dateOfBirth':
        setDateOfBirth(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'state':
        setState(value);
        break;
      case 'zipCode':
        setZipCode(value);
        break;
      default:
        break;
    }
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, gender: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <fieldset>
      <legend>Personal Member Information</legend>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleInputChange} />
          </Form.Group>
        </Col>
         <Col md={4} className="mb-3">
          <Form.Group id="rfid">
            <Form.Label>RFID</Form.Label>
            <Form.Control type="text" placeholder="RFID" name="rfid" value={rfid} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="dateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleInputChange} />
          </Form.Group>
        </Col>
         <Col md={4} className="mb-3">
          <Form.Group id="gender">
            <Form.Label>Gender</Form.Label>
            <div>
              <Form.Check type="radio" label="Male" name="gender" id="gender-male" value="male" checked={gender === 'male'} onChange={() => handleGenderChange('male')} inline />
              <Form.Check type="radio" label="Female" name="gender" id="gender-female" value="female" checked={gender === 'female'} onChange={() => handleGenderChange('female')} inline />
            </div>
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address" name="email" value={email} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" name="phone" value={phone} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="address" value={address} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="city">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Town/City of Residence" name="city" value={city} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group id="state">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" name="state" value={state} onChange={handleInputChange} />
          </Form.Group>
        </Col>
        <Col md={4} className="mb-3">
          <Form.Group id="zipCode">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" name="zipCode" value={zipCode} onChange={handleInputChange} />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default PersonalInformation;
