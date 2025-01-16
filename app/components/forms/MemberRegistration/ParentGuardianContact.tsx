import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from '@themesberg/react-bootstrap';

const ParentGuardianContact = () => {
  const [parentGuardianTitle, setParentGuardianTitle] = useState('');
  const [parentGuardianLastName, setParentGuardianLastName] = useState('');
  const [parentGuardianFirstName, setParentGuardianFirstName] = useState('');
  const [parentGuardianDateOfBirth, setParentGuardianDateOfBirth] = useState('');
  const [parentGuardianGender, setParentGuardianGender] = useState('');
  const [parentGuardianEmail, setParentGuardianEmail] = useState('');
  const [parentGuardianPhone, setParentGuardianPhone] = useState('');
  const [parentGuardianAddress, setParentGuardianAddress] = useState('');
  const [parentGuardianCity, setParentGuardianCity] = useState('');
  const [parentGuardianState, setParentGuardianState] = useState('');
  const [parentGuardianZipCode, setParentGuardianZipCode] = useState('');
  const [parentGuardianSocialGrant, setParentGuardianSocialGrant] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setParentGuardianTitle(parsedData.parentGuardianTitle || '');
      setParentGuardianLastName(parsedData.parentGuardianLastName || '');
      setParentGuardianFirstName(parsedData.parentGuardianFirstName || '');
      setParentGuardianDateOfBirth(parsedData.parentGuardianDateOfBirth || '');
      setParentGuardianGender(parsedData.parentGuardianGender || '');
      setParentGuardianEmail(parsedData.parentGuardianEmail || '');
      setParentGuardianPhone(parsedData.parentGuardianPhone || '');
      setParentGuardianAddress(parsedData.parentGuardianAddress || '');
      setParentGuardianCity(parsedData.parentGuardianCity || '');
      setParentGuardianState(parsedData.parentGuardianState || '');
      setParentGuardianZipCode(parsedData.parentGuardianZipCode || '');
      setParentGuardianSocialGrant(parsedData.parentGuardianSocialGrant || '');
    } else {
      setParentGuardianTitle('');
      setParentGuardianLastName('');
      setParentGuardianFirstName('');
      setParentGuardianDateOfBirth('');
      setParentGuardianGender('');
      setParentGuardianEmail('');
      setParentGuardianPhone('');
      setParentGuardianAddress('');
      setParentGuardianCity('');
      setParentGuardianState('');
      setParentGuardianZipCode('');
      setParentGuardianSocialGrant('');
    }
  }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'parentGuardianTitle':
        setParentGuardianTitle(value);
        break;
      case 'parentGuardianLastName':
        setParentGuardianLastName(value);
        break;
      case 'parentGuardianFirstName':
        setParentGuardianFirstName(value);
        break;
      case 'parentGuardianDateOfBirth':
        setParentGuardianDateOfBirth(value);
        break;
      case 'parentGuardianEmail':
        setParentGuardianEmail(value);
        break;
      case 'parentGuardianPhone':
        setParentGuardianPhone(value);
        break;
      case 'parentGuardianAddress':
        setParentGuardianAddress(value);
        break;
      case 'parentGuardianCity':
        setParentGuardianCity(value);
        break;
      case 'parentGuardianState':
        setParentGuardianState(value);
        break;
      case 'parentGuardianZipCode':
        setParentGuardianZipCode(value);
        break;
      case 'parentGuardianSocialGrant':
        setParentGuardianSocialGrant(value);
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
    setParentGuardianGender(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, parentGuardianGender: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <fieldset>
      <legend>Parent / Guardian Contact Information</legend>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianTitle" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Title</Form.Label>
            <Form.Control type="text" placeholder="Title" name="parentGuardianTitle" value={parentGuardianTitle} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianLastName" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Surname</Form.Label>
            <Form.Control type="text" placeholder="Surname" name="parentGuardianLastName" value={parentGuardianLastName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianFirstName" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Names</Form.Label>
            <Form.Control type="text" placeholder="Names" name="parentGuardianFirstName" value={parentGuardianFirstName} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianDateOfBirth" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</Form.Label>
            <Form.Control type="date" name="parentGuardianDateOfBirth" value={parentGuardianDateOfBirth} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianGender" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Gender</Form.Label>
            <div>
              <Form.Check type="radio" label="Male" name="parentGuardianGender" id="parentGuardianGender-male" value="male" checked={parentGuardianGender === 'male'} onChange={() => handleGenderChange('male')} inline />
              <Form.Check type="radio" label="Female" name="parentGuardianGender" id="parentGuardianGender-female" value="female" checked={parentGuardianGender === 'female'} onChange={() => handleGenderChange('female')} inline />
            </div>
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianEmail" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Email</Form.Label>
            <Form.Control type="email" placeholder="Email Address" name="parentGuardianEmail" value={parentGuardianEmail} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianPhone" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Contact Number" name="parentGuardianPhone" value={parentGuardianPhone} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianAddress" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Residential Address</Form.Label>
            <Form.Control type="text" placeholder="Residential Address" name="parentGuardianAddress" value={parentGuardianAddress} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianCity" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">City</Form.Label>
            <Form.Control type="text" placeholder="Town/City of Residence" name="parentGuardianCity" value={parentGuardianCity} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianState" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">State</Form.Label>
            <Form.Control type="text" placeholder="State" name="parentGuardianState" value={parentGuardianState} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-3">
          <Form.Group id="parentGuardianZipCode" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Zip Code</Form.Label>
            <Form.Control type="text" placeholder="Zip Code" name="parentGuardianZipCode" value={parentGuardianZipCode} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
        <Col md={12} className="mb-3">
          <Form.Group id="parentGuardianSocialGrant" className="mb-4">
            <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Does the child, parent and or guardian receive a social grant of any kind? If yes, please specify the name of the grant below:</Form.Label>
            <Form.Control type="text" placeholder="Social Grant Name" name="parentGuardianSocialGrant" value={parentGuardianSocialGrant} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Group>
        </Col>
      </Row>
    </fieldset>
  );
};

export default ParentGuardianContact;
