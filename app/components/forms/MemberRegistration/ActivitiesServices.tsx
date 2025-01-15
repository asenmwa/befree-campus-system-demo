import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Card } from '@themesberg/react-bootstrap';

const ActivitiesServices = () => {
  const [activitiesOfInterest, setActivitiesOfInterest] = useState({
    caresClinic: false,
    antiViolence: false,
    thePlug: false,
    meals: false,
    boysGirlsClub: false,
    spiritualGuidance: false,
    entrepreneurship: false,
    library: false,
    podcast: false,
    outdoorGym: false,
    volunteering: false,
    wifi: false,
    skillsDevelopment: false,
    lifeSkills: false,
    afterSchoolTutoring: false,
  });
  const [otherActivities, setOtherActivities] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('memberData');
    if (storedData && storedData !== 'null' && storedData !== 'undefined') {
      const parsedData = JSON.parse(storedData);
      setActivitiesOfInterest(parsedData.activitiesOfInterest || {
        caresClinic: false,
        antiViolence: false,
        thePlug: false,
        meals: false,
        boysGirlsClub: false,
        spiritualGuidance: false,
        entrepreneurship: false,
        library: false,
        podcast: false,
        outdoorGym: false,
        volunteering: false,
        wifi: false,
        skillsDevelopment: false,
        lifeSkills: false,
        afterSchoolTutoring: false,
      });
      setOtherActivities(parsedData.otherActivities || '');
    } else {
      setActivitiesOfInterest({
        caresClinic: false,
        antiViolence: false,
        thePlug: false,
        meals: false,
        boysGirlsClub: false,
        spiritualGuidance: false,
        entrepreneurship: false,
        library: false,
        podcast: false,
        outdoorGym: false,
        volunteering: false,
        wifi: false,
        skillsDevelopment: false,
        lifeSkills: false,
        afterSchoolTutoring: false,
      });
      setOtherActivities('');
    }
  }, []);

  const handleActivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActivitiesOfInterest({ ...activitiesOfInterest, [e.target.id.replace('activities-', '')]: e.target.checked });
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, activitiesOfInterest: { ...activitiesOfInterest, [e.target.id.replace('activities-', '')]: e.target.checked } };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOtherActivities(value);
    const storedData = localStorage.getItem('memberData');
    let parsedData = storedData && storedData !== 'null' && storedData !== 'undefined' ? JSON.parse(storedData) : {};
    parsedData = { ...parsedData, [name]: value };
    localStorage.setItem('memberData', JSON.stringify(parsedData));
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="mb-4">#BeFree Activities & Services</h4>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="activitiesOfInterest">
              <Form.Label>Which activities/services would you be interested in at the #BeFree Youth Campus?</Form.Label>
              <div>
                <Form.Check type="checkbox" label="#BeFree Cares Clinic (Sexual Health & Awareness Programme - SHAP)" id="activities-caresClinic" checked={activitiesOfInterest.caresClinic} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="#BreakFree Anti-Violence Centre (Mental Health and Counselling)" id="activities-antiViolence" checked={activitiesOfInterest.antiViolence} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="The Plug (Robotics, STEM Centre, After School Programming)" id="activities-thePlug" checked={activitiesOfInterest.thePlug} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="#BeFree Meals (Soup Kitchen)" id="activities-meals" checked={activitiesOfInterest.meals} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Boys and Girls Club" id="activities-boysGirlsClub" checked={activitiesOfInterest.boysGirlsClub} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Spiritual Guidance Counseling" id="activities-spiritualGuidance" checked={activitiesOfInterest.spiritualGuidance} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Entrepreneurship Training and Development" id="activities-entrepreneurship" checked={activitiesOfInterest.entrepreneurship} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Library (Book Club and Reading)" id="activities-library" checked={activitiesOfInterest.library} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Podcast Radio" id="activities-podcast" checked={activitiesOfInterest.podcast} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Outdoor Gym (Self Defense, Boxing, Functional Training)" id="activities-outdoorGym" checked={activitiesOfInterest.outdoorGym} onChange={handleActivityChange} />
                 <Form.Check type="checkbox" label="Volunteering" id="activities-volunteering" checked={activitiesOfInterest.volunteering} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Wi-Fi" id="activities-wifi" checked={activitiesOfInterest.wifi} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Skills Development (Workshops, Training, Mentorship)" id="activities-skillsDevelopment" checked={activitiesOfInterest.skillsDevelopment} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="Life Skills Classes" id="activities-lifeSkills" checked={activitiesOfInterest.lifeSkills} onChange={handleActivityChange} />
                <Form.Check type="checkbox" label="After School Tutoring" id="activities-afterSchoolTutoring" checked={activitiesOfInterest.afterSchoolTutoring} onChange={handleActivityChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <Form.Group id="otherActivities">
              <Form.Label>Other than the list mentioned above, what other activities would you like to volunteer for?</Form.Label>
              <Form.Control type="text" placeholder="Other Activities" name="otherActivities" value={otherActivities} onChange={handleInputChange} />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ActivitiesServices;
