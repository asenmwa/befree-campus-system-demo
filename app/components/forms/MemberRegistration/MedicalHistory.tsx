import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const MedicalHistory = () => {
  const [medicalAid, setMedicalAid] = useState('');
  const [medicalPractitionerName, setMedicalPractitionerName] = useState('');
  const [medicalAidSchemeName, setMedicalAidSchemeName] = useState('');
  const [medicalAidNumber, setMedicalAidNumber] = useState('');
  const [principalMember, setPrincipalMember] = useState('');
  const [psychologicalDistress, setPsychologicalDistress] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [medicationForCondition, setMedicationForCondition] = useState('');
  const [chronicMedication, setChronicMedication] = useState('');
  const [learningDisability, setLearningDisability] = useState('');
  const [sexualHealthServices, setSexualHealthServices] = useState('');
  const [sgbvSurvivor, setSgbvSurvivor] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setMedicalAid(parsedData.medicalAid || '');
      setMedicalPractitionerName(parsedData.medicalPractitionerName || '');
      setMedicalAidSchemeName(parsedData.medicalAidSchemeName || '');
      setMedicalAidNumber(parsedData.medicalAidNumber || '');
      setPrincipalMember(parsedData.principalMember || '');
      setPsychologicalDistress(parsedData.psychologicalDistress || '');
      setMedicalConditions(parsedData.medicalConditions || '');
      setMedicationForCondition(parsedData.medicationForCondition || '');
      setChronicMedication(parsedData.chronicMedication || '');
      setLearningDisability(parsedData.learningDisability || '');
      setSexualHealthServices(parsedData.sexualHealthServices || '');
      setSgbvSurvivor(parsedData.sgbvSurvivor || '');
    } else {
      setMedicalAid('');
      setMedicalPractitionerName('');
      setMedicalAidSchemeName('');
      setMedicalAidNumber('');
      setPrincipalMember('');
      setPsychologicalDistress('');
      setMedicalConditions('');
      setMedicationForCondition('');
      setChronicMedication('');
      setLearningDisability('');
      setSexualHealthServices('');
      setSgbvSurvivor('');
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'medicalPractitionerName':
        setMedicalPractitionerName(value);
        break;
      case 'medicalAidSchemeName':
        setMedicalAidSchemeName(value);
        break;
      case 'medicalAidNumber':
        setMedicalAidNumber(value);
        break;
      case 'principalMember':
        setPrincipalMember(value);
        break;
      case 'medicalConditions':
        setMedicalConditions(value);
        break;
      case 'medicationForCondition':
        setMedicationForCondition(value);
        break;
      case 'chronicMedication':
        setChronicMedication(value);
        break;
      case 'learningDisability':
        setLearningDisability(value);
        break;
      case 'sexualHealthServices':
        setSexualHealthServices(value);
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
    setMedicalAid(value);
    setPsychologicalDistress(value);
    setSgbvSurvivor(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Medical History</h4>
         <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicalAid">
              <Form.Label>Do you have medical aid?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="medicalAid" id="medicalAid-yes" value="yes" checked={medicalAid === 'yes'} onChange={() => handleRadioChange('medicalAid', 'yes')} inline />
                <Form.Check type="radio" label="No" name="medicalAid" id="medicalAid-no" value="no" checked={medicalAid === 'no'} onChange={() => handleRadioChange('medicalAid', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalPractitionerName">
              <Form.Label>Name of the Medical Practitioner:</Form.Label>
              <Form.Control type="text" placeholder="Medical Practitioner Name" name="medicalPractitionerName" value={medicalPractitionerName} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalAidSchemeName">
              <Form.Label>Medical Aid Scheme Name:</Form.Label>
              <Form.Control type="text" placeholder="Medical Aid Scheme Name" name="medicalAidSchemeName" value={medicalAidSchemeName} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="medicalAidNumber">
              <Form.Label>Medical Aid Number:</Form.Label>
              <Form.Control type="text" placeholder="Medical Aid Number" name="medicalAidNumber" value={medicalAidNumber} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="principalMember">
              <Form.Label>Principal Member:</Form.Label>
              <Form.Control type="text" placeholder="Principal Member" name="principalMember" value={principalMember} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="psychologicalDistress">
              <Form.Label>Is or has the member suffered from or received treatment for any psychological/emotional distress?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="psychologicalDistress" id="psychologicalDistress-yes" value="yes" checked={psychologicalDistress === 'yes'} onChange={() => handleRadioChange('psychologicalDistress', 'yes')} inline />
                <Form.Check type="radio" label="No" name="psychologicalDistress" id="psychologicalDistress-no" value="no" checked={psychologicalDistress === 'no'} onChange={() => handleRadioChange('psychologicalDistress', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicalConditions">
              <Form.Label>Do you live with any medical conditions or any allergies we should be aware of? Please indicate:</Form.Label>
              <Form.Control type="text" placeholder="Medical Conditions/Allergies" name="medicalConditions" value={medicalConditions} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="medicationForCondition">
              <Form.Label>If you answered yes above, are you taking any medication for your medical condition that we should be aware of?</Form.Label>
              <Form.Control type="text" placeholder="Medication for Condition" name="medicationForCondition" value={medicationForCondition} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="chronicMedication">
              <Form.Label>Do you take any chronic medication? If yes, please indicate below:</Form.Label>
               <Form.Control type="text" placeholder="Chronic Medication" name="chronicMedication" value={chronicMedication} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="learningDisability">
              <Form.Label>Do you have a learning disability? If yes, please indicate below:</Form.Label>
              <Form.Control type="text" placeholder="Learning Disability" name="learningDisability" value={learningDisability} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
         <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="sexualHealthServices">
              <Form.Label>Have you ever received Sexual & Reproductive Health & Rights services at any healthcare center? If yes, please provide the name of the facility below:</Form.Label>
              <Form.Control type="text" placeholder="Sexual Health Services Facility" name="sexualHealthServices" value={sexualHealthServices} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="sgbvSurvivor">
              <Form.Label>Are you a survivor of Sexual Gender-Based Violence (SGBV)?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="sgbvSurvivor" id="sgbvSurvivor-yes" value="yes" checked={sgbvSurvivor === 'yes'} onChange={() => handleRadioChange('sgbvSurvivor', 'yes')} inline />
                <Form.Check type="radio" label="No" name="sgbvSurvivor" id="sgbvSurvivor-no" value="no" checked={sgbvSurvivor === 'no'} onChange={() => handleRadioChange('sgbvSurvivor', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MedicalHistory;
