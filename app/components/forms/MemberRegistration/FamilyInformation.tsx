import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const FamilyInformation = () => {
  const [primaryLanguage, setPrimaryLanguage] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [familyStructure, setFamilyStructure] = useState({
    nuclear: false,
    blended: false,
    singleParent: false,
    mother: false,
    father: false,
    extended: false,
    foster: false,
    grandparents: false,
    childHeaded: false,
  });
  const [otherFamilyStructure, setOtherFamilyStructure] = useState('');
  const [dependants, setDependants] = useState('');
  const [mealsPerDay, setMealsPerDay] = useState('');
  const [religion, setReligion] = useState('');
  const [convictedOfCrime, setConvictedOfCrime] = useState('');
  const [ongoingCriminalCase, setOngoingCriminalCase] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setPrimaryLanguage(parsedData.primaryLanguage || '');
      setHouseholdSize(parsedData.householdSize || '');
      setFamilyStructure(parsedData.familyStructure || {
        nuclear: false,
        blended: false,
        singleParent: false,
        mother: false,
        father: false,
        extended: false,
        foster: false,
        grandparents: false,
        childHeaded: false,
      });
      setOtherFamilyStructure(parsedData.otherFamilyStructure || '');
      setDependants(parsedData.dependants || '');
      setMealsPerDay(parsedData.mealsPerDay || '');
      setReligion(parsedData.religion || '');
      setConvictedOfCrime(parsedData.convictedOfCrime || '');
      setOngoingCriminalCase(parsedData.ongoingCriminalCase || '');
    } else {
      setPrimaryLanguage('');
      setHouseholdSize('');
      setFamilyStructure({
        nuclear: false,
        blended: false,
        singleParent: false,
        mother: false,
        father: false,
        extended: false,
        foster: false,
        grandparents: false,
        childHeaded: false,
      });
      setOtherFamilyStructure('');
      setDependants('');
      setMealsPerDay('');
      setReligion('');
      setConvictedOfCrime('');
      setOngoingCriminalCase('');
    }
  }, []);

  const handleFamilyStructureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFamilyStructure({ ...familyStructure, [e.target.id.replace('familyStructure-', '')]: e.target.checked });
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, familyStructure: { ...familyStructure, [e.target.id.replace('familyStructure-', '')]: e.target.checked } };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'primaryLanguage':
        setPrimaryLanguage(value);
        break;
      case 'householdSize':
        setHouseholdSize(value);
        break;
      case 'otherFamilyStructure':
        setOtherFamilyStructure(value);
        break;
      case 'dependants':
        setDependants(value);
        break;
      case 'mealsPerDay':
        setMealsPerDay(value);
        break;
      case 'religion':
        setReligion(value);
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
    setConvictedOfCrime(value);
    setOngoingCriminalCase(value);
     const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Family Information</h4>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="primaryLanguage" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">What is the primary language spoken at home?</Form.Label>
              <Form.Control type="text" placeholder="Primary Language" name="primaryLanguage" value={primaryLanguage} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="householdSize" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">How many people are currently living in your household, including yourself?</Form.Label>
              <Form.Control type="number" placeholder="Number of People" name="householdSize" value={householdSize} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="familyStructure" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Which one of the below family structures best applies to your family?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Nuclear Family (Two parents and children)" id="familyStructure-nuclear" checked={familyStructure.nuclear} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Blended/Step Family (An adult(s) raising a child(ren) from a previous relationship(s))" id="familyStructure-blended" checked={familyStructure.blended} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Single Parent Family (A parent who lives with child(ren) and no husband, wife, or partner)" id="familyStructure-singleParent" checked={familyStructure.singleParent} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Mother as a single parent" id="familyStructure-mother" checked={familyStructure.mother} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Father as a single parent" id="familyStructure-father" checked={familyStructure.father} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Extended Family (Living with relatives who are not part of the nuclear family)" id="familyStructure-extended" checked={familyStructure.extended} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Foster Family (a child temporarily living with someone that they are not related to)" id="familyStructure-foster" checked={familyStructure.foster} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Grandparents (a child(ren) living with their grandparents or elderly family member)" id="familyStructure-grandparents" checked={familyStructure.grandparents} onChange={handleFamilyStructureChange} />
                <Form.Check type="checkbox" label="Child Headed Family (a child(ren) living with no parent or adult)" id="familyStructure-childHeaded" checked={familyStructure.childHeaded} onChange={handleFamilyStructureChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="otherFamilyStructure" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Please specify any other family structure that is not listed above</Form.Label>
              <Form.Control type="text" placeholder="Other Family Structure" name="otherFamilyStructure" value={otherFamilyStructure} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="dependants" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">How many children/dependants do you have?</Form.Label>
              <Form.Control type="number" placeholder="Number of Dependants" name="dependants" value={dependants} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="mealsPerDay" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">On average, how many meals a day are prepared in your household?</Form.Label>
              <Form.Control type="number" placeholder="Meals per Day" name="mealsPerDay" value={mealsPerDay} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="religion" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">What is your religion?</Form.Label>
              <Form.Control type="text" placeholder="Religion" name="religion" value={religion} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="convictedOfCrime" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Have you ever been convicted of a crime?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="convictedOfCrime" id="convictedOfCrime-yes" value="yes" checked={convictedOfCrime === 'yes'} onChange={() => handleRadioChange('convictedOfCrime', 'yes')} inline />
                <Form.Check type="radio" label="No" name="convictedOfCrime" id="convictedOfCrime-no" value="no" checked={convictedOfCrime === 'no'} onChange={() => handleRadioChange('convictedOfCrime', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="ongoingCriminalCase" className="mb-4">
              <Form.Label className="block text-gray-700 text-sm font-bold mb-2">Do you have an ongoing criminal case, or have you been convicted of a criminal offence?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="ongoingCriminalCase" id="ongoingCriminalCase-yes" value="yes" checked={ongoingCriminalCase === 'yes'} onChange={() => handleRadioChange('ongoingCriminalCase', 'yes')} inline />
                <Form.Check type="radio" label="No" name="ongoingCriminalCase" id="ongoingCriminalCase-no" value="no" checked={ongoingCriminalCase === 'no'} onChange={() => handleRadioChange('ongoingCriminalCase', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default FamilyInformation;
