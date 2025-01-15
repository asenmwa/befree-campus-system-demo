import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const EducationalHistory = () => {
  const [enrolledInInstitution, setEnrolledInInstitution] = useState('');
  const [educationalInstitutionName, setEducationalInstitutionName] = useState('');
  const [currentGrade, setCurrentGrade] = useState('');
  const [currentlyStudying, setCurrentlyStudying] = useState('');
  const [highestEducationLevel, setHighestEducationLevel] = useState('');
  const [suspendedExpelled, setSuspendedExpelled] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [suspensionReason, setSuspensionReason] = useState('');
  const [educationCostPayer, setEducationCostPayer] = useState({
    parents: false,
    bursary: false,
    nsfaf: false,
    studentLoan: false,
  });
  const [extracurricularActivities, setExtracurricularActivities] = useState('');
  const [talentsSkills, setTalentsSkills] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setEnrolledInInstitution(parsedData.enrolledInInstitution || '');
      setEducationalInstitutionName(parsedData.educationalInstitutionName || '');
      setCurrentGrade(parsedData.currentGrade || '');
      setCurrentlyStudying(parsedData.currentlyStudying || '');
      setHighestEducationLevel(parsedData.highestEducationLevel || '');
      setSuspendedExpelled(parsedData.suspendedExpelled || '');
      setSchoolName(parsedData.schoolName || '');
      setSuspensionReason(parsedData.suspensionReason || '');
      setEducationCostPayer(parsedData.educationCostPayer || {
        parents: false,
        bursary: false,
        nsfaf: false,
        studentLoan: false,
      });
      setExtracurricularActivities(parsedData.extracurricularActivities || '');
      setTalentsSkills(parsedData.talentsSkills || '');
    } else {
      setEnrolledInInstitution('');
      setEducationalInstitutionName('');
      setCurrentGrade('');
      setCurrentlyStudying('');
      setHighestEducationLevel('');
      setSuspendedExpelled('');
      setSchoolName('');
      setSuspensionReason('');
      setEducationCostPayer({
        parents: false,
        bursary: false,
        nsfaf: false,
        studentLoan: false,
      });
      setExtracurricularActivities('');
      setTalentsSkills('');
    }
  }, []);

  const handleEducationCostPayerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEducationCostPayer({ ...educationCostPayer, [e.target.id.replace('educationCostPayer-', '')]: e.target.checked });
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, educationCostPayer: { ...educationCostPayer, [e.target.id.replace('educationCostPayer-', '')]: e.target.checked } };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'educationalInstitutionName':
        setEducationalInstitutionName(value);
        break;
      case 'currentGrade':
        setCurrentGrade(value);
        break;
      case 'currentlyStudying':
        setCurrentlyStudying(value);
        break;
      case 'highestEducationLevel':
        setHighestEducationLevel(value);
        break;
      case 'schoolName':
        setSchoolName(value);
        break;
      case 'suspensionReason':
        setSuspensionReason(value);
        break;
      case 'extracurricularActivities':
        setExtracurricularActivities(value);
        break;
      case 'talentsSkills':
        setTalentsSkills(value);
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
    setSuspendedExpelled(value);
    setEnrolledInInstitution(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">Educational History</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="enrolledInInstitution">
              <Form.Label>Are you currently enrolled in an educational institution?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="enrolledInInstitution" id="enrolledInInstitution-yes" value="yes" checked={enrolledInInstitution === 'yes'} onChange={() => handleRadioChange('enrolledInInstitution', 'yes')} inline />
                <Form.Check type="radio" label="No" name="enrolledInInstitution" id="enrolledInInstitution-no" value="no" checked={enrolledInInstitution === 'no'} onChange={() => handleRadioChange('enrolledInInstitution', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="educationalInstitutionName">
              <Form.Label>Name of your Educational Institution:</Form.Label>
              <Form.Control type="text" placeholder="Educational Institution Name" name="educationalInstitutionName" value={educationalInstitutionName} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="currentGrade">
              <Form.Label>Current Grade:</Form.Label>
              <Form.Control type="text" placeholder="Current Grade" name="currentGrade" value={currentGrade} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group id="currentlyStudying">
              <Form.Label>What are you currently studying for:</Form.Label>
              <Form.Control type="text" placeholder="Currently Studying" name="currentlyStudying" value={currentlyStudying} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="highestEducationLevel">
              <Form.Label>What is the highest level of education you have completed?</Form.Label>
              <Form.Control type="text" placeholder="Highest Education Level" name="highestEducationLevel" value={highestEducationLevel} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="suspendedExpelled">
              <Form.Label>Have you ever been suspended/expelled from school?</Form.Label>
              <div>
                <Form.Check type="radio" label="Yes" name="suspendedExpelled" id="suspendedExpelled-yes" value="yes" checked={suspendedExpelled === 'yes'} onChange={() => handleRadioChange('suspendedExpelled', 'yes')} inline />
                <Form.Check type="radio" label="No" name="suspendedExpelled" id="suspendedExpelled-no" value="no" checked={suspendedExpelled === 'no'} onChange={() => handleRadioChange('suspendedExpelled', 'no')} inline />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
           <Col md={6} className="mb-3">
            <Form.Group id="schoolName">
              <Form.Label>Name of School</Form.Label>
              <Form.Control type="text" placeholder="School Name" name="schoolName" value={schoolName} onChange={handleInputChange} />
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group id="suspensionReason">
              <Form.Label>Reason for Suspension/Expulsion:</Form.Label>
              <Form.Control type="text" placeholder="Reason for Suspension/Expulsion" name="suspensionReason" value={suspensionReason} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="educationCostPayer">
              <Form.Label>Who pays the cost of your education?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Parent(s)/Guardian(s)" id="educationCostPayer-parents" checked={educationCostPayer.parents} onChange={handleEducationCostPayerChange} />
                <Form.Check type="checkbox" label="Bursary/Scholarship" id="educationCostPayer-bursary" checked={educationCostPayer.bursary} onChange={handleEducationCostPayerChange} />
                <Form.Check type="checkbox" label="Namibia Student Financial Assistance Fund (NSFAF)" id="educationCostPayer-nsfaf" checked={educationCostPayer.nsfaf} onChange={handleEducationCostPayerChange} />
                <Form.Check type="checkbox" label="Student Loan" id="educationCostPayer-studentLoan" checked={educationCostPayer.studentLoan} onChange={handleEducationCostPayerChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="extracurricularActivities">
              <Form.Label>Do you participate in any extracurricular activities outside of your school? If yes, please indicate</Form.Label>
              <Form.Control type="text" placeholder="Extracurricular Activities" name="extracurricularActivities" value={extracurricularActivities} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="talentsSkills">
              <Form.Label>Do you have any talents or special skills?</Form.Label>
              <Form.Control type="text" placeholder="Talents or Special Skills" name="talentsSkills" value={talentsSkills} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EducationalHistory;
